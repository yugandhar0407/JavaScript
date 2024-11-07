/*
    Question:  Implement a function called "calculateTotalAmount" that takes an array of order 
    objects and calculates the total amount of all orders. Each order object has a price property.

    input: const orders = [{id:1, price: 10}, {id:2, price:20}... and so on]
*/

    //function calculateTotalAmount

    function calculateTotalAmount(orders){

        return orders.reduce((total, order) => total + order.price, 0);

    }
    //input orders
    
    const orders = [
        {id:1, price:10},
        {id:2, price:20},
        {id:3, price:40},
        {id:4, price:80},
        {id:5, price:160}
    ];

    //calculate the amount with totalAmount variable
    const totalAmount = calculateTotalAmount(orders);
    console.log(totalAmount);