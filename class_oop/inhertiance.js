class User{
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`user name is ${this.username}`)
    }
}

class Character extends User{
    constructor(username,name,anime){
        super(username);
        this.name = name;
        this.anime = anime;
    }
    showCharacter(){
        console.log(`Character is ${this.name}`)
    }
}


const user1 = new Character( "John Doe", "Naruto");
user1.logMe()
user1.showCharacter()


const user2 = new User( "Jane Smith")
user2.logMe()

console.log(user1 === user2) // false

console.log(user1 instanceof Character) // true