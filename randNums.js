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

// Pick a random index from intsArray
let minIndex = 0;
let maxIndex = intsArray.length - 1;
let myRandNum = randomIntFromInterval(minIndex, maxIndex);

// Get copy of integer at previously generated index
let copyOfRandInt = intsArray[myRandNum];

// Remove integer from array
intsArray.splice(myRandNum, 1);
console.log(`myRandNum/Random Index: ${myRandNum}`);
console.log(`copyOfRandInt: ${copyOfRandInt}`);
console.log(`intsArray: ${intsArray}`);