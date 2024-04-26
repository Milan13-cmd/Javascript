// array with prices of 5 items->[250,645,300,900,50]
// All items have an offer of 10% OFF on them.Change the array to store final price after applying offer.

// In forof we have to in directly assign a index
// items = [250,645,300,900,50]
// let i = 0;
//  for(let val of items){
//    offer = val/10;
//    items[i] = items[i] - offer;
//    console.log(`the value after discount is ${items[i]}`)
//    i++;
// }

items = [250,645,300,900,50]
for(i = 0; i < items.length ; i++){
    offer = items[i]/10;
    items[i] = items[i] - offer;
 
}
console.log(`the value is ${items}`);
