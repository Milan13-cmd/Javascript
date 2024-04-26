// We are given array of marks of  a students.Filter out of the marks of student that 
// scored 90.

let scored = [68,90,70,83,96,98];

// let result = scored.filter(marks => marks >= 90);
let result = scored.filter((marks)=>{
    return marks >= 90;
})

console.log(result);