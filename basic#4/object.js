const student = {
    fullName : "Milan Tamang",
    marks: 34,
    //Method
    printMarks : function() {
        console.log("marks = ", this.marks);
    }
};
student.printMarks(); // Output:


const employee = {
    calcTax() {
        console.log("tax rate is 10%");
    }
}

const person = {
    salary : 20000,
    calcTax(){
        console.log("tax rate is 10%")
    }
    
}
console.log(person)
// Inheritance in JavaScript using prototype chain
person.__proto__ = employee; // Linking the object to its parent/super