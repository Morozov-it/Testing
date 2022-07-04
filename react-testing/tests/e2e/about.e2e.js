const AboutPage = require('../pages/about.page')

describe('About page', () => {
    it('should toggle', async () => {
        //открытие страницы
        await AboutPage.open()

        //ввод данных и переключение состояния
        await AboutPage.toggleTitleWithInput('hello')
        //проверка состояния страницы
        await expect(AboutPage.title).toBeExisting()

        //переключение состояния
        await AboutPage.toggleBtn.click()
        //проверка состояния страницы
        await expect(AboutPage.title).not.toBeExisting()
    });

    it('should not toggle', async () => {
        //открытие страницы
        await AboutPage.open()

        //ввод данных и переключение состояния
        await AboutPage.toggleTitleWithInput('he')
        //проверка состояния страницы
        await expect(AboutPage.title).not.toBeExisting()
    });
});


// запустить e2e тест
// npm run wdio --spec about.e2e.js


