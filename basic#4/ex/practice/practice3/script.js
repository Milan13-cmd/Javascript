let fruits = ["🍎", "🍊","🍎","🍊","🍊"]
let applesShelf = document.getElementById("apple-shelf");
let orangeShelf = document.getElementById("orange-shelf");

function  displayFruit(){
    for(let i = 0; i < fruits.length; i++){
        if(fruits[i] === "🍎" ){
            applesShelf.textContent += fruits[i];
        }
        else{
            orangeShelf.textContent += fruits[i]
        }
    }
}

displayFruit();