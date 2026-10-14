import {test,expect} from '@playwright/test'

test('Sample Practice 1', async({page})=>{

    await page.goto("https://www.testmuai.com/selenium-playground/ajax-form-submit-demo/");

    await page.locator("//*[@id= 'title']").fill("This is the title");
    await page.locator("//*[@id= 'description']").fill('this is the description box');
    //await page.getByRole('button', { name: 'btn-submit' }).click();
    await console.log(await page.locator('#btn-submit').count());
    await expect(page.locator('#btn-submit')).toBeVisible();
await page.locator('#btn-submit').click();
  page.on('request', request => {
 console.log('REQUEST:', request.url());
});
 
//await page.locator('#btn-submit').click();
await expect(page.locator("//*[@id='submit-control']")).toHaveText('Form submitted Successfully!');  
});





