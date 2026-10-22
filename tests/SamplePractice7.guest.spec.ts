
import { test, expect } from '@playwright/test'
//test.use({ storageState: { cookies: [], origins: [] } });
test('Sample Practice 7', async ({ page }) => {

    await page.goto("https://www.testmuai.com/selenium-playground/bootstrap-dual-list-box-demo/");
    const loc1 = await page.locator("//*[@class='well text-right']//descendant::ul/li");
    const loc2 = await page.locator("//*[@class='well']//descendant::ul/li");
    await expect(loc1).toHaveCount(3);
    await expect(loc2).toHaveCount(3);
    console.log(loc1);
    

});