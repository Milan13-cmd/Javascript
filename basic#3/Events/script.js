let btn1 = document.querySelector("#btn");

//---- Event Listener --- //

btn1.addEventListener("click", (e) => {
    console.log("button was clicked");
    console.log(e)
    console.log(e.type);
})

const handler = () => {
    console.log("button was second clicked");
}
btn1.addEventListener("click",handler);

btn1.addEventListener("click", () => {
    console.log("button was third")
})

//----- Remove  Event Listener -------//
btn1.removeEventListener("click", handler)