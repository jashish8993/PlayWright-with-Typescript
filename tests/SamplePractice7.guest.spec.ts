
import { test, expect } from '@playwright/test'
//test.use({ storageState: { cookies: [], origins: [] } });
test('Sample Practice 7', async ({ page }) => {

    await page.goto("https://www.testmuai.com/selenium-playground/bootstrap-dual-list-box-demo/");
    const loc1 = await page.locator("//*[@class='well text-right']//descendant::ul/li");
    const loc2 = await page.locator("//*[@class='well']//descendant::ul/li");
    await expect(loc1).toHaveCount(3);
    await expect(loc2).toHaveCount(3);
    const allValues: string[] = await loc1.allInnerTexts();
    console.log(allValues);
    const allValues1: string[] = await loc2.allInnerTexts();
    console.log(allValues1);
    await page.waitForTimeout(5000);
    const loc3 = await page.locator("//li[text()='Danville']");
    await loc3.click();
    await page.locator("//*[@class='block mx-auto border border-black mt-10 px-10 py-2 rounded text-black btn btn-default btn-sm move-right']").click();
    await expect(loc1).toHaveCount(2);
    await expect(loc2).toHaveCount(4);
    await page.locator("(//*[text()= 'All'])[last()]").click();
    await page.locator("//*[@class='btn btn-default btn-sm move-left transform rotate-180 border border-black block mx-auto border border-black mt-10 px-10 py-2 rounded text-black']").click();



});