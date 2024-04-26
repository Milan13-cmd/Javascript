let user = {
    username : " MIlan",
    welcomeMessage: function greeting(){
        console.log(`${this.username} this is my web`)
        // console.log(this)
        
    }
}

user.welcomeMessage()
user.username ='Mike';
user.welcomeMessage();


// function hero(){
//     let user = "superman";
//     console.log(this.user)
// }

// hero()

const hero = () => {
    let user = "Superman";
    console.log(this)
}
hero()
// const addTwo = (num1,num2) => { // eplicit return
//     return num1 + num2;
// }

const addTwo = (num1,num2) => num1 + num2;// implicit return



console.log(addTwo(3,4));