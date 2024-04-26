let foods = ["Apple", "Banana", "Orange"];

// var fruits = foods.filter(function (food) {
//   return food[0] === 'A' || food[0] === 'O'; // returns items starting with A or O
// });
// console.log(fruits); // Output: [ 'Apple', 'Orange' ]


// let fruits = {
//     Apple: "red",
//     Banana : "yellow",
// }

// Object.prototype.milan = function(){
//     console.log(`MIlan is present in all objects`)
// }


// Array.prototype.heyMilan= function(){
//     console.log(`Hey Milan!`);
// }
// fruits.milan()
// // fruits.heyMilan();

// foods.milan()
// foods.heyMilan()


/* Inhertiance */
const User = {
    name: "John Doe",
    email:"john@doe.com"
}

const Teacher = {
    makeVideo : true
}

const TeachingSupport = {
    isAvailable: false,
    __proto__: Teacher
}

Teacher.__proto__ = User;  


// modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)  



let name = "Milan   "


String.prototype.Namelength = function(){
    console.log(`${this}`)
    console.log(`True length is: ${this.trim().length}`)
}    
name.Namelength();
"YAHOO))".Namelength()