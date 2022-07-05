const Page = require('./page');

class UsersPage extends Page {

    get loadingTitle () {
        return $('#users-loading'); //получение элемента загрузки
    }

    get usersList () {
        return $('#users-list'); //получение списка
    }

    get usersItems () {
        return browser.react$$('User') // получение массива реакт-компонент
    }

    async loadData() {
        try {
            await this.loadingTitle.waitForDisplayed({ timeout: 1000 }) //ожидание отрисовки
            await this.usersList.waitForDisplayed({ timeout: 2000 })
        } catch (e) {
            throw new Error('Не удалось загрузить')
        }
    }

    async deleteUser() {
        try {
            const usersCount = await this.usersItems.length
            
            if (!usersCount) {
                throw new Error('Пользователи не найдены')
            }

            await this.usersItems[0].$('#user-delete').click() //получение элемента в списке
            
            const usersCountAfterDeleting = await this.usersItems.length

            if (usersCount - usersCountAfterDeleting !== 1) {
                throw new Error('Удаление не прошло')
            }
        } catch (e) {
            throw new Error('Не удалось удалить ' + e.message)
        }
    }

    open () {
        return super.open('users'); //адрес тестовой страницы приложения
    }
}

module.exports = new UsersPage();