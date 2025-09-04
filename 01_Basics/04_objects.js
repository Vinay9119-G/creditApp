// const tinderUser = new Object();  Singleton object: using object constructor syntax
const tinderUser = {}; // Non singleton object: using object literal syntax

tinderUser.id = "123abc";
tinderUser.name = "vinay";
tinderUser.isLoggedIn = false;

// console.log(tinderUser); 

const regularUser = {
    email: "vinayambawata@gmial.com",
    fullname: {
        userFullname: {     // we can go how deep we want 
            firstName: "Vinay",
            lastName: "Ambawata"
        }
    }
}
// console.log(regularUser.fullname); Took a dot in your console.log to see the nested object
// console.log(regularUser.fullname.userFullname.lastName); to access nested object properties we have to use dot notation

const obj1 = {1: "a", 2: "b"}; // here 1 and 2 are keys but they are numbers
const obj2 = {3: "a", 4: "b"};
const obj4 = {5: "a", 6: "b"};

// const obj3 = {obj1,obj2}; ---> to merge two or more objects we use spread operator
// const obj3 = Object.assign({},obj1,obj2,obj4) another way to merge two or more objects using Object.assign method
const obj3 = {...obj1,...obj2,...obj4}; // spread operator to merge two or more objects (as we compair to arrays in 02_Arrays.js) this will overwrite the same keys if we see assign method also
// console.log(obj3);

const users = [
    {
        userId: 1,
        userName: "vinay",
        email: "vinayambawatagmail.com",
    },
    {
        userId: 1,
        userName: "vinay",
        email: "vinayambawatagmail.com",
    },
    {
        userId: 1,
        userName: "vinay",
        email: "vinayambawatagmail.com",
    },
]

users[1].email = "vinayambawatagmail.com"; // to update the email of second user
console.log(tinderUser);

// console.log(Object.keys(tinderUser));  to get all the keys of the object in an array
// console.log(Object.values(tinderUser));  to get all the values of the object in an array
// console.log(Object.entries(tinderUser));  to get all the key-value pairs of the object in an array of arrays
// console.log(tinderUser.hasOwnProperty("name"));  to check if the object has a property or not gives boolean value

const course = {
    coursename: "Learn JS",
    price: 999, 
    courseInstructor: "Vinay Ambawat"
}

// course.courseInstructor

const {courseInstructor} = course; // object destructuring
console.log(courseInstructor);

const {courseInstructor : Instructor } = course; // object destructuring with alias
console.log(Instructor);   // if we want to use different variable name than the property name

// API 




