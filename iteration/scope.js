let a = 300;  // global scopr

// block scope
if(true){
    let a= 10;
    const b = 20;
    console.log("Inner:", a)
}

console.log(a)


// nested scope

function one(){
    let username = "Milan";

    function two(){
        let website =  "Facebook";
        console.log(username)
    }
    // console.log(website);
    two()
}
one();

if(true){
    let username = "laim";
    if(username === "laim"){
        let website = "Favebook"
        console.log(username + website);
    }
    // console.log(website)
}

// console.log(username);