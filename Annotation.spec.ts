import {test,expect} from '@playwright/test'

test.only('focus on this test',async ({})=> {
console.log('focusing');
});

test('tagging ',async ({})=> {
    tag : '@slow'
    tag: '@fast' 

console.log('tagging');
});


