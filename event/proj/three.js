// generate a random color

const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = "#"
    for(let i = 0; i < 6; i++){
         color += hex[Math.floor(Math.random () *16)]
    }
    return color;
};
// console.log(color);
let interval;
// console.log(randomColor());
const startChangingColor = function(){
    if(!interval){
        interval = setInterval( cahngingColor ,1000)

    }
  function cahngingColor(){

      document.body.style.backgroundColor = randomColor()
  } 
}

const stopChangingColor = function(){
    clearInterval(interval)
    interval = null;
}
document.querySelector("#start").addEventListener
('click',startChangingColor)

document.querySelector("#stop").addEventListener
('click',stopChangingColor)