//if statement

//if statement executes only the statement is true...

let x = 20;

if(x > 18){
    console.log("Person is eligible to vote");
}

// if else

// if else statements 
// if the condition is true  if statement executes otherwise else statement executes.

let age = 23;

if(age < 10){
console.log("age is less than ten");
}else{
    console.log("age is greater than ten");
}


let num = 20;

if(num == 10){
    console.log("num is equal to 10");
}else{
    console.log("num is not equal to 10 ")
}

//if else-if

let number  = 120;

if(number == 30){
    console.log("number is equal to thirty");
}else if(number == 60){
    console.log("number is equal to sixty");
}else if(number == 90){
    console.log("number is equal to ninety");
}else if(number = 120){
    console.log("number is equal is one twenty");
}else{
    console.log("number is not equal to 30, 60, 90, and 120");
}

//switch statement
//switch statement is executes one code from multiple expressions
//it is used to test the equality of the variables

let grade = "A";

let gradeResult;

switch(grade){
    case "A":
        gradeResult = "A Grade";
        break;
    case "B":
        gradeResult = "B Grade";
        break;
    case "C":
        gradeResult = "C Grade";
        break;
    case "D":
        gradeResult = "D Grade";
        break;
    default:
        gradeResult = "No Grade is Available";
}

console.log(gradeResult);