// Array methods: Map, filter, reduce

//------------ Map ------------//

let array1 = [1, 2, 3, 4, 5];

let doubledArray = array1.map(x => x * 2);

console.log(doubledArray); // Output: [2, 4, 6, 8, 10]
console.log(array1);


//------ filter ---- //
let arr = [2,3,4,5,6,7];

let even = arr.filter(val => val<5);
//    return val % 2 !== 0;
    //   return val % 2 === 0;

console.log(even);

// -------- Reduce ------ //

let array = [23,24,1,24,22,21];

let output = array.reduce((accumulator, currentValue)=>{
    return accumulator > currentValue ? accumulator : currentValue;
});

console.log(output);