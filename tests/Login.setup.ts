import {test as setup,expect} from '@playwright/test'

setup('authenticate', async({page})=>{


   
        await page.goto('https://www.saucedemo.com/');
        await page.getByPlaceholder('Username').fill('standard_user');
        await page.getByPlaceholder('Password').fill('secret_sauce');
        await page.locator("//*[@id= 'login-button']").click();
        await page.context().storageState({path : 'auth.json'});

});



