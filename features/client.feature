Feature: Client Test
    Scenario: Create client success
        Given I have navigated to the client page
        When I click on the Add client button
        And I input clients information
        And I click on the Save button
        Then I should see create success message

    Scenario: View client success
        Given I have navigated to the client page
        When I select a clients data
        Then I should see client detail data
    
    Scenario: Edit client success
        Given I have navigated to the client page
        When I select a clients data
        And I update the clients information
        And I click on the Save button
        Then I should see update success message

    Scenario: Filter total orders
        Given I have navigated to the client page
        When I open filter menu
        And I change total orders data
        Then I see filtered total orders show