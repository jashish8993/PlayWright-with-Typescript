
import {test,expect} from '@playwright/test';
import path from 'path';

test('iframe', async({page})=>
{
await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');

await page.locator("//*[@id='filesToUpload']")
.setInputFiles([path.join("C:/Users/ashish.jain03/Downloads/Free_Test_Data_100KB_DOCX.docx"),
path.join("C:/Users/ashish.jain03/Downloads/Free_Test_Data_100KB_DOC.doc")]);


await page.locator("//*[@id='filesToUpload']").setInputFiles([]);

await page.waitForTimeout(5000);
await page.locator("//*[@id='filesToUpload']")
.setInputFiles([path.join("C:/Users/ashish.jain03/Downloads/Free_Test_Data_100KB_DOCX.docx"),
path.join("C:/Users/ashish.jain03/Downloads/Free_Test_Data_100KB_DOC.doc")]);

await page.waitForTimeout(10000);





});