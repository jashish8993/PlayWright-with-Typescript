//this test is for id changing when we click on button 
import {test,expect} from '@playwright/test'
test('Sample Practice 4', async({page})=>{

    await page.goto("http://testmuai.com/selenium-playground/bootstrap-date-picker-demo/");
    const loc1 = page.locator("//*[@id = 'sandbox-container1']//descendant::input");
    const loc2 = page.getByPlaceholder('Start date');
   const loc3= page.getByPlaceholder('End date');
   //await loc1.fill('10/10/2026');
    await loc2.fill('5/10/2026');
await loc3.fill('14/10/2026');
});