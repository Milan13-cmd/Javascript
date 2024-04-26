// sort() = method used to sort element of an array in place.
//             Sorts elements as strings in lexicographic order, not alphabetical. 
//             lexicographic =(alphabet + numbers + symbols) as strings


const bike = [{name:"BMW",yrs: 23,place:"germany"},
              {name:"Harley Devinson",yrs: 24, place:"Poland"},
              {name:"Bullet", yrs:34,place:"england"}]

// bike.sort((a,b) => a.yrs - b.yrs); //Forward              
// // bike.sort((a,b) => b.yrs -a.yrs);//Reverse

// // bike.sort((a,b) => a.place -b.place);
// bike.sort((a,b) => b.place - a.place);

bike.sort((a,b) => a.name.localeCompare(b.name));

console.log(bike);