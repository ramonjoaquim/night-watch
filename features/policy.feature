Feature: add new Policy
    with a new user I add new Policy and verify if the new policy has present

Background: SingIn is successfully 

  Given I access the page "https://dev-app.dnsfilter.com"
  And The title page is "Dashboard | DNSFilter"
  When I insert the login input "heron+usuauto@dnsfilter.com"
  And I insert the password input "*Usuauto2019"
  And I click in button to SingIn
  Then I should acces the page overview and see the all elements

@newPolicy
Scenario: Add new policy
  Given access the page policies
  And click in button add
  When I insert the name "Policy auto 2019"
  And I click in the button create
  Then the new policy "Policy auto 2019" has to be present in the list