let saveEl = document.querySelector("#save-el");
let countEl = document.querySelector("#count-el");
let count = 0;

function increment(){

    count += 1;
    countEl.textContent = count;
}

function save(){
  let dataSave = count + " - "
  saveEl.textContent += dataSave;
  countEl.textContent = 0;
  count = 0;

  
}




