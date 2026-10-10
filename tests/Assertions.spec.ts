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
await expect (page.locator("//*[@id = 'name']")).toBeEmpty();
const ll= await page.locator("//*[@id = 'name']");
await expect(ll).toBeInViewport();
await page.locator("//*[@id = 'name']").fill('TestName');
await expect (page.locator("//*[@id = 'name']")).toBeFocused();
await page.locator("//*[@id = 'name']").blur();
await expect (page.locator("//*[@id = 'name']")).toBeAttached();
await expect (page.locator("//*[@id = 'name']")).toBeEditable();
await page.locator("//*[@id= 'inputEmail4']").fill('test@dispostable.com');
await page.locator("//*[@id='inputCity']/preceding::select").selectOption({value: 'AL'});
await expect  (page.locator("//*[text() = 'Automation Testing Cloud']")).toHaveText('Automation Testing Cloud');
await expect  (page.locator("//*[text() = 'Automation Testing Cloud']")).toContainText('Automation Testing Cloud');
await expect  (page.locator("//*[@id = 'name']")).toHaveAttribute('id');
await expect  (page.locator("//*[@id='inputCity']/preceding::select")).toHaveCount(1);
await expect  (page.locator("//*[@id = 'name']")).toHaveValue('TestName');
await expect  (page).toHaveTitle('Selenium Grid Online | Run Selenium Test On Cloud')
await expect  (page).toHaveURL("https://www.testmuai.com/selenium-playground/input-form-demo/");
await expect(page.locator("//*[@id= 'company']")).toHaveClass("w-full border border-gray-90 text-size-14 rounded mt-10 px-10 py-5");
await expect(page.locator("//*[@id= 'company']")).toHaveCSS('font-size','14px');
await expect(page.locator("//*[@id= 'company']")).toHaveId('company');
await expect(page.locator("//*[@id= 'company']")).toHaveJSProperty('required',true);
await expect(page.locator("(//*[@id= 'embeddedMessagingSiteContextFrame']//preceding-sibling::iframe)[1]")).toBeHidden();
})
