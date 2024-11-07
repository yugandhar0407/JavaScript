/*
    Question: Write a function called filterAdults that takes an array of person 
    objects with name and age properties and filters out adults (age >= 18).

    Input: const persons = [{name: 'John', age: 25}, {name: 'Alice', age:16}, {name: "Bob", age:30}];

*/

//create a function filterAdults
function filterAdults(persons){
    //returns 0 if the array is empty
    if(persons.length === 0){
        return 0;
    }
//return the persons whose age is greater than 18
    return persons.filter(persons => persons.age >= 18);
}

const persons = [
    {name: 'Yugandhar', age: 25},
    {name: 'Dharani', age: 23},
    {name: "Cheshvika", age:1},
    {name: "Sahasra", age:10},
    {name: "Bhavesh", age:30}
];

const minors = filterAdults(persons);
console.log(minors);