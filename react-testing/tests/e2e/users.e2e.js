const UsersPage = require('../pages/users.page')

describe('Users page', () => {
    it('load data', async () => {
        //загрузка данных
        await UsersPage.open()
        await UsersPage.loadData()
    });

    it('delete user', async () => {
        //загрузка данных
        await UsersPage.open()
        await UsersPage.loadData()
        await UsersPage.deleteUser()
    });

});

// запустить e2e тест
// npx wdio run ./wdio.conf.js --spec users.e2e.js


