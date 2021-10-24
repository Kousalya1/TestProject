$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("TestFeature.feature");
formatter.feature({
  "line": 2,
  "name": "In order to remember the things I want to do, as a ToDo MVC user, I want to manage my todo list",
  "description": "",
  "id": "in-order-to-remember-the-things-i-want-to-do,-as-a-todo-mvc-user,-i-want-to-manage-my-todo-list",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@TEST"
    }
  ]
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I launch application url",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.i_launch_application_url()"
});
formatter.result({
  "duration": 4971569500,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Add Todos and Complete one by one",
  "description": "",
  "id": "in-order-to-remember-the-things-i-want-to-do,-as-a-todo-mvc-user,-i-want-to-manage-my-todo-list;add-todos-and-complete-one-by-one",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@Test1"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I add \"Todo1, Todo2, Todo3\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "verify the total number of items left is 3",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "verify all the 3 items are in All and Active list",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "click All",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "complete the \"Todo1\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "verify \"Todo1\" got completed",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "verify \"Todo2\" and \"Todo3\" are not completed",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "verify \"Todo1\" is moved to Completed list",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "verify \"Todo2\" and \"Todo3\" are in Active list",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "verify the total number of items left is 2",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "click All",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "complete the \"Todo2\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "verify \"Todo2\" got completed",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "verify \"Todo3\" is not completed",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "verify \"Todo2\" is moved to Completed list",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "verify \"Todo3\" is in Active list",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "verify the total number of items left is 1",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "click All",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "complete the \"Todo3\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "verify \"Todo3\" got completed",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "verify \"Todo3\" is moved to Completed list",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "verify nothing is in Active list",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "verify the total number of items left is 0",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Todo1, Todo2, Todo3",
      "offset": 7
    }
  ],
  "location": "Steps.i_add(String)"
});
formatter.result({
  "duration": 511365900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 41
    }
  ],
  "location": "Steps.verify_the_total_number_of_items_left_is(int)"
});
formatter.result({
  "duration": 60023500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 15
    }
  ],
  "location": "Steps.verify_all_the_items_are_in_All_and_Active_list(int)"
});
formatter.result({
  "duration": 264374200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_All()"
});
formatter.result({
  "duration": 171653000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Todo1",
      "offset": 14
    }
  ],
  "location": "Steps.complete_the(String)"
});
formatter.result({
  "duration": 162586500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Todo1",
      "offset": 8
    }
  ],
  "location": "Steps.verify_got_completed(String)"
});
formatter.result({
  "duration": 214511700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Todo2",
      "offset": 8
    },
    {
      "val": "Todo3",
      "offset": 20
    }
  ],
  "location": "Steps.verify_and_are_not_completed(String,String)"
});
formatter.result({
  "duration": 145144600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Todo1",
      "offset": 8
    }
  ],
  "location": "Steps.verify_is_moved_to_Completed_list(String)"
});
formatter.result({
  "duration": 187782500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Todo2",
      "offset": 8
    },
    {
      "val": "Todo3",
      "offset": 20
    }
  ],
  "location": "Steps.verify_and_are_in_Active_list(String,String)"
});
formatter.result({
  "duration": 204241300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 41
    }
  ],
  "location": "Steps.verify_the_total_number_of_items_left_is(int)"
});
formatter.result({
  "duration": 23003300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_All()"
});
formatter.result({
  "duration": 62084200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Todo2",
      "offset": 14
    }
  ],
  "location": "Steps.complete_the(String)"
});
formatter.result({
  "duration": 148999700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Todo2",
      "offset": 8
    }
  ],
  "location": "Steps.verify_got_completed(String)"
});
formatter.result({
  "duration": 91358500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Todo3",
      "offset": 8
    }
  ],
  "location": "Steps.verify_is_not_completed(String)"
});
formatter.result({
  "duration": 40071000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Todo2",
      "offset": 8
    }
  ],
  "location": "Steps.verify_is_moved_to_Completed_list(String)"
});
formatter.result({
  "duration": 180525100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Todo3",
      "offset": 8
    }
  ],
  "location": "Steps.verify_is_in_Active_list(String)"
});
formatter.result({
  "duration": 139986400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 41
    }
  ],
  "location": "Steps.verify_the_total_number_of_items_left_is(int)"
});
formatter.result({
  "duration": 22941600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_All()"
});
formatter.result({
  "duration": 51455400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Todo3",
      "offset": 14
    }
  ],
  "location": "Steps.complete_the(String)"
});
formatter.result({
  "duration": 105194500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Todo3",
      "offset": 8
    }
  ],
  "location": "Steps.verify_got_completed(String)"
});
formatter.result({
  "duration": 73316100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Todo3",
      "offset": 8
    }
  ],
  "location": "Steps.verify_is_moved_to_Completed_list(String)"
});
formatter.result({
  "duration": 129066400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.verify_nothing_is_in_Active_list()"
});
formatter.result({
  "duration": 55204500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 41
    }
  ],
  "location": "Steps.verify_the_total_number_of_items_left_is(int)"
});
formatter.result({
  "duration": 23850400,
  "status": "passed"
});
formatter.after({
  "duration": 167322800,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I launch application url",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.i_launch_application_url()"
});
formatter.result({
  "duration": 2086501400,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Complete todos by clicking Toggle all and then Clear Completed",
  "description": "",
  "id": "in-order-to-remember-the-things-i-want-to-do,-as-a-todo-mvc-user,-i-want-to-manage-my-todo-list;complete-todos-by-clicking-toggle-all-and-then-clear-completed",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 38,
      "name": "@Test2"
    }
  ]
});
formatter.step({
  "line": 40,
  "name": "I add \"Todo1, Todo2, Todo3\"",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "complete all the todos using Toggle all",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "verify 3 items are in Completed list",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "verify \"Todo1, Todo2, Todo3\" are in Completed List",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "click Clear completed",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "all items should get cleared",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Todo1, Todo2, Todo3",
      "offset": 7
    }
  ],
  "location": "Steps.i_add(String)"
});
formatter.result({
  "duration": 408737300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.complete_all_the_todos_using_Toggle_all()"
});
formatter.result({
  "duration": 64639000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 7
    }
  ],
  "location": "Steps.verify_all_the_items_are_in_Completed_list(int)"
});
formatter.result({
  "duration": 95693000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Todo1, Todo2, Todo3",
      "offset": 8
    }
  ],
  "location": "Steps.verify_are_in_Completed_List(String)"
});
formatter.result({
  "duration": 200396500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_Clear_completed()"
});
formatter.result({
  "duration": 61498500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.all_items_should_get_cleared()"
});
formatter.result({
  "duration": 21317500,
  "status": "passed"
});
formatter.after({
  "duration": 145853200,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I launch application url",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.i_launch_application_url()"
});
formatter.result({
  "duration": 1899908500,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
  "name": "Edit Todo",
  "description": "",
  "id": "in-order-to-remember-the-things-i-want-to-do,-as-a-todo-mvc-user,-i-want-to-manage-my-todo-list;edit-todo",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 48,
      "name": "@Test3"
    }
  ]
});
formatter.step({
  "line": 50,
  "name": "I add \"Todo1\"",
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "edit active \"Todo1\" as \"Todo1ActiveEdited\" and verify",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "complete the \"Todo1ActiveEdited\"",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "edit completed \"Todo1ActiveEdited\" as \"Todo1CompletedEdited\" and verify",
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "Todo1",
      "offset": 7
    }
  ],
  "location": "Steps.i_add(String)"
});
formatter.result({
  "duration": 167668200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Todo1",
      "offset": 13
    },
    {
      "val": "Todo1ActiveEdited",
      "offset": 24
    }
  ],
  "location": "Steps.edit_active_as_and_verify(String,String)"
});
formatter.result({
  "duration": 458254200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Todo1ActiveEdited",
      "offset": 14
    }
  ],
  "location": "Steps.complete_the(String)"
});
formatter.result({
  "duration": 74445700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Todo1ActiveEdited",
      "offset": 16
    },
    {
      "val": "Todo1CompletedEdited",
      "offset": 39
    }
  ],
  "location": "Steps.edit_completed_as_and_verify(String,String)"
});
formatter.result({
  "duration": 419206300,
  "status": "passed"
});
formatter.after({
  "duration": 154750300,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I launch application url",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.i_launch_application_url()"
});
formatter.result({
  "duration": 2372802200,
  "status": "passed"
});
formatter.scenario({
  "line": 57,
  "name": "Verify Title/Placeholder/labels",
  "description": "",
  "id": "in-order-to-remember-the-things-i-want-to-do,-as-a-todo-mvc-user,-i-want-to-manage-my-todo-list;verify-title/placeholder/labels",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 56,
      "name": "@Test4"
    }
  ]
});
formatter.step({
  "line": 58,
  "name": "verify the title of the todos page is \"todos\"",
  "keyword": "Then "
});
formatter.step({
  "line": 59,
  "name": "verify the placeholder-What needs to be done is present",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "I add \"Todo1\"",
  "keyword": "When "
});
formatter.step({
  "line": 61,
  "name": "verify the labels All, Active, Completed, 1 item left",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "todos",
      "offset": 39
    }
  ],
  "location": "Steps.verify_the_title_of_the_todos_page_is(String)"
});
formatter.result({
  "duration": 49587000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.verify_the_placeholder_What_needs_to_be_done_is_present()"
});
formatter.result({
  "duration": 43203100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Todo1",
      "offset": 7
    }
  ],
  "location": "Steps.i_add(String)"
});
formatter.result({
  "duration": 155089400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.verify_the_labels_All_Active_Completed_1_item_left()"
});
formatter.result({
  "duration": 151363700,
  "status": "passed"
});
formatter.after({
  "duration": 68485600,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I launch application url",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.i_launch_application_url()"
});
formatter.result({
  "duration": 2007200700,
  "status": "passed"
});
formatter.scenario({
  "line": 65,
  "name": "Add duplicate Todos",
  "description": "",
  "id": "in-order-to-remember-the-things-i-want-to-do,-as-a-todo-mvc-user,-i-want-to-manage-my-todo-list;add-duplicate-todos",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 64,
      "name": "@Test5"
    }
  ]
});
formatter.step({
  "line": 66,
  "name": "I add \"Todo1, Todo1, Todo1\"",
  "keyword": "When "
});
formatter.step({
  "line": 67,
  "name": "verify duplicate todos can not be added and the count is 1",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Todo1, Todo1, Todo1",
      "offset": 7
    }
  ],
  "location": "Steps.i_add(String)"
});
formatter.result({
  "duration": 450244800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 57
    }
  ],
  "location": "Steps.verifyDuplicateTodosCanNotBeAddedAndTheCountIs(int)"
});
formatter.result({
  "duration": 20218400,
  "status": "passed"
});
formatter.after({
  "duration": 108677400,
  "error_message": "java.lang.AssertionError: The following asserts failed:\nFAIL: Actual and Expected number of Todos count is not equal, duplicate todos may be added.\r\n\tat org.testng.asserts.SoftAssert.assertAll(SoftAssert.java:37)\r\n\tat StepDefinitions.Steps.after(Steps.java:215)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:59)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:222)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:210)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:204)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:50)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I launch application url",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.i_launch_application_url()"
});
formatter.result({
  "duration": 2292516400,
  "status": "passed"
});
formatter.scenario({
  "line": 71,
  "name": "Delete Todos",
  "description": "",
  "id": "in-order-to-remember-the-things-i-want-to-do,-as-a-todo-mvc-user,-i-want-to-manage-my-todo-list;delete-todos",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 70,
      "name": "@Test6"
    }
  ]
});
formatter.step({
  "line": 72,
  "name": "I add \"Todo1, Todo2\"",
  "keyword": "When "
});
formatter.step({
  "line": 73,
  "name": "delete \"Todo1\" and verify",
  "keyword": "Then "
});
formatter.step({
  "line": 74,
  "name": "delete \"Todo2\" and verify",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Todo1, Todo2",
      "offset": 7
    }
  ],
  "location": "Steps.i_add(String)"
});
formatter.result({
  "duration": 557892500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Todo1",
      "offset": 8
    }
  ],
  "location": "Steps.delete(String)"
});
formatter.result({
  "duration": 53027300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Todo2",
      "offset": 8
    }
  ],
  "location": "Steps.delete(String)"
});
formatter.result({
  "duration": 50551000,
  "status": "passed"
});
formatter.after({
  "duration": 126551600,
  "status": "passed"
});
});