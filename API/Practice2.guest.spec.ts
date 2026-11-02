//this teat case is for practices types of ways to add header
import {test,expect,request} from '@playwright/test';

let reqcontext :any
test.beforeAll('A general employee', async() =>{
reqcontext = await request.newContext(
    {
        baseURL: "https://reqres.in/api/",
        extraHTTPHeaders : {Accept : 'application/json'}
        //third way to pass headers
})
})

test('API call way 1', async ({request})=>{
const req= await request.get("https://reqres.in/api/users",{
    headers: { Accept : 'application/json', //first way to pass headers
}

});
console.log(await req.json());
});

test('API call way 2', async ()=>{
const test = await request.newContext(
    {
        extraHTTPHeaders : {Accept : 'application/json'}
        //second way to pass headers
    }
);
const req= await test.get("https://reqres.in/api/users");
console.log(await req.json());
});


test('API call way 3', async ()=>{
//const test = await request.newContext();
const req= await reqcontext.get("users");
console.log(await req.json());
});

//these are the three way to define headers and the fourth one is defining inside the playwright.config.ts below baseurl sections with syntax
//extrahttpheader block same as above