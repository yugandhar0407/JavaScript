//Map(), Reduce(), Filter(),forEach(), some(), and every()
/*
for loop	Full control over index and iteration
for...of	Simple, clean iteration over array values
forEach()	Executes a function for each element (no return)
map()	    Transforms array, creates new array
for...in	Iterates over indexes (not recommended for arrays)
while loop	Conditional iteration, more control over execution
do...while	Guaranteed to run at least once
reduce()	Reduces the array to a single value (e.g., sum)
filter()	Filters out elements based on a condition. 
*/

//Map: The Map() method creates a new array and performs a function on each array element.
let num1 = [2,4,6,8,10];

let num2 = num1.map(multiply);

function multiply(value){
         return value * 2;
}
console.log(num2);

//Filter: The filter() method takes each element in an array and it applies a conditional statement against it.

let num3 = [1,2,3,4,5,6,7,8,9];

let num4 = num3.filter(comp);

function comp(value){
        return value > 5;
}
console.log(num4);

// Reduce: The reduce() method reduces an array of values down to just one value using a function.
let num5 = [3,5,7,9,11,13,15,17];
let num6 = num5.reduce(multiply)

function multiply(total, value){
        return total*value;
}
console.log(num6);

// forEach(): 

/* forEach() Method
The forEach() method is another modern way to loop over arrays. It executes a provided function once for each array element. 
It is often preferred for readability and concise code.


array.forEach(function(value, index, array) {
     Do something with value, index, or array
});
*/
const fruits = ["apple", "banana", "cherry"];

fruits.forEach(function(fruit, index) {
    console.log(index + ": " + fruit);
});


//You can use an arrow function to make it even more concise:

fruits.forEach((fruit, index) => console.log(`${index}: ${fruit}`)); 

