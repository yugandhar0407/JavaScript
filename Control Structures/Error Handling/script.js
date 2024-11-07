/*
Error handling in JavaScript allows you to handle and manage errors gracefully without crashing your application. 
JavaScript provides a robust mechanism for error handling using try...catch, throw, and finally statements, 
as well as custom error handling and promise rejection handling.

1. try...catch Statement
The try...catch block is the core of error handling in JavaScript. 
It allows you to "try" a block of code, and if an error occurs, it will "catch" the error and handle it.
The try block contains code that may throw an error.
The catch block catches the error and allows you to handle it.
The optional finally block executes whether an error occurs or not.
syntax:
try {
    Code that may throw an error
} catch (error) {
    Code to handle the error
} finally {
    Optional: Code that always runs, regardless of error
}


2. throw Statement
You can use the throw statement to create custom errors. When you throw an error, JavaScript immediately stops executing the code in the current block and passes control to the nearest catch block.
syntax:
throw expression;

3. finally Block
The finally block is optional and is used to execute code after the try...catch block, regardless of whether an error occurred or not. 
This is typically used for cleanup operations.


4. Custom Error Types
JavaScript allows you to create custom error types by extending the built-in Error class. 
This is helpful when you want to create specific error messages for your application.


5. Error Objects
When an error occurs in JavaScript, an error object is created with useful properties:
message: The error message.
name: The name of the error type (e.g., ReferenceError, TypeError).
stack: A stack trace showing where the error occurred (useful for debugging).


6. Handling Asynchronous Errors
In modern JavaScript, promises and async/await are used extensively for asynchronous operations, and error handling is crucial for these operations.


7. Promise Rejection Handling
When using promises, a rejected promise can be handled using .catch() or by handling the promise rejection globally with window.onunhandledrejection.


8. Best Practices for Error Handling in JavaScript
Use try...catch sparingly: Wrap only the code that may actually throw an error.
Handle known errors: For example, handle errors like network issues or invalid inputs, and provide meaningful feedback to users.
Don’t swallow errors silently: Always log the error or provide a fallback mechanism to avoid leaving the user clueless.
Use custom error types: For specific use cases in your application, create custom error classes.
Clean up in finally: Use the finally block to release resources, close connections, or perform other cleanup operations.

Summary:
try...catch: Handle errors in synchronous code.
throw: Generate custom errors.
finally: Cleanup tasks that should run regardless of error.
Asynchronous error handling: Use .catch() for promises or try...catch with async/await.
Error handling ensures your JavaScript applications remain robust and user-friendly, even when something goes wrong.
*/

//try,catch and finally
try {
    let result = someUndefinedFunction();  // This will throw an error
} catch (error) {
    console.error("An error occurred: " + error.message);
} finally {
    console.log("This runs regardless of an error.");
}

//throw
function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}

try {
    console.log(divide(10, 0));
} catch (error) {
    console.error(error.message);  // "Division by zero is not allowed."
}
//In this example, a custom error is thrown if there’s an attempt to divide by zero, and the catch block handles the error.

//finally
try {
    let data = fetchData();  // Assume this function might throw an error
} catch (error) {
    console.error("Error fetching data: " + error.message);
} finally {
    console.log("Cleanup operation: Closing connections...");
}
//The finally block will execute after the try or catch block, even if no errors occurred.

//custom error types
class CustomError extends Error {
    constructor(message) {
        super(message);  // Call the Error constructor
        this.name = "CustomError";  // Custom error name
    }
}

try {
    throw new CustomError("This is a custom error!");
} catch (error) {
    console.error(error.name + ": " + error.message);
}
//This creates a CustomError class, and when an error is thrown, it uses the custom error type.

//error objects
try {
    let obj = undefined;
    console.log(obj.someProperty);  // Will throw a TypeError
} catch (error) {
    console.log("Error name: " + error.name);  // "TypeError"
    console.log("Error message: " + error.message);  // Cannot read properties of undefined
    console.log("Error stack: " + error.stack);  // Stack trace
}

//Using catch with Promises:

fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error("Error fetching data: " + error.message);
    });

//Error Handling with async/await:

async function fetchData() {
    try {
        let response = await fetch('https://api.example.com/data');
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error fetching data: " + error.message);
    }
}

fetchData();
//With async/await, the try...catch block handles errors that occur when awaiting promises.

//promise rejection handling
const myPromise = new Promise((resolve, reject) => {
    reject("Promise was rejected!");
});

myPromise.catch(error => {
    console.error("Caught error: " + error);
});
//Alternatively, you can handle unhandled promise rejections globally:

// window.onunhandledrejection = function(event) {
//     console.error("Unhandled promise rejection: " + event.reason);
// };