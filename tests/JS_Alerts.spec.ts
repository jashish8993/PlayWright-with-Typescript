import {test,expect} from '@playwright/test'


test('js alerts', async( {page})=>
{

await page.goto("https://www.testmuai.com/selenium-playground/javascript-alert-box-demo/");
await page.on('dialog',async dialog=>{console.log(dialog.message());
await dialog.accept();
});

await page.locator("(//button[text()='Click Me'])[1]").click();
await page.waitForTimeout(5000);



await page.locator("(//button[text()='Click Me'])[2]").click();
await page.waitForTimeout(5000);
 await expect (page.locator("//*[@id= 'confirm-demo']")).toHaveText('You pressed OK!') ;

//await expect (page.locator("//*[@id= 'confirm-demo']")).toHaveText('You pressed Cancel!') ;

})