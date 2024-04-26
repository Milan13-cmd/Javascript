// For a given array with marks of students->
// [85,12,23,44,34].Find the average marks of the entire class.

let marks = [85,12,23,44,34];
let sum = 0;

for(let val of marks){
    sum = sum + val;
}
avg = sum/marks.length;

console.log(`the avg marks is ${avg}`);