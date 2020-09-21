To stake resources, [submit a transaction](01_how-to-submit-a-transaction.md) to the [`delegatebw`](https://github.com/leopays-core/leopays.contracts/blob/52fbd4ac7e6c38c558302c48d00469a4bed35f7c/contracts/lpc.system/include/lpc.system/lpc.system.hpp#L692) action of the `lpc` account.

In the example shown below `useraaaaaaaa` stakes **1.0000 LPC** of NET and CPU to the account `mynewaccount`.
```javascript
(async () => {
  await api.transact({
    actions: [{
      account: 'lpc',
      name: 'delegatebw',
      authorization: [{
        actor: 'useraaaaaaaa',
        permission: 'active',
      }],
      data: {
        from: 'useraaaaaaaa',
        receiver: 'mynewaccount',
        stake_net_quantity: '1.0000 LPC',
        stake_cpu_quantity: '1.0000 LPC',
        transfer: false,
      }
    }]
  }, {
    blocksBehind: 3,
    expireSeconds: 30,
  });
})();
```