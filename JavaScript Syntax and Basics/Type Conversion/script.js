/*In JavaScript, type conversion refers to converting data from one type to another, either explicitly or implicitly. 

There are two main types of type conversion in JavaScript:
Implicit Conversion (Type Coercion): JavaScript automatically converts types when needed.
Explicit Conversion: You manually convert data types using built-in methods.


1. Implicit Type Conversion (Type Coercion)
JavaScript automatically converts types based on the context in which they are used.

String Coercion:
JavaScript will convert other types to strings if required by the operation

2. Explicit Type Conversion
You can explicitly convert values between types using various JavaScript functions or methods.

Type conversion is an essential concept in JavaScript, particularly with its loosely typed nature. 
It’s important to understand both implicit coercion and explicit conversion to avoid unintended behavior
*/

//String Coercion
//JavaScript will convert other types to strings if required by the operation.
//Here, the number 42 is implicitly converted to a string and concatenated with the other string.
console.log("The number is "+ 30);


//Number Coercion
//JavaScript can also coerce strings to numbers in numeric contexts.
//In these cases, the string '5' is implicitly converted to a number before the operation.
console.log('5' - 2);  // 3
console.log('5' * 2);  // 10
console.log('5' / 2);  // 2.5


//Boolean Coercion:
//Non-boolean values can be coerced into true or false in conditional statements.
//Values like 0, null, undefined, NaN, and "" (empty string) are falsy. Everything else is truthy.
console.log(Boolean(0));         // false
console.log(Boolean("Hello"));   // true
console.log(Boolean(null));      // false
