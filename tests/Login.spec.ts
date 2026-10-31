import {expect,test} from '@playwright/test'

test('Login', async({page})=>{

await page.goto("https://www.saucedemo.com/inventory.html") ;   
await page.waitForTimeout(3000);  
await page.locator("//*[text()='Sauce Labs Bike Light']").click();

});


test('own Fixture2', async({page})=>{
await page.goto("https://www.saucedemo.com/inventory.html") ;  
await page.waitForTimeout(3000);  
await page.locator("//*[text()='Sauce Labs Bike Light']").click();
await expect.soft(page).toHaveURL("https://www.saucedemo.com/inventory-item.html?id=0");
await page.locator("//*[text()='Add to cart']").click();
await page.locator("//div[@id='shopping_cart_container']").click();
await expect.soft(page).toHaveURL("https://www.saucedemo.com/cart.html");
});