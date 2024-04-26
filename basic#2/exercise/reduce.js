// take a number n as input from user.Create an array of number from 1 to n.
// Use the reduce method to calculate sum of all Number in the array.
// Use the reduce to calculate product of all number in the array 

let n = prompt("Enter a number");

let array = [];

for(let i = 1; i<=n; i++){
    array[i-1] = i;
}
console.log(array);

let sum = array.reduce((a,b) =>{
    return a+b;
});

console.log("sum:",sum);

let prod = array.reduce((a,b) => {
    return a*b;
},);
console.log("factorial is:", prod);