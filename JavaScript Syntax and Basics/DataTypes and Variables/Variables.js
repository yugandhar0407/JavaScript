//Variables

/* 
Variables are like containers for storing the values or data. It is the name of the storage location.
Javascript is a dynamic type language, meaning you don’t need to specify any type of variable, because it is dynamically used by js.
We can create a variables using
Automatically
Var
Let
Const

Automatically → declared without any variables like var, let, const.
Ex: x = 10;
    y = 20;

Var → The var keyword was used in all JavaScript code from 1995 to 2015.
The let and const keywords were added to JavaScript in 2015.
The var keyword should only be used in code written for older browsers.
We can redeclare and reassign values with  var variable.
Variables declared with the var always have Global Scope.
Variables declared with the var keyword can NOT have block scope
Ex: var a = 20;
    var b = 30;
Let → The let keyword was introduced in ES6 (2015)
Variables declared with let have Block Scope
Variables declared with let must be Declared before use
Variables declared with let cannot be Redeclare in the same scope
Ex: let a = 30;
      let b = 40;

Const →The const keyword was introduced in ES6 (2015)
   Variables defined with const cannot be Redeclare
   Variables defined with const cannot be Reassigned
  	   Variables defined with const have Block Scope
       
When to use JavaScript const?
Always declare a variable with const when you know that the value should not be changed.
Use const when you declare:
A new Array
A new Object
A new Function
A new RegExp


Difference between var let and const

Var is a function scope
Let is a block scope
Const is a block scope

Var can be reassigned
Let can be reassigned
Const can’t be reassigned

Var can be redeclare with in the same scope
Let can’t be redeclare within the same block scope
Const Cannot be redeclare within the same block scope

Var hoisted to the function or global scope
Let hoisted to the block scope
Const hoisted to the block scope

Var initialized with undefined
Not initialized
Not initialized
*/

//declare values without variables

x = 10;
y = 20;
z = 15;
console.log(x+y+z);

//declare values with var variable
var a = 12;
var b = 14;
console.log(a+b);
var a = 14;
console.log(a+b);


//declare the variables using var 
var a = 20;
var b = 30;
b = 60;
var a = 40;
console.log(a);
console.log(a+b+a);

//declare the variables using let
let num = 23;
let num1 = 40;
num1 = 60;        // let can be reassigned
//let num = 60;  // error because let can't redeclare block scope variable
console.log(num);
console.log(num1);

//declare the variables with const
const number = 100;
//number = 30; // error because const can't reassign
//const number = 120; error because const can't redeclare
console.log(number);
