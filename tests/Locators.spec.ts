import {test,expect} from '@playwright/test'

test('Locators', async({page})=>{

    await page.goto("https://www.testmuai.com/selenium-playground/input-form-demo/");
    await page.getByRole('button', {name: 'Submit'}).click();
    await page.locator("//*[@id= 'name' ]").fill('Testing');
    //.filter({has : page.locator("//*[@placeholder= 'Name']")})
    await  expect(page.getByText('Input form validations')).toBeVisible();
    await expect(page.getByTitle('TestMu AI Logo')).toBeVisible();
    await page.getByPlaceholder('Password').fill('testing@dispostable.com');
    await expect(page.getByAltText('TestMu AI Logo')).toBeTruthy();
    await page.getByPlaceholder('Email').and(page.locator("//*[@id='inputEmail4']")).fill('testing@dispostable.com');
    //await page.waitForTimeout(6000);
 //await page.pause();

});