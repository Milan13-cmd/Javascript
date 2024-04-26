// document.getElementById('owl').onclick = function(){
//     alert("owl")
// }

// attachEvent()
// jQuery - on
// type, timestamp, Preventdefault
// target, toElement, srcElement, currentTarget,
// clientX, clientY, pageX, pageY, screenX, screenY
// altKey, ctrlKey, shiftKey, keyCode

// document.getElementById("images").addEventListener(
//   "click",
//   function (e) {
//     console.log("clicked inside the ul");
//   },
//   false
// );
// document.getElementById("owl").addEventListener(
//   "click",
//   function (e) {
//     console.log("owl clicked");
//     e.stopPropagation();
//   },
//   false
// );

// document.getElementById('google').addEventListener
// ('click',function(e){
//     e.preventDefault();
//     e.stopPropagation();
//     console.log("google clicked");
// }, false)

document.querySelector('#images').addEventListener
  ('click',function(e){
    console.log(e.target.tagName);
    // to remove the img only
    if(e.target.tagName === 'IMG'){
        console.log(e.target.id);
        // to remove the child from parentNode
        let removeIt = e.target.parentNode;
        removeIt.remove();
    }
  })
    // removeli.parentNode.removeChild(removeli) // second method
