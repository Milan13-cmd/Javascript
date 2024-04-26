function printSum(string1, string2) {
    // Write your code below this line
    let val = Number(string1);
    let val2 = Number(string2);
    sum = val + val2;
    console.log(sum);
}
printSum('51','25');

// forEach is used when we  want to perform an action on each element of array.

let arr = ['kathmandu', 'patan', 'pokhara'];

arr.forEach((val, idx, arr) => {
    console.log(val.toUpperCase(), idx , arr);
});


let array = [34,56,34,23];

// array.forEach((sqr, idx, arr) => {
//     console.log(idx+':'+ sqr*sqr, arr)
// })

//another way to use foreach

let calcSqr = (sqr) => {
    console.log(sqr * sqr);
};

array.forEach(calcSqr);
