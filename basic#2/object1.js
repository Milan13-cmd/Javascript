// singleton
// Object.create

// object literals
const Mysym = Symbol("key1")

const User ={
    name:"Milan",
    "full name": "MIlan tee",
    age:18,
    [Mysym]: "mykey1",
    email:"milan@gmail.com"
} 

//+++ two methods to access object properties
// console.log(User.email);
// console.log(User["email"]);
// console.log(User["full name"]);
// console.log(User[Mysym]);

User.name = "hero"// change the user name 
// Object.freeze(User); // it freeze the object from manipulation
// User.age = 20;
// console.log(User);


User.greeting = () => {
    console.log("hello Js user");
}
User.greetingTwo = function(){
    console.log(`Hello Js user, ${this.name}`);
}
console.log(User.greeting());
console.log(User.greetingTwo());