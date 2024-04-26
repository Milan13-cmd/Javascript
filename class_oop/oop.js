const  user = {
    username: "MIlan",
    loginCount : 8,
    singnedIn: true,
    
    // function ka inside exection context  of user object. so it has access to all  the properties of user object.
    getUserDeatils: function(){
        console.log("get user data");
        console.log(`Username is ${this.username}`)
        // console.log(this) // current context
    }
}
console.log(user.getUserDeatils())
console.log(this);// empty parthesis


function User(name, isLogIn){
    this.name = name;
    this.isLogIn = isLogIn;
    this.greeting = function(){
        console.log(`welocm ${this.username}`)
    }
    return this;

}
// userTwo overwrite the userOne value
// const userOne = User( 'Mike', false );
// const userTwo = User("John",true)
// console.log(userOne);


const userOne = new User( 'Mike', false ) ;
const userTwo = new User('John', true);
console.log(userOne.constructor);
console.log(userTwo)