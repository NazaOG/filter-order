const { Given, When, Then, And } = require('@wdio/cucumber-framework');

const LoginPage = require('../pageobjects/login.page');
const ClientPage = require('../pageobjects/client.page');
const faker = require('@faker-js/faker');

Given("I have navigated to the login page", async () => {
    await browser.reloadSession();
    await LoginPage.open();
})

When("I login with username {string} and password {string}", async (username, password) => {
    await LoginPage.inputUsername.waitForDisplayed();
    await LoginPage.inputUsername.setValue(username);
    await LoginPage.inputPassword.waitForDisplayed();
    await LoginPage.inputPassword.setValue(password);
    await LoginPage.btnSubmit.click();
})

Then("The dashboard page should be displayed", async () => {
    expect(await ClientPage.logoutIcon).toBeDisplayed();
})

//Client Page Steps
Given("I have navigated to the client page", async () => {
    await browser.reloadSession();
    await LoginPage.open();
    await LoginPage.login('Admin', 'Admin@Navi')
    expect(await ClientPage.logoutIcon).toBeDisplayed();
    await browser.pause(5000)
    await ClientPage.open();
})

When("I click on the Add client button", async () => {
    await ClientPage.clickAddClient();
})

When("I input clients information", async () => {
    await ClientPage.inputSurname('surname');
    await ClientPage.inputUserName('username');
    await ClientPage.chooseGender('Мужской');
    await ClientPage.inputUserEmail(faker.faker.internet.email());
    await ClientPage.inputUserTelephone('88' + faker.faker.random.numeric(10));
    await ClientPage.inputUserBirth('2/2/1990');
})

When("I click on the Save button", async () => {
    await ClientPage.clickSaveButton();
})

When("I select a clients data", async () => {
    await ClientPage.clickClientData();
})

When("I update the clients information", async () => {
    await ClientPage.editUserSurname('UpdatedSurname')
})

When("I open filter menu", async () => {
    await ClientPage.clickFilterMenu();
})

When("I change total orders data", async () => {
    await ClientPage.clickTotalOrders();
    await ClientPage.inputClientOrders('6', '7');
})

Then("I see filtered total orders show", async () => {
    await browser.pause(5000)
    await ClientPage.clientDataOrders.scrollIntoView();
    expect(await ClientPage.clientDataOrders.getText()).toHaveText('6')
})

Then("I should see create success message", async () => {
    await browser.pause(2000);
    expect(browser.getAlertText()).toHaveTextContaining('Пользователь успешно добавлен');
})

Then("I should see update success message", async () => {
    await browser.pause(5000)
    await ClientPage.expectAlert('Данные обновлены');
})

Then("I should see client detail data", async () => {
    await ClientPage.expectText('Информация');
})