#!/usr/bin/env bash
LEOPAYS_NODE_RUNNING=$1

set -m

# CAUTION: Never use these development keys for a production account!
# Doing so will most certainly result in the loss of access to your account, these private keys are publicly known.
SYSTEM_ACCOUNT_PRIVATE_KEY="5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3"
SYSTEM_ACCOUNT_PUBLIC_KEY="LPC6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV"

EXAMPLE_ACCOUNT_PRIVATE_KEY="5JuH9fCXmU3xbj8nRmhPZaVrxxXrdPaRmZLW1cznNTmTQR2Kg5Z"
EXAMPLE_ACCOUNT_PUBLIC_KEY="LPC7bxrQUTbQ4mqcoefhWPz1aFieN4fA9RQAiozRz7FrUChHZ7Rb8"

R1_EXAMPLE_ACCOUNT_PRIVATE_KEY="PVT_R1_GrfEfbv5at9kbeHcGagQmvbFLdm6jqEpgE1wsGbrfbZNjpVgT"
R1_EXAMPLE_ACCOUNT_PUBLIC_KEY="PUB_R1_4ztaVy8L9zbmzTdpfq5GcaFYwGwXTNmN3qW7qcgHMmfUZhpzQQ"

ROOT_DIR="/opt"
CONTRACTS_DIR="$ROOT_DIR/leopays/bin/contracts"
BLOCKCHAIN_DATA_DIR=/root/.local/share
BLOCKCHAIN_CONFIG_DIR=/opt/leopays/bin/config-dir
WALLET_DIR="/root/leopays-wallet/"

mkdir -p $ROOT_DIR/bin

# Set PATH
PATH="$PATH:$ROOT_DIR/bin:$ROOT_DIR/bin/scripts"
CONFIG_DIR="$ROOT_DIR/bin/config-dir"

function start_wallet {
  echo "Starting the wallet"
  rm -rf $WALLET_DIR
  mkdir -p $WALLET_DIR
  nohup leopays-wallet --unlock-timeout 999999999 --wallet-dir $WALLET_DIR --http-server-address 127.0.0.1:8900 2>&1 &
  sleep 1s
  wallet_password=$(leopays-cli wallet create --to-console | awk 'FNR > 3 { print $1 }' | tr -d '"')
  echo $wallet_password > "$CONFIG_DIR"/keys/default_wallet_password.txt

  leopays-cli wallet import --private-key $SYSTEM_ACCOUNT_PRIVATE_KEY
}

function post_preactivate {
  curl -X POST http://127.0.0.1:8888/v1/producer/schedule_protocol_feature_activations -d '{"protocol_features_to_activate": ["0ec7e080177b2c02b278d5088611686b49d739925a92d9bfcacd7fc6b74053bd"]}'
}

# $1 feature disgest to activate
function activate_feature {
  leopays-cli push action lpc activate '["'"$1"'"]' -p lpc
  if [ $? -ne 0 ]; then
    exit 1
  fi
}

# $1 account name
# $2 contract directory
# $3 wasm file name
# $4 abi file name
function setcode {
  retry_count="4"

  while [ $retry_count -gt 0 ]; do
    leopays-cli set code $1 $2 -p $1@active
    if [ $? -eq 0 ]; then
      break
    fi

    echo "setcode failed retrying..."
    sleep 1s
    retry_count=$[$retry_count-1]
  done

  if [ $retry_count -eq 0 ]; then
    echo "setcode failed too many times, bailing."
    exit 1
  fi
}

# $1 account name
# $2 contract directory
# $3 abi file name
function setabi {
  retry_count="4"

  while [ $retry_count -gt 0 ]; do
    leopays-cli set abi $1 $2 -p $1@active
    if [ $? -eq 0 ]; then
      break
    fi

    echo "setcode failed retrying..."
    sleep 1s
    retry_count=$[$retry_count-1]
  done

  if [ $retry_count -eq 0 ]; then
    echo "setcode failed too many times, bailing."
    exit 1
  fi
}

# $1 - account name
# $2 - public key
# $3 - private key
function create_account {
  leopays-cli wallet import --private-key $3
  leopays-cli create account lpc $1 $2
}

# Move into the executable directory
cd $ROOT_DIR/bin/
mkdir -p $CONFIG_DIR
mkdir -p $BLOCKCHAIN_DATA_DIR
mkdir -p $BLOCKCHAIN_CONFIG_DIR

if [ -z "$LEOPAYS_NODE_RUNNING" ]; then
  echo "Starting the chain for setup"
  leopays-node -e -p leopays \
  --data-dir $BLOCKCHAIN_DATA_DIR \
  --config-dir $BLOCKCHAIN_CONFIG_DIR \
  --http-validate-host=false \
  --plugin eosio::producer_api_plugin \
  --plugin eosio::chain_api_plugin \
  --plugin eosio::http_plugin \
  --http-server-address=0.0.0.0:8888 \
  --access-control-allow-origin=* \
  --contracts-console \
  --max-transaction-time=100000 \
  --verbose-http-errors &
fi

mkdir -p "$CONFIG_DIR"/keys

sleep 1s

echo "Waiting for the chain to finish startup"
until curl localhost:8888/v1/chain/get_info
do
  echo "Still waiting"
  sleep 1s
done

# Sleep for 2s to allow time for 4 blocks to be created so we have blocks to reference when sending transactions
sleep 2s
echo "Creating accounts and deploying contracts"

start_wallet

# preactivate concensus upgrades
post_preactivate

sleep 1s
leopays-cli wallet unlock --password $(cat "$CONFIG_DIR"/keys/default_wallet_password.txt) || true
setabi lpc $CONTRACTS_DIR/boot/boot.abi
setcode lpc $CONTRACTS_DIR/boot/boot.wasm
sleep 2s
leopays-cli push action lpc boot "[]" -p lpc@active

sleep 1s
leopays-cli wallet unlock --password $(cat "$CONFIG_DIR"/keys/default_wallet_password.txt) || true
setcode lpc $CONTRACTS_DIR/system/system.wasm
setabi lpc $CONTRACTS_DIR/system/system.abi

# token
sleep 1s
leopays-cli wallet unlock --password $(cat "$CONFIG_DIR"/keys/default_wallet_password.txt) || true
create_account lpc.token $SYSTEM_ACCOUNT_PUBLIC_KEY $SYSTEM_ACCOUNT_PRIVATE_KEY
create_account bob $EXAMPLE_ACCOUNT_PUBLIC_KEY $EXAMPLE_ACCOUNT_PRIVATE_KEY
create_account alice $EXAMPLE_ACCOUNT_PUBLIC_KEY $EXAMPLE_ACCOUNT_PRIVATE_KEY
create_account bobr1 $R1_EXAMPLE_ACCOUNT_PUBLIC_KEY $R1_EXAMPLE_ACCOUNT_PRIVATE_KEY
create_account alicer1 $R1_EXAMPLE_ACCOUNT_PUBLIC_KEY $R1_EXAMPLE_ACCOUNT_PRIVATE_KEY

sleep 1s
leopays-cli set abi lpc.token $CONTRACTS_DIR/token/token.abi -p lpc.token@active -p lpc@active
leopays-cli set code lpc.token $CONTRACTS_DIR/token/token.wasm -p lpc.token@active -p lpc@active

leopays-cli push action lpc.token create '["bob", "10000000000.0000 LPC"]' -p lpc.token
leopays-cli push action lpc.token issue '["bob", "5000000000.0000 LPC", "Half of available supply"]' -p bob
leopays-cli push action lpc.token transfer '["bob", "alice", "1000000.0000 LPC", "memo"]' -p bob
leopays-cli push action lpc.token transfer '["bob", "bobr1", "1000000.0000 LPC", "memo"]' -p bob
leopays-cli push action lpc.token transfer '["bob", "alicer1", "1000000.0000 LPC", "memo"]' -p bob

leopays-cli push action lpc init "[]" -p lpc@active

echo "All done initializing the blockchain"

if [[ -z $LEOPAYS_NODE_RUNNING ]]; then
  echo "Shut down leopays-node, sleeping for 2 seconds to allow time for at least 4 blocks to be created after deploying contracts"
  sleep 2s
  kill %1
  fg %1
fi
