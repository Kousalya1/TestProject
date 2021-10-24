package Managers;

import PageObjects.TodosPage;
import org.openqa.selenium.WebDriver;
import org.testng.asserts.SoftAssert;

public class PageObjectManager {

	WebDriver driver;
	TodosPage todosPage;
	public SoftAssert softAssert = new SoftAssert();

	public PageObjectManager(WebDriver driver) {
		this.driver = driver;
	}
	
	public TodosPage getTodosPage() {
		return (todosPage == null) ? todosPage = new TodosPage(driver) : todosPage;
	}

}
