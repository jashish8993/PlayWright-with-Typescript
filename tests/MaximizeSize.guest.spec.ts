import {test,expect} from '@playwright/test'

test('Enlarge Size', async ({page})=>{

await page.goto('https://www.google.com');
const width = page.viewportSize()?.width;
const height = page. viewportSize()?.height;

await page.waitForTimeout(3000);
console.log(`The width is ${width} and height is ${height}`);

await page.setViewportSize({
width : 720,
height :1280,
});
await page.waitForTimeout(3000);

})