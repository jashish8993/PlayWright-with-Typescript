import {test} from './OwnFixture'

import {expect} from '@playwright/test'

test('own Fixture', async({logpage})=>{
await logpage.locator("//*[text()='Sauce Labs Bike Light']").click();

});


test('own Fixture2', async({logpage})=>{
await logpage.locator("//*[text()='Sauce Labs Bike Light']").click();
await logpage.waitForTimeout(3000);
await logpage.locator("//*[text()='Add to cart']").click();
await logpage.locator("//div[@id='shopping_cart_container']").click();
await expect.soft(logpage).toHaveURL("https://www.saucedemo.com/cart.html");
});