//-------- Dom Manipulation ----- //

let newHeading = document.createElement("h1");
newHeading.innerHTML = "<h1>This is Me</h1>";
document.querySelector("body").prepend(newHeading);

let newbtn = document.createElement("button");
newbtn.innerText="Click me";
console.log(newbtn);
document.body.append(newbtn);

//---- Node Remove---//

let para = document.querySelector("p");
para.remove()