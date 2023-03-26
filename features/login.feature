Feature: Login Test

  Scenario: Login success

    Given I have navigated to the login page
    When I login with username 'Admin' and password 'Admin@Navi'
    Then The dashboard page should be displayed
