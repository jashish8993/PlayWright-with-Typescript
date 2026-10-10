
import {test,expect,BrowserContext,Browser, Page} from '@playwright/test'
import { webkit,chromium } from 'playwright';

test('My First test', async ({})=>{
const browser : Browser= await chromium.launch({headless:true, channel:'chrome'});
//1st browser context
const Brcontext1: BrowserContext= await browser.newContext();
const page1: Page=await Brcontext1.newPage();


    await page1.goto('https://practicetestautomation.com/practice-test-login/');
    console.log(await page1.title());
    await expect(page1).toHaveTitle('Test Login | Practice Test Automation');
    await page1.locator("//*[@id= 'username']").fill('student');
    await page1.locator("//*[@id= 'password']").fill('Password123');
    await page1.locator("//*[@id= 'submit']").click();
    await expect(page1).toHaveTitle('Logged In Successfully | Practice Test Automation');
    await expect(page1.locator("//*[text()= 'Congratulations student. You successfully logged in!']"))
                         .toHaveText('Congratulations student. You successfully logged in!');
    await page1.locator("//*[text() = 'Log out']").click();

//2nd browser context
const Brcontext2: BrowserContext= await browser.newContext();
const page2: Page=await Brcontext1.newPage();


    await page2.goto('https://practicetestautomation.com/practice-test-login/');
    console.log(await page2.title());
    await expect(page2).toHaveTitle('Test Login | Practice Test Automation');
    await page2.locator("//*[@id= 'username']").fill('student');
    await page2.locator("//*[@id= 'password']").fill('Password123');
    await page2.locator("//*[@id= 'submit']").click();
    await expect(page2).toHaveTitle('Logged In Successfully | Practice Test Automation');
    await expect(page2.locator("//*[text()= 'Congratulations student. You successfully logged in!']"))
                         .toHaveText('Congratulations student. You successfully logged in!');
    await page2.locator("//*[text() = 'Log out']").click();

    //await new Promise(() => {}); 
    //creates an infinite pause in your script because the promise never resolves or rejects.

     
});
