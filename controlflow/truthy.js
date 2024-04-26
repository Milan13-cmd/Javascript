let username = 'false';

if(username){
    console.log("user logged in")
}
else{
    console.log("please login")
}

// Falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "00", 'false', " ", [],{}, function(){}


userEmail =[]

if(userEmail.length === 0){
  console.log("Array is empty");
}

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty")
}


// Nullish Coalescing Operator (??) : null undefined

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 20;
val1 = null ?? 10 ?? 20;

// Terniary Operator

// condition ? true : false;

const iceprice = 100;

iceprice >= 200 ? console.log("greater tha 200") : console.log("less than 200")


console.log(val1)