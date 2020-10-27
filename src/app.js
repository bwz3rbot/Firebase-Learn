const users = require('./service/users');
(async () => {

    const ID = await users.createArray('kleajfaelk', 'faokewrjfake');
    console.log("Got this back:",ID);
    await users.addValueToArray(ID);
})();