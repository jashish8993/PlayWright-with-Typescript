
import {test,expect} from '@playwright/test'
test('Sample Practice 2', async({page})=>{

    await page.goto("https://www.testmuai.com/selenium-playground/auto-healing/");

    await page.locator("//*[@id= 'username']").fill("New username");
    await page.locator("//*[@id= 'password']").fill('password');
    await page.locator("(//*[text()= 'Change DOM ID'])[last()]").click();
    await page.getByPlaceholder('username').clear();
  
});