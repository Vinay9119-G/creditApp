// singleton object

// object literal syntax

// How to declair Symbols
const sym1 = Symbol("my identifier");

const JsUser = {
    name: "Vinay",
    [sym1]: "my identifier", // to use symbol as a property name we have to use square brackets
    "Full name": "Vinay Ambawat",
    age: 18,
    lacation: "India",
    email: "ambawatavinay@gmail.com",
    isloggedIn: false,
    lastLoginDays: ["monday", "saturday"],
}

console.log(JsUser.email); // dot notation to access object properties 
console.log(JsUser["email"]); // bracket notation to access object properties
// bracket is used when property name is dynamic like if the property name is stored in a variable then we unable to use dot notation .
// Example:
// "Full name" : "vinay ambawat"
// JsUser.Full name // this will give error because of space in property name
JsUser["Full name"] = "Vinay Ambawat" // this will work
console.log(JsUser["Full name"]);


console.log(JsUser[sym1]); // to access symbol property we have to use square brackets 


JsUser.age = 19; // to update object property
console.log(JsUser.age);

Object.freeze(JsUser); // to make object immutable means we cannot change or add or delete any property of the object
JsUser.age = 20; // this will not work
console.log(JsUser.age);

