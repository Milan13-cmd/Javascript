const heading = document.querySelector("h2");
console.dir(heading.innerText);

heading.innerText = heading.innerText + "From Apna College Studenet";


let divs = document.querySelectorAll(".box");
let idx = 1;
 for(dev of divs){
  dev.innerText = `new unique value ${idx}`;
  idx++;
}

let para = document.querySelector("p");
console.log(para.setAttribute("class","newclass"))


let id = document.querySelector('div');
console.log(id);
id.style.backgroundColor="gray";
id.style.color="brown"
id.innerText="hello";

//--- Append ---//

let newbtn = document.createElement("button");
newbtn.innerText="Click me";

divs.append(newbtn);
