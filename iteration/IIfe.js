// Immediately Invoke function

(function foo(){ // name iife
    console.log("Hello buby")
})();

( (name)=>{  // unname iife
  console.log(`my name is ${name}  `)
})("Roy")

