package StepDefinitions;

import Managers.PageObjectManager;
import PageObjects.TodosPage;
import cucumber.api.java.After;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.asserts.SoftAssert;

public class Steps {

	WebDriver driver;
	PageObjectManager pageObjectManager;
	TodosPage todosPage;
	SoftAssert softAssert;

	@Given("^I launch application url$")
	public void i_launch_application_url() {
		System.setProperty("webdriver.chrome.driver", "src\\main\\resources\\Drivers\\94\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		String url = "https://todomvc.com/examples/vue/";
		driver.get(url);

		pageObjectManager = new PageObjectManager(driver);
		todosPage = pageObjectManager.getTodosPage();
		softAssert = pageObjectManager.softAssert;
	}

	@When("^I add \"(.*?)\"$")
	public void i_add(String arg1) {
		if(arg1.contains(",")) {
			String todos[] = arg1.split(",");
			for(String todo : todos) {
				todosPage.addTodo(todo.trim());
			}
		} else {
			todosPage.addTodo(arg1);
		}
	}

	@Then("^verify the total number of items left is (\\d+)$")
	public void verify_the_total_number_of_items_left_is(int arg1) {
		String expectedResult = arg1 + " items left";
		if(arg1 == 1) expectedResult = arg1 + " item left";
		softAssert.assertEquals(todosPage.getNumberOfItemsLeft(), expectedResult,
				"FAIL: Actual and Expected number of items left is not equal.");
	}

	@Then("^verify all the (\\d+) items are in All and Active list$")
	public void verify_all_the_items_are_in_All_and_Active_list(int arg1) {
		todosPage.clickAll();
		softAssert.assertEquals(todosPage.getTodosCount(), arg1,
				"FAIL: Actual and Expected number of Todo items are not equal.");
		todosPage.clickActive();
		softAssert.assertEquals(todosPage.getActiveTodosCount(), arg1,
				"FAIL: Actual and Expected number of Active Todo items are not equal.");
	}

	@When("^click All$")
	public void click_All() {
		todosPage.clickAll();
	}

	@When("^complete the \"(.*?)\"$")
	public void complete_the(String arg1) {
		todosPage.clickTodoCheckbox(arg1);
	}

	@Then("^verify \"(.*?)\" got completed$")
	public void verify_got_completed(String arg1) {
		softAssert.assertTrue(todosPage.isTodoCompleted(arg1),
				"FAIL: Todo: " + arg1 + " is not completed yet.");
	}

	@Then("^verify \"(.*?)\" is moved to Completed list$")
	public void verify_is_moved_to_Completed_list(String arg1) {
		todosPage.clickCompleted();
		softAssert.assertTrue(todosPage.isTodoCompleted(arg1),
				"FAIL: Todo: " + arg1 + " is not in completed list.");
	}

	@Then("^verify \"(.*?)\" and \"(.*?)\" are not completed$")
	public void verify_and_are_not_completed(String arg1, String arg2) {
		softAssert.assertTrue(todosPage.isTodoActive(arg1),
				"FAIL: Todo: " + arg1 + " got completed, but expecting it to be not completed.");
		softAssert.assertTrue(todosPage.isTodoActive(arg2),
				"FAIL: Todo: " + arg2 + " got completed, but expecting it to be not completed.");
	}

	@Then("^verify \"(.*?)\" and \"(.*?)\" are in Active list$")
	public void verify_and_are_in_Active_list(String arg1, String arg2) {
		todosPage.clickActive();
		softAssert.assertTrue(todosPage.isTodoActive(arg1),
				"FAIL: Todo: " + arg1 + " is not in Active list.");
		softAssert.assertTrue(todosPage.isTodoActive(arg2),
				"FAIL: Todo: " + arg2 + " is not in Active list.");
	}

	@Then("^verify \"(.*?)\" is not completed$")
	public void verify_is_not_completed(String arg1) {
		softAssert.assertTrue(todosPage.isTodoActive(arg1),
				"FAIL: Todo: " + arg1 + " got completed, but expecting it to be not completed.");
	}

	@Then("^verify \"(.*?)\" is in Active list$")
	public void verify_is_in_Active_list(String arg1) {
		todosPage.clickActive();
		softAssert.assertTrue(todosPage.isTodoActive(arg1),
				"FAIL: Todo: " + arg1 + " is not in Active list.");
	}

	@Then("^verify nothing is in Active list$")
	public void verify_nothing_is_in_Active_list() {
		todosPage.clickActive();
		softAssert.assertEquals(todosPage.getTodosCount(), 0,
				"FAIL: Active list may have todos, but expecting the count to be 0.");
	}

	@When("^complete all the todos using Toggle all$")
	public void complete_all_the_todos_using_Toggle_all() {
		todosPage.clickToggleAll();
	}

	@Then("^verify (\\d+) items are in Completed list$")
	public void verify_all_the_items_are_in_Completed_list(int arg1) {
		todosPage.clickCompleted();
		softAssert.assertEquals(todosPage.getCompletedTodosCount(), arg1,
				"FAIL: Actual and Expected number of Completed Todo items are not equal.");
	}

	@Then("^verify \"(.*?)\" are in Completed List$")
	public void verify_are_in_Completed_List(String arg1) {
		if(arg1.contains(",")) {
			String todos[] = arg1.split(",");
			for(String todo : todos) {
				softAssert.assertTrue(todosPage.isTodoCompleted(todo.trim()),
						"FAIL: Todo: " + todo.trim() + " is not in Completed list.");
			}
		} else {
			softAssert.assertTrue(todosPage.isTodoCompleted(arg1),
					"FAIL: Todo: " + arg1 + " is not in Completed list.");
		}
	}

	@When("^click Clear completed$")
	public void click_Clear_completed() {
		todosPage.clickClearCompleted();
	}

	@Then("^all items should get cleared$")
	public void all_items_should_get_cleared() {
		softAssert.assertEquals(todosPage.getTodosCount(), 0,
				"FAIL: All items are not cleared yet, expecting the count to be 0.");
	}

	@When("^edit active \"(.*?)\" as \"(.*?)\" and verify$")
	public void edit_active_as_and_verify(String arg1, String arg2) {
		todosPage.editActiveTodo(arg1, arg2);
		softAssert.assertEquals(todosPage.getSizeActiveTodo(arg1), 0,
				"FAIL: Todo: " + arg1 + " is not get edited.");
		softAssert.assertTrue(todosPage.isTodoActive(arg2),
				"FAIL: Todo is not get edited as " + arg2 + ".");
	}

	@When("^edit completed \"(.*?)\" as \"(.*?)\" and verify$")
	public void edit_completed_as_and_verify(String arg1, String arg2) {
		todosPage.editCompletedTodo(arg1, arg2);
		softAssert.assertEquals(todosPage.getSizeCompletedTodo(arg1), 0,
				"FAIL: Todo: " + arg1 + " is not get edited.");
		softAssert.assertTrue(todosPage.isTodoCompleted(arg2),
				"FAIL: Todo is not get edited as " + arg2 + ".");
	}

	@Then("^verify the title of the todos page is \"(.*?)\"$")
	public void verify_the_title_of_the_todos_page_is(String arg1) {
		softAssert.assertEquals(todosPage.getTitle(), arg1,"FAIL: TodosPage's title is not equal.");
	}

	@Then("^verify the placeholder-What needs to be done is present$")
	public void verify_the_placeholder_What_needs_to_be_done_is_present() {
		softAssert.assertTrue(todosPage.isWhatNeedDonePlaceholderPresent(),
				"FAIL: What needs to be done? placeholder is not displayed.");
	}

	@Then("^verify the labels All, Active, Completed, 1 item left$")
	public void verify_the_labels_All_Active_Completed_1_item_left() {
		softAssert.assertTrue(todosPage.isAllDisplayed(),"FAIL: Label 'All' is not displayed.");
		softAssert.assertTrue(todosPage.isActiveDisplayed(),"FAIL: Label 'Active' is not displayed.");
		softAssert.assertTrue(todosPage.isCompletedDisplayed(),"FAIL: Label 'Completed' is not displayed.");
		softAssert.assertEquals(todosPage.getNumberOfItemsLeft(), "1 item left",
				"FAIL: Label '1 item left' is not displayed.");
	}

	@Then("^verify duplicate todos can not be added and the count is (\\d+)$")
	public void verifyDuplicateTodosCanNotBeAddedAndTheCountIs(int arg1) {
		softAssert.assertEquals(todosPage.getActiveTodosCount(), arg1,
				"FAIL: Actual and Expected number of Todos count is not equal, duplicate todos may be added.");
	}

	@When("^delete \"(.*?)\" and verify$")
	public void delete(String arg1) {
		todosPage.clickDestroyButton(arg1);
		softAssert.assertEquals(todosPage.getSizeTodo(arg1), 0,
				"FAIL: Todo " + arg1 + " is displayed, but expecting it to be not displayed.");
	}


	@After
	public void after() {
		driver.close();
		softAssert.assertAll();
	}


}
