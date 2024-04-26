let name = "milan"
let address = "usa"

console.log(`My name is ${name} aand address is ${address}`);

const  gameName = new String("Milans")

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.charAt(4));
console.log(gameName.slice(1,3));
console.log(gameName.toUpperCase());
console.log(gameName.indexOf('i'));

const newString = gameName.substring(0,4);
console.log(newString)

const email = "roy!2@gmail.com";

console.log(email.replace('!','1'));