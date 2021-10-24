package TestRunner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src\\test\\resources\\Features", glue = "StepDefinitions",
        tags = "@TEST",

plugin= {"html:target/cucumber-html-report", "pretty:target/cucumber-pretty.txt"})

public class Runner {

}
