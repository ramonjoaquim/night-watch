# invoice.feature

@invoice
Feature: Verify invoice elements

Background: SingIn is successfully 
  Given I access the page "https://dev-app.dnsfilter.com"
  And The title page is "Dashboard | DNSFilter"
  When I insert the login input "heron+usuauto04@dnsfilter.com"
  And I insert the password input "*Usuauto2019"
  And I click in button to SingIn
  Then I should acces the page overview and see the all elements

@invoice
Scenario: Access invoice page and verify elements 
  Given I access the tab invoices
  When I open a invoice "8083"
  Then The invoices open wiht your elements