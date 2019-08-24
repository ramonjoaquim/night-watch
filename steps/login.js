const { client } = require('nightwatch-api');
const { Given, Then, When } = require('cucumber');

Given(/^I access the page "(.*?)"$/, (url) => {
  return client.url(url);
});

Given(/^The title page is "(.*?)"$/, (title) => {
  return client.assert.title(title);
});

When(/^I insert the login input "(.*?)"$/, (user) => {
  return client
    .waitForElementVisible('[data-test-id="email"]',15000)
    .setValue('[data-test-id="email"]',user);
});

When(/^I insert the password input "(.*?)"$/, (password) => {
  return client
    .waitForElementVisible('[data-test-id="password"]',15000)
    .setValue('[data-test-id="password"]',password);
});

When(/^I click in button to SingIn$/, () => {
  return client
    .waitForElementVisible('[data-test-id="login-button"]',20000)
    .click('[data-test-id="login-button"]');
});

Then(/^I should acces the page overview and see the all elements$/, () => {
  return client
    .waitForElementVisible('[data-test-id="button-menu-general"]',15000)
    .assert.elementPresent('[data-test-id="button-menu-general"]')
    .useXpath()
    .waitForElementVisible('//button[contains(.,"Security")]',15000)
    .assert.elementPresent('//button[contains(.,"Security")]')

    .waitForElementVisible('//h4[contains(.,"Geo Activity")]',15000)
    .assert.containsText('//h4[contains(.,"Geo Activity")]','Geo Activity')
    .useCss();  
});