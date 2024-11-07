/*
    Question: Implement a function called calculateAveragePrice that takes an array of product objects with name and price
              properties and calculate the average price of all products.

    Input: const products = [{name: 'Laptop, price:1000},{name:'Smartphone', price:800},{name:'Tablet', price:500},];
    output: 
*/
// function calculateAveragePrice

function calculateAveragePrice(products){
    if(products.length === 0){
        return 0;// return 0 if the array is empty to avoid error
    }
    //calculate the total price of the products
    const total = products.reduce((sum, products) => sum + products.price, 0);

    //calculate the average
    const average = total / products.length;

    return average; //return the average
}
const products = [
    {name: "laptop", price: 65000},
    {name: "TV", price: 7000},
    {name: "Tablet", price: 12000},
    {name: "Mobile", price: 1000},
]

const totalAverage = calculateAveragePrice(products);
console.log(totalAverage);
