//function basic syntax

//function to add two integers

function add(a,b){
    return a + b;
}
console.log(add(20,40));

//function with default parameters

function greet(name = "Guest"){
    return `Hello ${name}`;
}
console.log(greet());
console.log(greet("Yugandhar! Welcome to JavaScript"));

//Anonymous function [function expression]

const multiply = function (a, b){

    return a*b;
}
console.log(multiply(2,5));

//Arrow function
const divide  = (a , b) => a / b;
console.log(divide(10,5));


const addition = (a,b,c) => a+b+c;
console.log(addition(3,4,5));

const mul = (a,b) => a*b;
console.log(mul(5,4));

const subtract = (a,b) => {
    const result  = a - b;
    return result;
}
console.log(subtract(10, 5));

// function with rest parameters

function number (...numbers){
   return  numbers.reduce((acc, num) => acc + num, 0);
}
console.log(number(1,2,3,4));

// IIFE
// Immediately invoked function expression

(function(){
    console.log("I am a IIFE");
})();

//Recursive Function

function fact(n){
    if(n===1 || n===0){
        return 1;
    }
    return n * fact(n-1);
}
console.log(fact(5));

//function as an arguments

function wish(name){
    return `Hello ${name}`;
}
function callName(fn, name){
    console.log(fn(name));
}
callName(wish, "Yugandhar");

// Returning a Function

function multiply1(multiplier){
    return function (num){
        return num * multiplier;
    };
}

const double = multiply1(15);
console.log(double(3));

// function with object destructing parameters

function details({name , age}){
    console.log(`Name: ${name}, Age: ${age}`);
}
const user = {name:"Yugandhar", age: 25};
details(user);