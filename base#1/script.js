// understanding stack and heap memory

// In stack a copy of value is passed which doesnot change the actual value
 let name = "John"
 let anothername = name
anothername = "Roy"


console.log(anothername);
console.log(name)

// In heap the reference of actual value is passed
let user1 = 
{
   name:"hero",
   email:"hero12@gamil.com"   
}
 let user2 = user1;

 user2.email = "newemail@gmail.com"

 console.log(user1);
 console.log(user2);