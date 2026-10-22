
import { test, expect } from '@playwright/test'
//test.use({ storageState: { cookies: [], origins: [] } });
test('Sample Practice 6', async ({ page }) => {

    await page.goto("https://www.testmuai.com/selenium-playground/bootstrap-download-progress-demo/");
    const loc1 = page.locator("//*[@class='progress']")
    await expect(loc1).toContainText('0%');
    const loc2 = await page.locator("//*[text()='Start Download']");

    await loc2.click();
    await page.waitForTimeout(3000);
    await expect(loc1).not.toHaveText('0%');
    await expect(loc1).toContainText('100%');
    await expect(page.locator("//*[@class = 'success text-green-100 mb-10']")).toHaveText('Download completed!');


});