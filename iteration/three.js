// for of
// ["","",""]
// [{},{},{}]

let arr = [1,2,3,4,5];

for (const num of arr) {
    console.log(num)
}

const greetings = "Hello World";

for (const greet of greetings) {
    if(greet === 'o'){
        console.log('O is present');
        break;
    }
    // console.log(`the word is ${greet}`)
}

// Maps

const maps = new Map()
maps.set('NP', "Nepal")
maps.set('UK', "United Kingdom")
maps.set('FR', "France")
maps.set('NP', "Nepal")

// console.log(maps)

for(const [key,value] of maps){
    console.log(key ,":-", value)
}


const myObj = {
    game1: "CSGO",
    game2 : "GTA"
}

for(const [key,value] of myObj){
    console.log(key , value)
}