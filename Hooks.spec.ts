
import {test,expect} from '@playwright/test'

test('Hooks mthod 1',async({}) =>{
console.log("This is the only section");
});

test.beforeAll('Hooks Method 2',async({}) =>{
console.log("This is the before all section");
});


test.afterEach('Hooks Method 3',async({}) =>{
console.log("This is the after each section");
});


test.beforeEach('Hooks Method 4',async({}) =>{
console.log("This is the before each section");
});


test('Hooks Method 5',async({}) =>{
console.log("This is the test section");
});




test.describe('descrbing test',()=>{

test('test method 1 in describe',async({}) =>{
console.log("This is describe method 1");
});


test('Test method 2 in describe',async({}) =>{
console.log("This is describe method 2");
});
});
