const say = function(){
    console.log("milan");
}
const changeText = function(){

    document.querySelector('h1').innerHTML
     = "best Hero"
}

let change = setInterval(changeText, 2000)

document.querySelector('#btn')
.addEventListener('click',function(){
    console.log("stooped")
    clearTimeout(change);
})