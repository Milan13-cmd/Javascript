let stocks = {
  Fruits: ["strawberry", "grapes", "apple", "banana"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "peanuts"],
  toppings: ["chocloate", "peanuts"],
};

let order = (Fruit_name, call_production) => {
  setTimeout(() => {
    console.log(`${stocks.Fruits[Fruit_name]}`);
    call_production();
  }, 2000);
};

// callback hell
let production = () => {
  setTimeout(() => {
    console.log("production started");

    setTimeout(() => {
      console.log("Fruits has been chooped");

      setTimeout(() => {
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);
        setTimeout(() => {
          console.log("start the machine");
          setTimeout(() => {
            console.log(`Select iceream has placed on ${stocks.holder[0]}`);
            setTimeout(() => {
              console.log(`${stocks.toppings[0]} has  been selected`);
              setTimeout(() => {
                console.log("serving has placed");
              }, 2000);
            }, 3000);
          }, 2000);
        }, 1000);
      }, 1000);
    }, 2000);
  }, 0);
};

order("0", production);
