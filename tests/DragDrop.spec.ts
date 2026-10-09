import {test,expect} from '@playwright/test'

test('Dropdown and form filling',async({page}) =>{

await page.goto('https://jqueryui.com/droppable/');
//await page.locator('#draggable').dragTo(page.locator('#droppable'));
await page.locator("//p[text() = 'Drag me to my target']").hover();
await page.mouse.down();

await page.locator("//p[text() = '#droppable']").hover();
await page.mouse.up();
await page.waitForTimeout(10000);
})