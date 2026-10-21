//this test is for id changing when we click on button 
import {test,expect} from '@playwright/test'
test('Sample Practice 3', async({page})=>{

    await page.goto("https://www.testmuai.com/selenium-playground/bootstrap-alert-messages-demo/");
    await page.locator("//*[text()= 'Autoclosable Success Message']").click();
    const loc1= page.locator("//*[text() = 'Autocloseable success message. Hide in 5 seconds.']");
    await expect(loc1).toBeTruthy();
    await  page.locator("//*[text() = 'Normal Success Message']").click();
    await expect(page.locator("//*[text()= 'Normal success message. To close use the close button.']"))
    await page.locator("//*[text() = 'Autoclosable Info Message']").click();
    const loc5 = page.locator("//*[text() = 'Autocloseable warning message. I will hide in 5 seconds.  ']");
    await expect(loc5).toBeTruthy();
     await page.locator("//*[text() = 'Normal Info Message']").click();
    const loc6 = page.locator("//[text() = 'Normal info message.To close use the close button.']");
    await expect(loc6).toBeTruthy();
    //await page.pause();
    await page.locator("(//*[@class= 'close absolute text-size-26 top-0 right-0 w-50'])[1]").click();
    await page.locator("(//*[@class= 'close absolute text-size-26 top-0 right-0 w-50'])[1]").click();
await page.pause();
    

});