let vowels= ["a","e","i","o","u"];
let name = "milan";
let count = 0;

for(let i=0; i<name.length; i++){
    if(vowels.includes(name[i])){
        count++;
    }
}

// for(let i = 0; i < name.length; i++){
//     for(let j = 0; j < word.length; j++){
//         if(word[j] == name[i]){
//             count++;
//         }
//     }
// }


console.log(count)
// console.log("hello")


// let num1 =[2,3,4,5,8];

// function largest(arr){
//     return arr.reduce((current, nextvalue) =>
//  (nextvalue > current ? nextvalue : current ), arr[0] );
// }

// console.log(largest(num1))


let arr = ["rock", "paper", "scrissor"]

    function hero ()
    {
        let random =  Math.floor(Math.random() * 3)
        return (arr[random]);    
    }

    console.log(hero())