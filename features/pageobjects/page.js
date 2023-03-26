module.exports = class Page {

    get buttonYes (){
        return $('//button//span[contains(text(), "Да")]')
    }

    get buttonNo (){
        return $('//button//span[contains(text(), "Нет")]')
    }

    async expectAlert(message){
        // await console.log('Alert text : ' + browser.getAlertText())
        await expect(browser.getAlertText()).toHaveTextContaining(message);
    }

    async expectText(message){
        const text = $(`//*[contains(text(), '${message}')]`);
        await text.waitForDisplayed();
        await expect(text).toHaveTextContaining(message);
    }

    async expectTextNotDisplayed(message){
        const text = $(`//*[contains(text(), '${message}')]`);
        await expect(text).not.toBeDisplayed()
    }

    open (path) {
        return browser.url(`http://167.114.201.175:5000/${path}`)
    }
}
