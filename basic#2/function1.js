function myworld(msd){
    //parameter -> input
    console.log("hello everyone");
    console.log("hello evert");
    console.log(msd);
}

myworld("Haiyaaa Ahhh"); // argument


let array = [2,4,3,5];

array.forEach((square) => {
    console.log(`The square is ${square*2}`);
})

// Find sum

function sum(a,b){
    // console.log(`the sum is ${a+b}`);
    //local variables -> scope
    s = a+b;
    console.log("before return");
    return s;

}
let val = sum(2,3);
console.log(val);