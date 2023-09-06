const fruits = [
    "orange","banana", "guava",
   "cherry","mango","apple"
]

fruits[4] = "melon";
console.log(fruits);
console.log(fruits[4]);

//length
let length = fruits.length;
console.log(length);

//sort
let sort = fruits.sort();
console.log(sort);

//add elments
fruits.push("kiwii");
console.log(fruits);

// toString
let sfruits = fruits.toString();
console.log(sfruits);

//concat
const vegetables = [
    "avacado", "brinjal","carrot",
    "potato","onion","tomato"
]

let basket = fruits.concat(vegetables);
console.log(basket);