import {test,expect} from '@playwright/test'

test('Assertions1',async({page}) =>{

await page.goto('https://www.testmuai.com/selenium-playground/checkbox-demo/');


const fcheck= await page.locator("//*[text()='Click on check box']");
await fcheck.check();
await fcheck.isChecked();
await expect ( page.locator("//*[text()='Checked!']")).toBeTruthy();
await page.locator("//*[text()='Disabled Checkbox Demo']/following::input").first().check();
await page.locator("//*[text()='Disabled Checkbox Demo']/following::input").nth(2).isEnabled();

//await page.locator("//button[text()= 'Check All']").click();
await page.locator("//*[text()= 'Option 1']").click();
 await expect ( page.locator("//*[text()= 'Option 1']")).toBeChecked();
 await expect ( page.locator("//*[text()= 'Option 1']")).toBeEnabled();
 await expect ( page.locator("//*[text()= 'Option 1']")).toBeVisible();

//await page.waitForTimeout(5000); 
await expect ( page.locator("//*[text()=' Option 3']")).toBeDisabled();


})

test('Assertions2',async({page}) =>{

await page.goto('https://www.testmuai.com/selenium-playground/input-form-demo/');
await page.locator("//*[@id = 'name']").fill('TestName');
await page.locator("//*[@id= 'inputEmail4']").fill('test@dispostable.com');
await page.locator("//*[@id='inputCity']/preceding::select").selectOption({value: 'AL'});

await expect  (page.locator("//*[text() = 'Automation Testing Cloud']")).toHaveText('Automation Testing Cloud');
await expect  (page.locator("//*[text() = 'Automation Testing Cloud']")).toContainText('Automation Testing Cloud');
await expect  (page.locator("//*[@id = 'name']")).toHaveAttribute('id');
await expect  (page.locator("//*[@id='inputCity']/preceding::select")).toHaveCount(1);
await expect  (page.locator("//*[@id = 'name']")).toHaveValue('TestName');
await expect  (page).toHaveTitle('Selenium Grid Online | Run Selenium Test On Cloud')
await expect  (page).toHaveURL("https://www.testmuai.com/selenium-playground/input-form-demo/");


})
