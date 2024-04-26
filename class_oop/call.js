function SetUsername(username){
    // complex DB calls
    console.log("called")
    this.username = username
}

function createUser(username,email, password){
    SetUsername.call(this,username)
    this.email = email;
    this.password = password;
}

const user1 = new createUser('John', "msmws", "121ws")
console.log(user1)