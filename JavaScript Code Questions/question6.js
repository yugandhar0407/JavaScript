//Write a function that returns the factorial of a number using recursion.

function factorial(n){


    // returns  1 if the given input is 0 or 1
    if(n === 0 || n === 1){
        return 1;
    }
    //returns the input in n - 1 format like 5*4*3*2*1
    return n * factorial(n - 1);

}
    console.log(factorial(5));
