import { test, expect, request } from '@playwright/test';

test('Post Sample 1', async ({ request }) => {

    const req = await request.post("https://dummyjson.com/products/add",
        {
            headers: {
                Accept: 'application/json',
                "content-Type": "application/json",

            },
            data:
                { title: 'BMW Pencil', }
        }
    );
    console.log(await req.json());
console.log(await req.status());
const req1=await req.json() 
expect(req1.title).toEqual('BMW Pencil');

})