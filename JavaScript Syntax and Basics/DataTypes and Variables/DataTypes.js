//DataTypes

/*
Javascript provides different data types to hold different types of values.
Javascript have two types of data types
Primitive DataTypes
Non-Primitive DataTypes [ Reference DataTypes, Object DataTypes ]
Primitive DataTypes: Primitive data structures are simple and predefined types like integers and booleans, used for basic data storage.

String -		represents a sequence of characters using “”,’’,``.
Number- 	    represents numerical values eg:100
Bigint-		    JavaScript BigInt is a new data type (ES2020) that can be used to store integer values that are too big.
Boolean-	    represents boolean values either true or false.
Undefined-	    represents undefined values.
Null-		    represents undefined value i.e., no value at all.
Symbol-	        represents various symbols.

Non-Primitive DataTypes [ Reference DataTypes, Object DataTypes ]: 
Non-primitive structures like arrays and lists are more complex, designed for organizing collections of data and enabling advanced data manipulation.

The object data type can contain both built-in objects, and user defined objects:
Built-in object types can be:

Objects-	represents instance through which we can access members 
Arrays-		represents group of similar values
Dates-		
maps, 
sets, 
int8array, 
float arrays,
promises, and more.

Note: A JavaScript variable can hold any type of data.
Difference between Undefined and Null?

*/
//Number

let a = 24;
let b = 45;
let c = 34;
var d = a+b+c;

 console.log(d);
 console.log(typeof(a));

 //String

 let string1 = "Yugandhar";
 let string2 = 'Dharani';
 let string3 = `Cheshvika`;

 console.log(string1+" "+string2+" "+string3);

 //boolean

 let var1 = 2;
 let var2 = 3;

 console.log(var2 === var1);

 //Undefined
 let movie;
 console.log(movie);

 //Null
let moviefan = null;
console.log(moviefan);

//Bigint
let BigInt = 1123342313124342314342;
console.log(typeof(BigInt));
console.log(BigInt);

//Symbol

//JavaScript treats 16 and 4 as numbers, until it reaches "twenty".
 let number = 16 + 4 + "twenty";
 console.log(number);
//In this first operand is a string, all operands are treated as strings.
 let numberString = "twenty" + 16 + 4;
 console.log(numberString);
