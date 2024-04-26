let colorBtn = document.getElementById("btn");
let colorPicker = document.getElementById("colorpicker")

colorBtn.addEventListener("click", function(){

    let green = Math.floor(Math.random()*256);
    let red = Math.floor(Math.random()*256);
    let blue = Math.floor(Math.random()*256);
    document.body.style.backgroundColor = colorPicker.value;
    document.body.style.backgroundColor = `rgb(${red},${green}, ${blue})`;
})