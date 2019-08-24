# login.feature

@login
Feature: Login dns filter system

@LoginSuccessfully
Scenario: SingIn is successfully 

  Given I access the page "https://dev-app.dnsfilter.com"
  And The title page is "Dashboard | DNSFilter"
  When I insert the login input "heron+usuauto@dnsfilter.com"
  And I insert the password input "*Usuauto2019"
  And I click in button to SingIn
  Then I should acces the page overview and see the all elements