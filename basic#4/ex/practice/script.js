// // Grab the welcome-el pagaraph and store it in a variable called welcomeEl
// let welcomeEl = document.querySelector("#welcome-el");

// // Create two variable(name and greeting) that contains your name
// let name = "MIlan";
// let greeting = "Welcome to my page"

// //Render the welcome message using welcomeEl.innerText
// welcomeEl.innerText = greeting + name ;


// welcomeEl.innerText += "✋"

let btn = document.querySelector("#purchase");
let Error = document.querySelector("#error")

btn.addEventListener("click",function(){
    Error.textContent = "Something went wrong, please try again";
})