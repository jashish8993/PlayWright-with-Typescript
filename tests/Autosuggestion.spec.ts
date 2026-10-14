
import {test,expect} from '@playwright/test'

test('Autosuggestion',async({page}) =>{

    await page.goto("https://www.amazon.com/");
    await page.locator("//*[@id= 'twotabsearchtextbox']").fill('samsung');
    await page.waitForSelector("//*[@id='sac-autocomplete-results-container']");
    const allsuggestion = await page.locator('#sac-autocomplete-results-container .sac-suggestion-row');
    const counter=await allsuggestion.count();
    console.log(counter);
    await page.waitForTimeout(10000);

for (let i = 0; i < counter; i++) 
   {
    const text = await allsuggestion.nth(i).textContent();
    console.log(text);
    expect(text).toContain('playwright');
   } 
})