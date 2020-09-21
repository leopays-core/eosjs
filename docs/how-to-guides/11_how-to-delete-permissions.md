To delete permissions, [submit a transaction](01_how-to-submit-a-transaction.md) to the [`deleteauth`](https://github.com/leopays-core/leopays.contracts/blob/52fbd4ac7e6c38c558302c48d00469a4bed35f7c/contracts/lpc.bios/include/lpc.bios/lpc.bios.hpp#L219) action of the `lpc` account.

In the example shown below `useraaaaaaaa` deletes the permission `my_new_permission` on the account `useraaaaaaaa`.
```javascript
const deleteauth_input = {
  account: 'useraaaaaaaa',
  permission: 'my_new_permission',
};

(async () => {
  await api.transact({
    actions: [
    {
      account: 'lpc',
      name: 'deleteauth',
      authorization: [{
        actor: 'useraaaaaaaa',
        permission: 'active',
      }],
      data: delete_auth_data,
    }]
  }, {
    blocksBehind: 3,
    expireSeconds: 30,
  });
})();
```