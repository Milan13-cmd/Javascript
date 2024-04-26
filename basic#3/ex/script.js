
// Create a new button element. Give it a text "click me",
// background color red and text color white 


let btn = document.createElement("button")

btn.innerHTML = "<h1>Click me</h1>"
btn.style.backgroundColor = "red";
btn.style.color = "#fff";
btn.style.borderRadius = "5px";

document.querySelector("body").append(btn);


// Create a p tag in html, give it a class & some styling.
// Now create a new class in Css and try to append this to class to the <p> element.


let para = document.querySelector("#para");

para.classList.add("p")

