/*
Data Structures
        - Data Structures allows us to store and organize data efficiently.
        - This will allow us to easily access and perform operations on the data.

        In JS, we have built-in Data Structures like
                - Arrays
                - Objects
                - Maps
                - Sets
        Arrays 
            -Array holds an ordered sequence of items
        
*/
//Creating an array

let myArray = [5, "India", 0.5];

console.log(myArray);

//Accessing an array with index

console.log(myArray[1]);
console.log(myArray[0]);

//Modifying an array item

myArray[0] = "Five";
console.log(myArray);

//Finding Array Length

//Array.length is used to find the number of items in the array


let fruits = ["Mongo", "Banana", "Apple", "Grapes", "Orange"];

let lengthOfArray = fruits.length;
console.log(lengthOfArray);

fruits.push("Papaya");  //push() method add the new items at the end of the array.

let lastItem = fruits.pop(); //pop() method removes the last element in an array
console.log(lastItem);

let order = fruits.sort(); //sort() method used to sort an items in Ascending order
console.log(order);

let reverse = fruits.reverse(); //reverse() method is used to reverse the items in an array.
console.log(reverse);

let string = fruits.toString(); //toString() method is used to convert an array into String
console.log(string);

let cars =["BMW","Suzuki","BenZ","Lamborghini"];

let objects = fruits.concat(cars);  //The concat() method is used to create a new array by merging existing arrays
console.log(objects);

let firstItem = fruits.shift();
console.log(firstItem);


//Array Methods

//push()
// - The push() method adds new items to the end of the array

//pop()
// - The pop() method removes the last item of an array, and returns that item.

// reverse() 
// The reverse() method is used to set the array in reverse

//toString()
// The toString() method is used to convert an array into String

//shift()
// The shift() method is used to remove the first element in an array

//unshift()
// The unshift() method is used to add the element at the beginning of the array

//concat()
// The concat() method is used to create a new array by merging existing arrays

//sort()
// The sort() method is used to set the array in ascending order




