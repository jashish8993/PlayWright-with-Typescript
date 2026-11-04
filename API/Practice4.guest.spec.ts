//this test case is for practice some assertions
import {test,expect,request} from '@playwright/test';

test('API call way 3', async ({request})=>{
const req= await request.get("https://jsonplaceholder.typicode.com/posts",{
params :
{
userId : 1,
id : 10,
}}
);
console.log(await req.json());
expect(await req.status()).toBe(200);
expect(await req.ok()).toBeTruthy()
 expect(await req.json()).toMatchObject(  
[{
    userId: 1,
    id: 10,
    title: 'optio molestias id quia eum',
    body: 'quo et expedita modi cum officia vel magni\n' +
      'doloribus qui repudiandae\n' +
      'vero nisi sit\n' +
      'quos veniam quod sed accusamus veritatis error'
  }]
)
const re = await req.json();
const id = await re.id;
console.log(id);
expect(await re.id).toEqual(10);


});

