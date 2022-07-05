const Page = require('./page');

class AboutPage extends Page {

    get toggleBtn () {
        return $('#toggle'); //получение элемента на странице
    }

    get input () {
        return $('#search');
    }

    get title () {
        return $('#hello');
    }

    async toggleTitleWithInput(text) {
        await this.input.setValue(text)
        await this.toggleBtn.click()
    }

    open () {
        return super.open('about'); //адрес тестовой страницы приложения
    }
}

module.exports = new AboutPage();