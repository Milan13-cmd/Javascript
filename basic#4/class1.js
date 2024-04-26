// Create a class User with  attributes name, email and have a viewData() function.
let data = "this a info"

class User{
    constructor(name,email){
        this.name = name;
        this.email = email;
    }

    viewData(){
        console.log("the data is" + data)
    }
}


class Admin extends User{
    constructor(name, email){
        super(name,email);
    }
    editData(){
        data = "some new value";
    }
}
let student = new User("MIlan", "milan@tmg")

let teacher = new User("Juan", "juan@tmg");
console.log(student)
console.log(student.viewData())

let admin1 = new Admin("admin", "admin@gmail.com");
console.log(admin1);
console.log(data);
console.log(admin1.editData())
console.log(data)