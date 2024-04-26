/* spread operator = ... allows an iterable such as an 
                array or strimg to be expanded into seperate element
                (unpavks the elements)
                */

/*
let number =[1,2,3,4];
let maximum = Math.max(...number);
let minimum = Math.min(...number);

console.log(maximum);
console.log(minimum);
*/

let username ="Milan";
let letters = [...username].join("-");
console.log(letters);