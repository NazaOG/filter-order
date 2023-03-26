

const Page = require('./page');

class LoginPage extends Page {

    get inputUsername () {
        return $('//*[contains(@name, "userName")]');
    }

    get inputPassword () {
        return $('//*[contains(@name, "password")]');
    }

    get btnSubmit () {
        return $('button[type="submit"]');
    }

    async login (username, password) {
        await this.inputUsername.waitForDisplayed();
        await this.inputUsername.setValue(username);
        await this.inputPassword.waitForDisplayed();
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    open () {
        return super.open('login');
    }
}

module.exports = new LoginPage();
