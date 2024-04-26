// Create  a funcs

// function countVowel(str) {
//   count = 0;

//   for (let char of str) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//        count ++;
//     }
//   }
//   console.log(count)
// }
// countVowel("milan")

// Arrow function
  
const countVowel = (str) =>{
    count = 0;
    for (let char of str) {
        if (
          char === "a" ||
          char === "e" ||
          char === "i" ||
          char === "o" ||
          char === "u"
        ) {
           count ++;
        }
      }
      return count;
}
console.log(`the voowel is ${countVowel("heros")}`);
    
