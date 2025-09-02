const marvel_heros = ["ironman", "thor", "spiderman", "hulk"];
const dc_heros = ["Superman", "flash", "wonderwomen", "batman"];

// marvel_heros.push(dc_heros);

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);


// const allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros);  .concat is used to merge two arrays

const allHeros = [...marvel_heros, ...dc_heros]; // spread operator is also used to merge two arrays
console.log(allHeros);

const anotherArr = [1,2,3,[4,5,6],7,[6,7,[4,5]]];

const realArr = anotherArr.flat(2); // flat is used to convert multi dimensional array to single dimensional array

console.log(realArr);

console.log(Array.isArray("hello")); // isArray is used to check if the given variable is an array or not
console.log(Array.from("hello"));
console.log(Array.from({name: "harry"})); // from is used to convert array-like objects to array


let score01 = 100;
let score02 = 200;
let score03 = 300;

console.log(Array.of(score01, score02, score03)); // of is used to create an array from a list of arguments

