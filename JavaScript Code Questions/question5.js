/* Question: Write a JavaScript function that takes an array of numbers and returns \
a new array with only the even numbers with ascending order. */


function filterEvenNumbers(numbers){

    // Filter the array to get only even numbers
   const evenNumbers = numbers.filter((numbers => numbers % 2 === 0));

   // Sort the even numbers in ascending order
   evenNumbers.sort((a,b) => a -b);

   return evenNumbers;

}

let numbers = [2,3,5,6,78,34,4,123,12,56,78];

const evenNum = filterEvenNumbers(numbers);
console.log(evenNum);