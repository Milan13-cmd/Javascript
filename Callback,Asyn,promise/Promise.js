// Promise has two part: resolve or reject

let stocks = {
  Fruits: ["strawberry", "grapes", "apple", "banana"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "peanuts"],
  toppings: ["chocloate", "peanuts"],
};

let is_shop_open = true;

let order = (time, work) => {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(() => {
        resolve(work());
      }, time);
    } else {
      reject(console.log("our shop is close"));
    }
  });
};

order(2000, () => console.log(`${stocks.Fruits[0]}`))
  .then(() => {
    return order(0, () => console.log("Production has started"));
  })
  .then(() => {
    return order(2000, () => {
      console.log("Fruits was chooped");
    });
  })

  .then(() => {
    return order(1000, () => {
      console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} has selected`);
    });
  })

  .then(() => {
    return order(1000, () => {
      console.log("start the machine");
    });
  })

  .then(() => {
    return order(2000, () => {
      console.log(`${stocks.holder[0]} has been selected`);
    });
  })

  .then(() => {
    return order(3000, () => {
      console.log(`Tooping is ${stocks.toppings[0]}`);
    });
  })
  .then(() => {
    return order(2000, () => {
      console.log("serve ice ceram");
    });
  })

  .catch( () => {
    console.log("Customer left")
  })

  .finally( () => {
    console.log("day ended shop is closed")
  })

