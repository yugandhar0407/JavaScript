//Explicit Conversion

//String Conversion
//You can convert other data types into strings using String(), toString(), or concatenation.
var num = 123;
var str = String(num);  // "123"
console.log(str);
var bool = true;
var strBool = bool.toString();  // "true"
console.log(strBool);
//Another way is by adding an empty string to a value, forcing it to convert into a string:
var result = 100 + "";  // "100"
console.log(result);


//Number Conversion
/*To convert strings or other types into numbers, you can use Number(), parseInt(), or parseFloat().
parseInt() extracts the integer from a string, ignoring any non-numeric characters.
parseFloat() parses the entire string into a floating-point number.*/
var str = "123";
var num = Number(str);  // 123
console.log(num);

var strFloat = "12.34";
var floatNum = parseFloat(strFloat);  // 12.34
console.log(floatNum);

var strInt = "42px";
var intNum = parseInt(strInt);  // 42
console.log(intNum);

//Boolean Conversion
//To explicitly convert a value to a boolean, use the Boolean() function.
//Values like 0, null, undefined, NaN, and "" (empty string) are falsy. Everything else is truthy.
var isTrue = Boolean(1);      // true
var isFalse = Boolean(0);     // false
var isAlsoTrue = Boolean("Hello");  // true

console.log(isTrue);
console.log(isFalse);
console.log(isAlsoTrue);

//common use cases of type conversion
//Using + Operator for String Concatenation
//The + operator concatenates strings. If one operand is a string, the other will be coerced to a string:
console.log("I am " + 25 + " years old.");  // "I am 25 years old."
//Converting Strings to Numbers with Unary +
//You can quickly convert a string to a number by placing a + before it.
var num = +"42";  // 42 (number)
console.log(num);
//Checking for "NaN" (Not-a-Number)
//NaN is a special value that indicates an invalid number. Use isNaN() to check if a value is NaN.
console.log(isNaN("Hello"));  // true (not a valid number)
console.log(isNaN(123));      // false
// Implicit Conversion conditionals
if (0) {
    console.log("Won't run, because 0 is falsy.");
}

if ("non-empty") {
    console.log("Will run, because non-empty strings are truthy.");
}
//Explicit Number Conversion:

var str = "50";
var num = Number(str);
console.log(num + 10);  // 60

//Combining Strings and Numbers:

var age = 25;
var message = "I am " + age + " years old.";
console.log(message);  // "I am 25 years old."