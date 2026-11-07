import { test, expect, request } from '@playwright/test';

test('Post Sample 1', async ({ request }) => {

    const req = await request.put("https://dummyjson.com/products/1",
        {
            headers: {
                Accept: 'application/json',
                "content-Type": "application/json",

            },
            data:
                {  title: 'iPhone Galaxy +1' }
        }
    );
    console.log(await req.json());
console.log(await req.status());
const req1=await req.json() 
expect(req1.title).toEqual('iPhone Galaxy +1');

})