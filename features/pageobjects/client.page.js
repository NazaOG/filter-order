

const Page = require('./page');

class ClientPage extends Page {

    get logoutIcon () {
        return $('//*[contains(@class, "crm-logout")]');
    }

    get addClient () {
        return $('//*[contains(@class, "clients-add-user-dialog crm-button")]')
    }

    get userSurnameField(){
        return $('//*[contains(@formcontrolname, "userSurname")]')
    }

    get userNameField(){
        return $('//*[contains(@formcontrolname, "userName")]')
    }

    get genderMale(){
        return $('//label//div[contains(text(), "Мужской")]')
    }

    get genderFemale(){
        return $('//label//div[contains(text(), "Женский")]')
    }

    get userEmail(){
        return $('//*[contains(@formcontrolname, "email")]')
    }

    get userTelephone(){
        return $('//*[contains(@formcontrolname, "phone")]')
    }

    get userDateOfBirth(){
        return $('//*[contains(@formcontrolname, "birthday")]')
    }

    get saveButton(){
        return $('//*[contains(@name, "save")]')
    }

    get clientData(){
        return $('/html/body/app-root/app-clients/div/div/div[1]/table/tbody/tr[1]');
    }

    get editUserSurnameField(){
        return $('#mat-input-1')
    }

    get filterMenuForm(){
        return $('//form')
    }

    get totalOrdersFilter(){
        return $('//*[contains(text(), "Итого заказов")]')
    }

    get clientOrdersFilterMinField(){
        return $('//app-client-orders-count-filter//div//input[contains(@class, "orders field min ng-untouched ng-pristine ng-valid")]')
    }

    get clientOrdersFilterMaxField(){
        return $('//app-client-orders-count-filter//div//input[contains(@class, "orders field max ng-untouched ng-pristine ng-valid")]')
    }

    get clientDataOrders(){
        return $('/html/body/app-root/app-clients/div/div/div[1]/table/tbody/tr[1]/td[4]/div/span')
    }

    async clickAddClient(){
        await this.addClient.waitForDisplayed();
        await this.addClient.click();
    }

    async inputSurname(surname){
        await this.userSurnameField.waitForDisplayed();
        await this.userSurnameField.setValue(surname);
    }

    async inputUserName(userName){
        await this.userNameField.waitForDisplayed();
        await this.userNameField.setValue(userName);
    }

    async chooseGender(gender){
        if(gender === "Мужской"){
            await this.genderMale.click();
        }else{
            await this.genderFemale.click();
        }
    }

    async inputUserEmail(email){
        await this.userEmail.waitForDisplayed();
        await this.userEmail.setValue(email);
    }

    async inputUserTelephone(phone){
        await this.userTelephone.waitForDisplayed();
        await this.userTelephone.setValue(phone);
    }

    async inputUserBirth(birth){
        await this.userDateOfBirth.waitForDisplayed();
        await this.userDateOfBirth.setValue(birth);
    }

    async editUserSurname(surname){
        await this.editUserSurnameField.waitForDisplayed()
        await this.editUserSurnameField.setValue(surname)
    }

    async clickSaveButton(){
        await this.saveButton.waitForDisplayed();
        await this.saveButton.click();
    }

    async clickClientData(){
        await this.clientData.waitForDisplayed();
        await browser.pause(2000);
        await this.clientData.click();
    }

    async clickFilterMenu(){
        await this.filterMenuForm.waitForDisplayed();
        await this.filterMenuForm.click();
    }

    async clickTotalOrders(){
        await this.totalOrdersFilter.waitForDisplayed();
        await this.totalOrdersFilter.scrollIntoView();
        await this.totalOrdersFilter.click();
    }

    async inputClientOrders(minValue, maxValue){
        await this.clientOrdersFilterMinField.waitForDisplayed();
        await this.clientOrdersFilterMinField.click();
        await this.clientOrdersFilterMinField.setValue(minValue);
        await this.clientOrdersFilterMaxField.waitForDisplayed();
        await this.clientOrdersFilterMaxField.click();
        await this.clientOrdersFilterMaxField.setValue(maxValue);
    }

    open () {
        return super.open('clients');
    }
}

module.exports = new ClientPage();
