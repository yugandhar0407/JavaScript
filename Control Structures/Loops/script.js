//for loop

for(let i = 0; i <= 15; i++){
    console.log(i);
}

for(let i = 0; i <= 50; i++){
    if(i % 2 == 1){                      // odd numbers 
        console.log(i); 
    }
}

console.log("*******");

for(var i = 0; i <= 10; i++){
    console.log(i);
}
console.log("*******");
const array = ["Yugandhar", "Ashok", "Prasad", "Sidhu", "Manoj"];

for(let i = 0; i < array.length; i++){
    console.log(array[i]);
}

console.log("***********")

for(let i = 0; i <= 20; i += 2){

    console.log(i);

}
console.log("*******");
for(let i = 0; i <= 3; i++){
    for(let j = 0; j <= 3; j++){
        console.log(`i = ${i} and j = ${j}`);
    }
}
console.log("*******");
for(let i = 0; i <= 10; i++){
    if(i == 5){
        break;
    }
    console.log(i);
}
console.log("*******");
for(let i = 0; i <= 15; i++){

    if(i == 7){
       continue;
}
console.log(i);
} 

//while loop

 let i = 0;

 while( i <= 10){
     console.log(i);
    i++;
}

let num = 0;

while(num < 10){
    console.log(num);
    if(num === 5){
        break;
    }
    num++;
}

let number = 0;

while(number < 15){
    number++;
    if(number === 5){
        continue;
    }
    console.log(number);
}

const fruits = ["Banana", "Apple", "Orange", "Papaya"];

let x = 0;

while( x < fruits.length ){
    console.log(fruits[x]);
    x++;
}

let m = 0;

while(true){
    console.log(m);
    m++;
    if(m === 5){
        break;
    }
}

let p = 0;
let q = 10;

while(p < 5 && q > 5){
    console.log(`p = ${p}, q = ${q}`);
    p++;
    q--;
}

// do while loop

let i = 0;

do{
    console.log(i);
    i++;
}while(i <= 10);

console.log("**************");
// do while run once

let z = 10;

do{
    console.log(z);
    z++;
}while(z > 15);

//do while with break

console.log("***************")

let num1 = 0;

do{
    console.log(num1);
    num1++;
    if(num1 === 5){
        break;
    }
}while(num1 < 10);

console.log("*****************")

//do while with continue
 let aaa = 0;

 do{
    aaa++;   
    if(aaa === 6){
        continue;
    }
    console.log(aaa)
 }while(aaa < 15)

// do while loop with multiple conditions

let h = 1;
let k = 20;

do{
    console.log(`h = ${h}, k = ${k}`)
    h++; k--;

}while(h < 5 && k > 5)

//for of loop
/*for...of Loop
Introduced in ES6, the for...of loop is a modern and readable way to loop over arrays. It iterates over the values of the array.

Syntax:
for (const value of array) {
    // Use value directly
}
The for...of loop is clean and perfect for simple iterations when you only need access to the values.*/
const fruits1 = ["apple", "banana", "cherry"];

for (const fruit of fruits1) {
    console.log(fruit);  // "apple", "banana", "cherry"
}

//for in loop
/*
for...in Loop
The for...in loop is used to iterate over the indexes of an array (or properties of an object). 
It's not ideal for arrays, as it also iterates over properties inherited from the array’s prototype, 
but it can be used if necessary.

for (const index in array) {
    Access elements by array[index]
}
*/
const fruits2 = ["apple", "banana", "cherry"];

for (const index in fruits2) {
    console.log(index + ": " + fruits[index]);
}
