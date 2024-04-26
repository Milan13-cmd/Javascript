// ES6

// class User {
//     constructor(name,age, password){
//         this.name = name;
//         this.age = age;
//         this.password = password;
//     }

//     encryptname(){
//         return `${this.name.toUpperCase()}Tamang`;
//     }
//     encryptpass(){
//         return `${this.password}12345`;
//     }
// }

// const user1 = new User('Milan', 12, 'abcd');

// console.log(user1.encryptpass());
// console.log(user1.encryptname());

// behind scene
function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptpass = function (){
    return `${this.password} is secured`
}


const user2 = new User('Zoro', "ZOrolost@", 'lost')

console.log(user2.encryptpass())