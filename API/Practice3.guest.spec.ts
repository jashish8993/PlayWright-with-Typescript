//this test will be to extract data from one API and pass the information for that in another
import {test,expect} from '@playwright/test'

test('API call way ', async ({request})=>{   
const req= await request.get("https://jsonplaceholder.typicode.com/posts");
//console.log(await req.json());
const test1 = await req.json();
const ids = await test1[2].id;
const userIds = await test1[2].userId;
const req1= await request.get("https://jsonplaceholder.typicode.com/posts",{
params :
{
userId : userIds,
id : ids,
}}
);
console.log(await req1.json());
});


