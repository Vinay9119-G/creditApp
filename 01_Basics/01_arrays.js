const myArr = [1,2,3,4];

const myHeros = ["Thor", "Ironman", "Spiderman"];

const myArr2 = new Array(1,2,3,4);
// console.log(myArr[1]);

// Array Methods

myArr.push(5); // add element at the end
myArr.push(6);
myArr.pop(); // remove element from the end
myArr.unshift(9); // add element at the beginning
// myArr.shift(); remove element from the beginning

console.log(myArr);

console.log(myArr.includes(5)); // check if element is present in array or not & gives boolean value

// console.log(myArr.indexOf());  gives index of element

// const newArr = myArr.join();

// console.log(typeof newArr); converts array to string
// console.log(newArr);

// slice and splice

console.log("A ", myArr );

const myn1 = myArr.slice(1, 3); // does not change original array

console.log( myn1 );
console.log("B ", myArr );

// splice changes original array

const myn2 = myArr.splice(1, 3); // removes 3 elements from index 1
console.log( myn2 );

console.log("C ", myArr );