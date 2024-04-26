

// for(let i=0; i<=10; i++){
//     console.log(`Outer loop ${i}`)
//     for(let j=0; j<=i; j++){
//         console.log(`${j}*${i} = ${i*j}`)
//     }
// }



// break and continue
for(let index = 1; index <=10;index++){
    if(index == 5){
        console.log("Detected 5");
        // break;
        continue;
    }
    console.log(`Value of i is ${index}`)
}

