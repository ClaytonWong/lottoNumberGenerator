// Function to generate random number between min and max inclusive
function randomIntFromInterval(min, max)
{
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Create array of integers from minCount to maxCount
let intsArray = [];
let mincount = 1;
let maxCount = 3;

for(let count = mincount; count <= maxCount; count++) {
  intsArray.push(count);
}

// Pick a random index from intsArray
let minIndex = 0;
let maxIndex = intsArray.length - 1;
let myRandNum = randomIntFromInterval(minIndex, maxIndex);
console.log(myRandNum);



