// const myObj = {
//     js: "javascript",
//     cpp: "C",
//     py: "python",
//     java: "java"
// }

// for (const key in myObj) {
//   console.log(`${key} shorter is ${myObj[key]}`)
// }

// const arr = ["apple","banana","cherry"];
// for(const item in arr){
//     console.log(arr[item])
// }


let min = 1;
let max = 100;
let random = Math.floor(Math.random() * (max - min + 1));
console.log("Random number between "+ random);
let guess;
let attempt = 0;
let running = false;
while(running){
  let  guess = prompt(`Enter no between ${min} - ${max}`);
  guess = Number(guess);
}

  if(guess > 100 || guess < 1){
    alert('Enter valid number')
  }
  
  else{
    attempt ++;
   if(random > guess){
    window.alert('Too low')
   }
   else if( random < guess){
    window.alert('Too High');
   }
   else{
  window.alert(`Congraulation the number is ${random}`)
  running= false;
   }
  }
