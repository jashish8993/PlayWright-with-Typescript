//this teat case is for practices types of ways to add base url and GET request
import {test,expect,request} from '@playwright/test';

let reqcontext :any
test.beforeAll('A general employee', async() =>{
reqcontext = await request.newContext(
    {
        baseURL: "https://reqres.in/api/"
    }
)
})

test('API call way 1', async ({request})=>{
const req= await request.get("https://reqres.in/api/users");
console.log(await req.json());
});

test('API call way 2', async ()=>{
const test = await request.newContext();
const req= await test.get("https://reqres.in/api/users");
console.log(await req.json());
});


test('API call way 3', async ()=>{
//const test = await request.newContext();
const req= await reqcontext.get("users");
console.log(await req.json());
});

//these are the three way to define urls and the fourth one is defining inside the playwright.config.ts in baseurl sections