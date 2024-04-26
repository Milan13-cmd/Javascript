

let back = document.querySelector("#mode");
let body = document.querySelector("body");

let curr = "light";
back.addEventListener("click", () => {
 
    if(curr === "light"){
        curr = "dark"
        body.classList.add("dark");
        body.classList.remove("light")
    }
    else{
        curr = "light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(curr)
})



let count = document.querySelector("#box");
count.style.backgroundColor = "red";
count.style.width = "60px"
count.style.height = "60px";

count.addEventListener("mouseover", (e) =>{
  e.target.style.color = "white";
  e.target.style.scale = "2";

  setTimeout(() => {
    e.target.style.color ="";
    e.target.style.scale = "";
},2000);
})



