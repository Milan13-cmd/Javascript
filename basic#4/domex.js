let input = document.createElement('input');
let button = document.createElement('button');
document.querySelector("body").append(button);
document.querySelector("body").append(input)
button.textContent = 'Click me';
button.setAttribute('id',"btn");
input.setAttribute('placeholder', 'username');


let btn = document.querySelector('#btn');
btn.style.color = 'white';
btn.style.backgroundColor = 'blue';


let h1= document.createElement('h1');
document.body.append(h1);
h1.innerHTML =`<h1>DOM Practice</h1>`
h1.style.color = 'purple';

let p = document.createElement("p")
document.body.append(p);
p.innerHTML =`Apna College <b>Delta</b> Practice`