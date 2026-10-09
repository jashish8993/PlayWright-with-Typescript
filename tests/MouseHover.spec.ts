
import {test,expect} from '@playwright/test'

test.skip('My First test', async ({page})=>{

    await page.goto('https://www.spicejet.com/');
    await page.getByText('Add-ons').first().hover();
await page.getByText('Extra Seat').first().click();
 await page.waitForTimeout(10000);
     
});

test.skip('My second test', async ({page})=>{

    await page.goto('https://practicetestautomation.com/practice/');
    await page.getByText('Test Login Page').click({button: 'right'});
//this is for right click

     });

    

test('My third test', async ({page})=>{

    await page.goto('https://www.demo.guru99.com/test/simple_context_menu.html');
    await page.getByRole('button',{name: 'Double-Click Me To See Alert'}).dblclick();
//this is for dbl click
await page.waitForTimeout(10000);
     });