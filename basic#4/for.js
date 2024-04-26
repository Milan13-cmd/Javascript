// for( let count = 10; count <= 20; count ++){
//   console.log(count)
// }

// for(let i = 10; i < 101; i++){
//     console.log(i);
// }


// let message = [
//     "Hey, how's it going",
//     "I'm great, thank you! How about you?",
//     "All good. Been working on my portfilo lately",
//     "Same here!"
// ]

// for(let i = 0; i < message.length; i++){
//     console.log(message[i])
// }

// let cards = [7,3,9]

// for(let i = 0; i< cards.length; i++){
//     console.log(cards[i])
// }



let sentence = ["Hello ", "my ", "name ", "is ", "Milan "]
let greetingEl = document.querySelector("#greeting-el")

for(i = 0; i < sentence.length; i++){
    greetingEl.textContent += sentence[i];
    console.log(greetingEl)
}