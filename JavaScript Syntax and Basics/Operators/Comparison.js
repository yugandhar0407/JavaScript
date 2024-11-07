//Comparison Operator

// equal to [==]
let x = 23;

console.log(x == "23");  // true because == checks only the value


let variableNew = 23;

if(variableNew == "23"){                    
    console.log("He is eligible to vote");
}else{
    console.log("Not eligible");
}

// equal type and equal value [===]

let z = 12;
console.log(z === "12");  // false, because === checks the both value and type.


// >= greater than or equal to

let age = 19;

if(age >= 18){
    console.log("Person is a Major");
}else{
    console.log("Person is a Minor");
}

// <= less than or equal to

let personAge = 15;
if(personAge <= 18){
    console.log("person is not eligible to vote");
}else{
    console.log("Person is eligible to vote");
}
