// Objects
/*
    Objects are built-in Data Structures in JS
    An Object is a collection of properties.
    A property is an association between a name(or key) and a value.
     below example person is a object
                   name, age, city are names or properties or identifiers.
                   and the "Yugandhar", 25, "Kurnool" are the values.

*/
/*
Identifiers

A valid identifiers should follow the below rules:
        1. It can contain alphanumeric characters _ and $.
        2. It cannot start with a number

        Ex: name, $name, _name and name12.
        12name and name 12 are not identifiers.
*/
/*
Accessing Object Properties

We can access the properties with two types of notations

dot . 
bracket ['']

Note: Use Dot . notation when the key is a valid identifier
      We can use Bracket [''] notation with both valid and un valid identifiers.
*/
// creating an object
let person = {
    name: "Yugandhar",
    age: 25,
    city: "Kurnool",
    isMarried: false

};

person.age = 36;  //modifying an existing property
person['city'] = "Hyderabad";

console.log(person["city"]);

person.job = "Engineer";   //adding the new property
person['occupation'] = "Farmer";
console.log(person);

//access the property
const property = "isMarried";
console.log(person[property]);

console.log("My Name: "+person.name);  //access the object with . 
console.log(person["age"]);            //access the object with bracket
console.log(person.city);
console.log(person["age"]); 
console.log(person.job);
console.log(person.occupation);
 
let car = {
    name: "Benz",
    _fuelType: "Petrol",
    "car color": "White"             // To use invalid identifier as key we 
                                    // we have to specify them in "" quotes.
};
let key = "name";                    //Variable as an object
console.log(car);
console.log(car.engine);
console.log(person[key]);
console.log(person.key);

//object destructuring

// To unpack properties from objects, we use object Destructuring.
// In this the variable name should match with the key of an object.
console
let family = {
    father: "Govindarajulu",
    _mother: "Ramalakshmi",
    $son: "Yugandar",
    daughter1: "Dharani"
};

let {_mother, $son} = family;

console.log(_mother);
console.log($son);


//Property Value

/* The value of object Property can be a 
        - Function
        - Array
        - Object
*/

//Function as a Value

let house = {
    Tv: "LG",
    Refrigerator: "Whirlpool",
    run: function() {
        console.log("House Running");
    }
}
house.run();

/*
Object Methods

A JavaScript method is a property containing a function definition.
           Method
             '
document.createElement();
   '         '
Object      Key
*/


/*
Array as a Value

*/

let movie = {
    name: "Devara",
    hero: "NTR",
    herione: "Jhanvi Kapoor",

    crew: ["Koratala Shiva", "Kalyan Ram", "YugandharT"]
};

console.log(movie.name);
console.log(movie.crew);
console.log(movie.crew[1]);


/*
Object as a value
*/

let frontend = {
    skill1: "HTML",
    skill2: "CSS",
    skill3: "JS",
    backend: {
        skill4: "NodeJS",
        skill5: "ExpressJS"
    }
};
console.log(frontend.backend.skill4);
console.log(frontend.backend["skill5"]);
