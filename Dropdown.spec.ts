
import {test,expect} from '@playwright/test'

test('Dropdown and form filling',async({page}) =>{

await page.goto('https://www.testmuai.com/selenium-playground/input-form-demo/');
await page.locator("//*[@id = 'name']").fill('TestName');
await page.locator("//*[@id= 'inputEmail4']").fill('test@dispostable.com');
await page.locator("//*[@id='inputCity']/preceding::select").selectOption({value: 'AL'});

})