let player1Time = 102
let player2Time = 108


function totalRaceTime(){
    let result = player1Time + player2Time
    return result;
}

let output = totalRaceTime()
console.log(output);


function rollDice(){
    let randomNumber = Math.floor(Math.random() * 6 + 1);
    return randomNumber;
}

let random = rollDice()
console.log(random)


let hasSolvedChallenge = true;
let hasHintsLeft = true;

if(hasSolvedChallenge && hasHintsLeft){
    showSolution();
}
function showSolution(){
    console.log("Showing the solution..")
}


let likesDocumentries = true;
let likeStartups = false;

if(likesDocumentries || likeStartups){
  recommendMovie()
}

function recommendMovie(){
    console.log("Hey, check out this new flim we think you will like!");
}

// let welcomeEl = document.getElementById("welcome-el")
// //                   parameters
// function greetUser(Greet,name, emoji){
//     welcomeEl.textContent = `${Greet}, ${name} ${emoji}`;
// }
// //         arguments
// greetUser("Haiya", "Milan", "👋")


function add(a,b){
    return a+b;
}

console.log(add(3,4));
console.log(add(9,102))

function getFirst(arr){
    return arr[0];
}

console.log(getFirst([1,2,3,4]))
