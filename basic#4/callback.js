function get(getid,nextid){

    setTimeout(() => {
        console.log("data", getid)
        if(nextid){
            nextid()
        }
    },2000);
}


// callback hell
get(1,() => {
    console.log("waiting for 2..");
    get(2, ()=>{
    console.log("waiting for 3..");
    get(3);
})
});


