
import {test,expect} from '@playwright/test';
import path from 'path';

test('Mutilple File Upload', async({page})=>
{
await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');

await page.locator("//*[@id='filesToUpload']")
.setInputFiles([path.join("./Free_Test_Data_100KB_DOCX.docx"),
path.join("./Free_Test_Data_100KB_DOC.doc")]);
await page.locator("//*[@id='filesToUpload']").setInputFiles([]);
await page.locator("//*[@id='filesToUpload']")
.setInputFiles([path.join("./Free_Test_Data_100KB_DOCX.docx"),
path.join("./Free_Test_Data_100KB_DOC.doc")]);

await page.waitForTimeout(10000);





});