const { client } = require('nightwatch-api');
const { Given, Then, When } = require('cucumber');

let timeToSleep = 45000;

let pageElements = {
    policiesMenu: '[data-test-id="site-menu-policies"]',
    filteringMenu: '[data-test-id="site-menu-subitem-filtering"]',
    addButton: '[data-test-id="add-policy-button"]',
    disabledButton:'[class="pt-button pt-disabled pt-intent-primary pt-button"]',
    policyNameInput: '[data-test-id="policy-name"]',
    createButton:'//span[contains(.,"Create")]'
}

Given(/^access the page policies$/, () => {
    return client
        .waitForElementVisible(pageElements.policiesMenu, timeToSleep)
        .click(pageElements.policiesMenu)
        .waitForElementVisible(pageElements.filteringMenu,timeToSleep, function(){
            this.click(pageElements.filteringMenu)
        })
});
  
Given(/^click in button add$/, () => {
    return client
    .waitForElementVisible(pageElements.addButton, timeToSleep)
    .click(pageElements.addButton)
});

When(/^I insert the name "(.*?)"$/, (name) => {
    return client
    .waitForElementVisible(pageElements.policyNameInput)
    .setValue(pageElements.policyNameInput, name)
});

When(/^I click in the button create$/, () => {
    return client
    .useXpath()
    .waitForElementVisible(pageElements.createButton)
    .click(pageElements.createButton)
    .useCss()
    .waitForElementNotPresent(pageElements.disabledButton, 10000)
});


Then(/^the new policy "(.*?)" has to be present in the list$/, (name) => {
    return client
        .waitForElementVisible(pageElements.policiesMenu, timeToSleep)
        .click(pageElements.policiesMenu)
        .waitForElementVisible(pageElements.filteringMenu,timeToSleep, function () {
            this.click(pageElements.filteringMenu)
        })
        .useXpath()
        .waitForElementVisible('//td[1]/a[contains(.,"'+name+'")]', timeToSleep)
        .assert.elementPresent('//td[1]/a[contains(.,"'+name+'")]')
        .useCss()
});