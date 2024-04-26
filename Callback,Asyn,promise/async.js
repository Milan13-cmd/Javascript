let stocks = {
    Fruits: ["strawberry", "grapes", "apple", "banana"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "peanuts"],
    toppings: ["chocloate", "peanuts"],
  };


let is_shop_open = true;  

function time(ms){

    return new Promise((resolve, reject) => {
        if(is_shop_open){
            setTimeout(resolve,ms)
        
        }
        else{
            reject(console.log("shop close"))
        }
    })
}

async function kitchen(){
    try{
        await time(2000)
       console.log(`${stocks.Fruits[2]} has selected`)

       console.log("started the production");

       await time(2000)
       console.log("Cut the fruits");
       
       await time(1000)
       console.log(`${stocks.liquid[0]} was added`)

       await time(1000)
       console.log("start the machine");

       await time(2000)
       console.log("selected the conatiner")

       await time(3000)
       console.log("select topping")
    }
    catch(error){
          console.log("customer left")
    }
    finally{
          console.log("day ended shop is close")
    }

}

kitchen()

