
//sum function
function sum(a,b){
    return a+b;
}
console.log(`the sum is ${sum(1,2)}`)

// Arrow function
// Modern Js
const Sum = (a,b) =>{  // the Sum is a function variable which stores function in it
    console.log(a+b);
};
Sum(2,3);

const mul = (x,y) =>{
  return x*y;
};
console.log(mul(2,3));