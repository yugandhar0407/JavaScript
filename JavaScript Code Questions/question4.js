/*
    Question: Write a function called sortWordsByLength that takes an array of words 
    and sorts them by their length in ascending order.

    Input: const words = ['apple', 'banana', 'orange', 'strawberry', 'grape'];

*/

//function sortWordsByLength 
function sortWordsByLength(words){
    //returns 0 if the array is empty
    if(words.length === 0){
        return 0;
    }
    /*sort method is used to sort the array and 
    a.length - b.length is used to sort the
    array in ascending order*/
    return words.sort((a,b) => a.length - b.length);

}
//array of words
const words = ['apple', 'banana', 'orange', 'strawberry', 'grape'];


const sortWords = sortWordsByLength(words);
console.log(sortWords);