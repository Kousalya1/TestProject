package PageObjects;

import org.openqa.selenium.*;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import java.util.List;

public class TodosPage {

	WebDriver driver;

	@FindBy(how=How.CLASS_NAME, using="new-todo")
	private WebElement whatNeedsToBeDoneTextBox;
	@FindBy(how=How.XPATH, using="//a[text()='All']")
	private WebElement all;
	@FindBy(how=How.XPATH, using="//a[text()='Active']")
	private WebElement active;
	@FindBy(how=How.XPATH, using="//a[text()='Completed']")
	private WebElement completed;
	@FindBy(how=How.CLASS_NAME, using="clear-completed")
	private WebElement clearCompleted;

	@FindBy(how=How.XPATH, using="//span[contains(text(),'left')]")
	private WebElement itemsLeft;
	@FindBy(how=How.XPATH, using="//span[contains(text(),'items left')]//strong")
	private WebElement noOfItemsLeft;
	@FindBy(how=How.XPATH, using="//input[@type='checkbox' and @class='toggle']")
	private List<WebElement> checkboxes;
	@FindBy(how=How.XPATH, using="//button[@class='destroy']")
	private List<WebElement> destroyButtons;
	@FindBy(how=How.XPATH, using="//label[@for='toggle-all']")
	private WebElement toggleAll;

	@FindBy(how=How.XPATH, using="//li//label")
	private List<WebElement> todos;
	@FindBy(how=How.XPATH, using="//li[@class='todo']//label")
	private List<WebElement> activeTodos;
	@FindBy(how=How.XPATH, using="//li[@class='todo completed']//label")
	private List<WebElement> completedTodos;

	@FindBy(how=How.XPATH, using="//header//h1")
	private WebElement title;
	@FindBy(how=How.XPATH, using="//input[@placeholder='What needs to be done?']")
	private WebElement whatNeedDonePlaceholder;

	@FindBy(how=How.XPATH, using="//input[@class='edit']")
	private WebElement editTodoTextBox;


	WebDriverWait wait;

	public TodosPage(WebDriver driver) {
		this.driver = driver;
		wait = new WebDriverWait(driver,10);
		PageFactory.initElements(driver, this);
	}

	public void addTodo(String todoName) {
		whatNeedsToBeDoneTextBox.sendKeys(todoName);
		whatNeedsToBeDoneTextBox.sendKeys(Keys.ENTER);
	}

	public void clickAll() {
		all.click();
	}
	public void clickActive() {
		active.click();
	}
	public void clickCompleted() {
		completed.click();
	}
	public void clickClearCompleted() {
		clearCompleted.click();
	}

	public String getNumberOfItemsLeft() {
		return itemsLeft.getText();
	}

	public void clickTodoCheckboxes() {
		for(WebElement element : checkboxes) {
			element.click();
		}
	}

	public void clickTodoCheckbox(String todoName) {
		driver.findElement(By.xpath("//label[text()='" + todoName + "']" +
				"//preceding-sibling::input[@type='checkbox' and @class='toggle']")).click();
	}

	public void clickDestroyButtons() {
		for(WebElement element : destroyButtons) {
			element.click();
		}
	}

	public void clickDestroyButton(String todoName) {
		WebElement element = driver.findElement(By.xpath("//label[text()='" + todoName + "']" +
						"//following-sibling::button[@class='destroy']"));
		clickUsingJavascriptExecutor(element);
	}

	public void clickUsingJavascriptExecutor(WebElement element) {
		JavascriptExecutor executor = (JavascriptExecutor)driver;
		executor.executeScript("arguments[0].click();", element);
	}

	public void clickToggleAll() {
		toggleAll.click();
	}

	public int getTodosCount() {
		return todos.size();
	}

	public int getActiveTodosCount() {
		return activeTodos.size();
	}

	public int getCompletedTodosCount() {
		return completedTodos.size();
	}


	public boolean isTodoCompleted(String todoName) {
		WebElement element = driver.findElement(By.xpath("//li[@class='todo completed']" +
				"//label[text()='" + todoName + "']"));
		wait.until(ExpectedConditions.visibilityOf(element));
		return element.isDisplayed();
	}

	public int getSizeCompletedTodo(String todoName) {
		List<WebElement> list = driver.findElements(By.xpath("//li[@class='todo completed']" +
				"//label[text()='" + todoName + "']"));
		return list.size();
	}

	public boolean isTodoActive(String todoName) {
		return driver.findElement(By.xpath("//li[@class='todo']" +
				"//label[text()='" + todoName + "']")).isDisplayed();
	}

	public int getSizeTodo(String todoName) {
		List<WebElement> list = driver.findElements(By.xpath("//label[text()='" + todoName + "']"));
		return list.size();
	}

	public int getSizeActiveTodo(String todoName) {
		List<WebElement> list = driver.findElements(By.xpath("//li[@class='todo']" +
				"//label[text()='" + todoName + "']"));
		return list.size();
	}

	public void editActiveTodo(String todoName, String newTodoName) {
		Actions actions = new Actions(driver);
		WebElement todoElement = driver.findElement(By.xpath("//li[@class='todo']//label[text()='" + todoName + "']"));
		actions.doubleClick(todoElement).perform();
		editTodoTextBox.sendKeys(Keys.chord(Keys.CONTROL + "a"), newTodoName);
		editTodoTextBox.sendKeys(Keys.ENTER);
	}

	public void editCompletedTodo(String todoName, String newTodoName) {
		Actions actions = new Actions(driver);
		WebElement todoElement = driver.findElement(By.xpath("//li[@class='todo completed']//label[text()='" + todoName + "']"));
		actions.doubleClick(todoElement).perform();
		editTodoTextBox.sendKeys(Keys.chord(Keys.CONTROL + "a"), newTodoName);
		editTodoTextBox.sendKeys(Keys.ENTER);
	}

	public String getTitle() {
		return title.getText();
	}

	public boolean isWhatNeedDonePlaceholderPresent() {
		return whatNeedDonePlaceholder.isDisplayed();
	}

	public boolean isAllDisplayed() {
		return all.isDisplayed();
	}
	public boolean isActiveDisplayed() {
		return active.isDisplayed();
	}
	public boolean isCompletedDisplayed() {
		return completed.isDisplayed();
	}

}
