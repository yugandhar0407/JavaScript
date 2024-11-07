//Hoisting
/* 
Hoisting is JavaScript's default behavior of moving declarations to the top.
JavaScript Declarations are Hoisted
In JavaScript, a variable can be declared after it has been used.
In other words; a variable can be used before it has been declared.
Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function).
*/

//Example 1
x = 7;

console.log(x);

var x;

//Example 2

var y;
y = 7;

console.log(y);

//Here the example 1 and example 2 gives same output because hoisting moves all the declarations to the top of the current scope

//But

//Example 3

var a = 10;
var b = 5;

console.log(a+","+b);

//Example 4

var c = 10;

console.log(c+","+d);

var d = 5;

//Here the example 3 ND 4 are not gives same output because here the hoisting does not move initializations to the top, only declarations are moved to top.