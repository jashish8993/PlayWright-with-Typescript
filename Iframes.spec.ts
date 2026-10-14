
import {test,expect} from '@playwright/test'

test('iframe', async({page})=>
{
await page.goto('https://jqueryui.com/autocomplete/');
const aframe= await page.frameLocator('.demo-frame');
await aframe.locator("//*[@id='tags']").fill("Demo test");
await page.waitForTimeout(1000);
});