let largestCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"]

//You need to help me fixup the largeCountries array so that
// China and Pakistan are added back into their respective places

// Use push() and pop() and their counterparts Unshift and shift

largestCountries.pop();
largestCountries.push("Pakistan");

largestCountries.shift()
largestCountries.unshift("China")

console.log(largestCountries)