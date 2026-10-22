//This is for handling html alerts though commented is for js alerts 
import { test, expect } from '@playwright/test'
test.use({ storageState: { cookies: [], origins: [] } });
/*
test('Sample Practice 5', async ({ page }) => {

    await page.goto("https://www.testmuai.com/selenium-playground/bootstrap-modal-demo/");
    await page.on('dialog', async dialog => {
       await console.log(dialog.message());
        await console.log(`The first message : ${dialog.message()}`);
        await dialog.accept();
    });
    page.locator("//*[text()='Launch Modal']").first().click();
    await page.waitForTimeout(5000);
    await page.on('dialog', async fdialog => {
        await console.log(fdialog.message());
        await page.on('dialog', async sdialog => {
        await console.log(sdialog.message());
        await sdialog.accept();
    });
 await fdialog.accept();
    });
    page.locator("//*[text()='Launch Modal']").nth(1).click();
    await page.waitForTimeout(5000);
});
*/
test('Sample Practice 5a', async ({ page }) => {
    await page.goto("https://www.testmuai.com/selenium-playground/bootstrap-modal-demo/");
    await page.waitForTimeout(5000);
    await page.locator("//*[text()='Launch Modal']").first().click();
    await page.waitForTimeout(5000);
    const modalContent = await page.locator("//*[@class='modal-dialog']").first();

    const messageText = await modalContent.textContent();

    console.log('Modal Message1:', messageText);


    await page.locator("//*[text()='Launch Modal']").nth(1).click();
    await page.waitForTimeout(5000);
    const modalContent1 = await page.locator("//*[@class='modal-dialog']").first();

    const messageText1 = await modalContent1.textContent();

    // 3. Print the text to your console
    console.log('Modal Message2:', messageText1);


});
