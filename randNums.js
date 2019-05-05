// Function to generate random number between min and max inclusive
function randomIntFromInterval(min, max)
{
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Create array of integers from minCount to maxCount
let intsArray = [];
let mincount = 1;
let maxCount = 2;

for(let count = mincount; count <= maxCount; count++) {
  intsArray.push(count);
}

console.log(intsArray);

let min = 1;
let max = 3;
let myRandNum = randomIntFromInterval(min, max);

