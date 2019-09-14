const { client } = require('nightwatch-api');
const { Given, Then, When } = require('cucumber');

let timeToSleep = 45000;

var pageElements = {
    menuOrg: '[data-test-id="site-menu-settings"]',
    menuBilling: '[data-test-id="site-menu-subitem-billing-info"]',
    invoicesTab: '//a[contains(.,"Invoices")]',
    invoicePrintBtn: '[data-test-id="invoice-print"]',
    totalPrice: '//tfoot/tr/th[3]',
    plan: '//tr[3]/td[1]'
}

Given(/^I access the tab invoices$/, () => {
    return client
        .waitForElementPresent(pageElements.menuOrg, timeToSleep, function () {
            this.click(pageElements.menuOrg)
        })
        .waitForElementPresent(pageElements.menuBilling, timeToSleep, function () {
            this.click(pageElements.menuBilling)
        })
        .useXpath()
        .waitForElementPresent(pageElements.invoicesTab, timeToSleep, function () {
            this.click(pageElements.invoicesTab)
        })
        .useCss()
  });

 When(/^I open a invoice "(.*?)"$/, (item) => {
    return client
        .useXpath()
        .waitForElementPresent('//a[contains(.,"'+item+'")]', timeToSleep, function () {
            this.click('//a[contains(.,"'+item+'")]')
        })
        .useCss();
 }); 

 Then(/^The invoices open wiht your elements$/, () => {
    return client
        .pause(3000)
        .windowHandles(function (result){
            let handle  = result.value[1];
            this.switchWindow(handle);
        })
        .waitForElementPresent(pageElements.invoicePrintBtn, timeToSleep)
        .assert.elementPresent(pageElements.invoicePrintBtn)
        .useXpath()
        .waitForElementPresent(pageElements.totalPrice, timeToSleep)
        .assert.containsText(pageElements.totalPrice, '$28.38')
        .waitForElementPresent(pageElements.plan, timeToSleep)
        .assert.containsText(pageElements.plan, 'Basic Annual - Prorated Charges')
        .useCss()
 });  