import {test as base,expect,Page} from '@playwright/test'


type myfixture =
{
logpage : Page;

}

export const test = base.extend<myfixture>({

    logpage: async({page},use)=>{
        await page.goto('https://www.saucedemo.com/');
        await page.getByPlaceholder('Username').fill('standard_user');
        await page.getByPlaceholder('Password').fill('secret_sauce');
        await page.locator("//*[@id= 'login-button']").click();
        await use(page);
    }
})



/*
test('own Fixture', async({page})=>{

  

await page.locator("//*[text()='Sauce Labs Bike Light']").click();
await page.waitForTimeout(5000);

});
*/