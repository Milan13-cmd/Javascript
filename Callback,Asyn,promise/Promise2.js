let h1 = document.querySelector('h1');

function colorChange(color,delay){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            h1.style.color = color;
            resolve("color changed")

        },delay);
    })
}

colorChange('red', 1000)
.then(() =>{
    console.log("red color is added");
    return colorChange('blue', 1000);
})

.then(()=> {
    console.log('blue is added');
    return colorChange('orange', 1000)
})