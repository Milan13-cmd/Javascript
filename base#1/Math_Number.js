// Understanding Number and Maths

const a = Number(1)
console.log(a);

const b = new Number(100)
console.log(b);

console.log(b.toString().length);
console.log(b.toFixed(1));

const otherNumber = 123.8966

console.log((otherNumber.toPrecision(4)));

const hundred = 100000
console.log(hundred.toLocaleString('en-NP'));

// ++++++++++++++ Maths +++++++++++++++++ //

// console.log(Math);
// console.log(Math.abs(-4)); // it convert negative to postive and viseverse
// console.log(Math.floor(4.6));// it always take a lower value
// console.log(Math.round(4.1)); // it always round the number to the nearest number
// console.log(Math.ceil(4.2));// it always  give a higher value
// console.log(Math.min(4,3,6,8));
// console.log(Math.max(4.3,6,8));

console.log(Math.random()); // values  between 0 - 1
console.log((Math.random() *10) + 1);  // values  between 1 - 10 decimal
console.log(Math.floor(Math.random()*10) + 1); // values in number

const min = 10;
const max= 20;
console.log(Math.floor(Math.random()* (max - min +1)) + min);


