@TEST
Feature: In order to remember the things I want to do, as a ToDo MVC user, I want to manage my todo list

  Background:
    Given I launch application url


  @Test1
  Scenario: Add Todos and Complete one by one
    When I add "Todo1, Todo2, Todo3"
    And verify the total number of items left is 3
    Then verify all the 3 items are in All and Active list

    When click All
    And complete the "Todo1"
    Then verify "Todo1" got completed
    And verify "Todo2" and "Todo3" are not completed
    And verify "Todo1" is moved to Completed list
    And verify "Todo2" and "Todo3" are in Active list
    And verify the total number of items left is 2

    When click All
    And complete the "Todo2"
    Then verify "Todo2" got completed
    And verify "Todo3" is not completed
    And verify "Todo2" is moved to Completed list
    And verify "Todo3" is in Active list
    And verify the total number of items left is 1

    When click All
    And complete the "Todo3"
    Then verify "Todo3" got completed
    Then verify "Todo3" is moved to Completed list
    And verify nothing is in Active list
    And verify the total number of items left is 0


  @Test2
  Scenario: Complete todos by clicking Toggle all and then Clear Completed
    When I add "Todo1, Todo2, Todo3"
    And complete all the todos using Toggle all
    Then verify 3 items are in Completed list
    Then verify "Todo1, Todo2, Todo3" are in Completed List
    When click Clear completed
    Then all items should get cleared


  @Test3
  Scenario: Edit Todo
    When I add "Todo1"
    And edit active "Todo1" as "Todo1ActiveEdited" and verify
    And complete the "Todo1ActiveEdited"
    When edit completed "Todo1ActiveEdited" as "Todo1CompletedEdited" and verify


  @Test4
  Scenario: Verify Title/Placeholder/labels
    Then verify the title of the todos page is "todos"
    And verify the placeholder-What needs to be done is present
    When I add "Todo1"
    Then verify the labels All, Active, Completed, 1 item left


  @Test5
  Scenario: Add duplicate Todos
    When I add "Todo1, Todo1, Todo1"
    Then verify duplicate todos can not be added and the count is 1


  @Test6
  Scenario: Delete Todos
    When I add "Todo1, Todo2"
    Then delete "Todo1" and verify
    And delete "Todo2" and verify




