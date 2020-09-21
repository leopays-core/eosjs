To transfer an lpc.token, [submit a transaction](01_how-to-submit-a-transaction.md) to the [`transfer`](https://github.com/leopays-core/leopays.contracts/blob/52fbd4ac7e6c38c558302c48d00469a4bed35f7c/contracts/lpc.token/include/lpc.token/lpc.token.hpp#L83) action of the account storing the token you wish to transfer.

In the example shown below `useraaaaaaaa` transfers **1.0000 LPC** token stored in the `lpc.token` account from `useraaaaaaaa` to `userbbbbbbbb`.
```javascript
(async () => {
  await api.transact({
    actions: [{
      account: 'lpc.token',
      name: 'transfer',
      authorization: [{
        actor: 'useraaaaaaaa',
        permission: 'active',
      }],
      data: {
        from: 'useraaaaaaaa',
        to: 'userbbbbbbbb',
        quantity: '1.0000 LPC',
        memo: 'some memo'
      }
    }]
  }, {
    blocksBehind: 3,
    expireSeconds: 30,
  });
})();
```