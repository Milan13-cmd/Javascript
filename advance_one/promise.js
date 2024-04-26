// const Promise1 = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Promise1 is resolved")
//         resolve()
//     },1000)
// })

// Promise1.then(function(){
//     console.log("Promise consumed")
// })

// new Promise(function(resolve,reject){
//     setTimeout(() => {
//         console.log("Asunxc task 2")
//         resolve()
//     },1000)

// }).then(function(){
//     console.log("Async 2 resolved")
// })


const promiseThree = new Promise(function(resolve,reject) {
   setTimeout(function(){
    resolve({username: "Shai", email:"shai@example.com"})
   },1000)
})

promiseThree.then(function(user){
    console.log(user)
})



const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username: "MIlan", password:"1123"})
        }
        else{
            reject('ERROR : SomeThing went wrong')
        }
    },1000)
})

promiseFour
.then((user) =>{
  console.log(user)
  return user.username;
})
.then((username) => {
    console.log(username);
})
.catch((error) =>{
    console.log(error)
}).finally(() => console.log("the promise is either resolved or rejected"))


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error =true;
        if(!error){
            resolve({username: "javascript", password:'123'})

        }else{
            reject("error: JS went wrong")
        }
    },1000)
})

async function consumepromiseFive(){
    try{
        const response = await promiseFive;
        console.log(response)

    }
    catch(error){
       console.log(error)
    }
}
consumepromiseFive()


// async function getAllUSers(){
//     try{
//         const response = await fetch('https://randomuser.me/api/')

//         const data = await response.json();
//         console.log(data);
//     }
//     catch(error){
//         console.log('Error')
//     }
// }
// getAllUSers()

fetch('https://randomuser.me/api/')
.then((response)=>{
    return response.json();
})
.then((data) => console.log(data))
.catch((error) => {
   console.log(error)
})