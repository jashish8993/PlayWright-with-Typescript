import {test,expect} from '@playwright/test'

test('Dropdown and form filling',async({page}) =>{
//await page.locator('#draggable').dragTo(page.locator('#droppable'));
await page.goto('https://www.globalsqa.com/demo-site/draganddrop/');

const demoFrame = page.frameLocator("(//iframe[@class='demo-frame'])[1]");

  const sourceElement = demoFrame.locator("//*[text()='High Tatras']");
  const targetElement = demoFrame.locator("//*[@id='trash']");
  await sourceElement.hover();

await page.mouse.down();

await targetElement.hover();
await page.mouse.up();
//await page.waitForTimeout(10000);
})