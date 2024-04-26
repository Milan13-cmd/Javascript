// let name = "Milan"
// let Greeting = " Hi there"

// function pr(){
//     console.log(`${Greeting}, ${name}!`);
// }

// pr()

let myPoints = 3;

function add3Points(){
    myPoints += 3;
}
add3Points()
function remove1Point(){
    myPoints -= 1;
}
remove1Point()
console.log(myPoints)


let hands = ["rock", "paper", "scissor"]
function random(){
    let random = Math.floor(Math.random()*3) 
   return hands[random];// referring the hands  array by using random number
}
console.log(random())