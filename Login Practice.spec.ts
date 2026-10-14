
import {test,expect} from '@playwright/test'

test('My First test', async ({page})=>{

    await page.goto('https://practicetestautomation.com/practice-test-login/');
    console.log(await page.title());
    await expect(page).toHaveTitle('Test Login | Practice Test Automation');
    await page.locator("//*[@id= 'username']").fill('student');
    await page.locator("//*[@id= 'password']").fill('Password123');
     await page.locator("//*[@id= 'submit']").click();
    await expect(page).toHaveTitle('Logged In Successfully | Practice Test Automation');

    await expect(page.locator("//*[text()= 'Congratulations student. You successfully logged in!']"))
                         .toHaveText('Congratulations student. You successfully logged in!');
    await page.locator("//*[text() = 'Log out']").click();

     
});