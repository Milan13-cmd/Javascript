function multifyBy5(num){
    return num*5;
}

multifyBy5.power = 2;

console.log(multifyBy5(3))
console.log(multifyBy5.power)
console.log(multifyBy5.prototype)

function user(username, age){
    this.username = username;
    this.age = age;
}

user.prototype.increment = function(){
    this.age++;
    console.log(`The age is ${this.age}`)
}

let john = new user( "John", 18);

console.log(`age is ${john.age}`)
john.increment();