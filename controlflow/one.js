

let userloggedId = true;
let googleId = false;

if(userloggedId  && googleId) {
    console.log('This is for users who  are both registered and use Google');
}

if(userloggedId || googleId){
    console.log('This is for users who are either registered or use Google')
}


let user = [];
if(user.length === 0){
    console.log('no user found')
}




