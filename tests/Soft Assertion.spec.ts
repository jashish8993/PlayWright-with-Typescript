import {test,expect} from '@playwright/test'

test('soft Assertions1',async({page}) =>{
await page.goto('https://www.testmuai.com/selenium-playground/checkbox-demo/');
const fcheck= await page.locator("//*[text()='Click on check box']");
await fcheck.check();
await fcheck.isChecked();
await expect.soft ( page.locator("//*[text()='Checked!']")).toBeTruthy();
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


