import {test,expect} from '@playwright/test'

test('Checkbox',async({page}) =>{

await page.goto('https://www.testmuai.com/selenium-playground/checkbox-demo/');


const fcheck= await page.locator("//*[text()='Click on check box']");
await fcheck.check();
console.log(await fcheck.isChecked);
console.log(await expect ( page.locator("//*[text()='Checked!']")).toBeTruthy);
await fcheck.uncheck();
await fcheck.check();
await page.locator("//*[text()='Disabled Checkbox Demo']/following::input").first().check();

const flags = await page.locator("//*[text()='Disabled Checkbox Demo']/following::input").nth(3).isEnabled();
console.log(flags);

//await page.locator("//button[text()= 'Check All']").click();
await page.locator("//*[text()= 'Option 1']").click();
 await expect ( page.locator("//*[text()= 'Option 1']")).toBeChecked();
 await expect ( page.locator("//*[text()= 'Option 1']")).toBeEnabled();
 await expect ( page.locator("//*[text()= 'Option 1']")).toBeVisible();
 //page.pause();
//await expect (page.locator("//*[text()= 'Option 1']")).not.toBeChecked();
await page.waitForTimeout(5000); 
await expect ( page.locator("//*[text()=' Option 3']")).toBeDisabled();


})