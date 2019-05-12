// Function to generate random number between min and max inclusive
function randomIntFromInterval(min, max)
{
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/*
Function to pick random integers from an array of integers in order
from mincount to maxcount
*/
function randomIntsFromIntsArray(minCount, maxCount, numOfRandIntsNeeded, sort) {
  // Create array of integers from minCount to maxCount
  let intsArray = [];
  
  for(let count = minCount; count <= maxCount; count++) {
    intsArray.push(count);
  }

  const minIndex = 0;
  let maxIndex;
  let randIndex;
  let copyOfRandInt;
  let randIntsChosen = [];

  while(numOfRandIntsNeeded > 0) {
    maxIndex = intsArray.length - 1;
    
    // Pick a random index from intsArray
    randIndex = randomIntFromInterval(minIndex, maxIndex);

    // Get copy of integer at previously generated index
    copyOfRandInt = intsArray[randIndex];

    // Add copyOfRandInt to randIntsChosen
    randIntsChosen.push(copyOfRandInt);

    // Remove integer from array
    intsArray.splice(randIndex, 1);

    numOfRandIntsNeeded--;
  }

  if(sort === true) {
    randIntsChosen = randIntsChosen.sort((a, b) => a - b);
  }

  return randIntsChosen;
}

let numOfGamesGlobal = 1;
let sortGlobal = false; // Boolean to see if user wants random ints to be sorted
let secondSetNeededGlobal = false; // Boolean to see if user wants 2 sets of random ints per game
let minCountSet1Global = 1;
let maxCountSet1Global = 45;
let numOfRandIntsNeededSet1Global = 7;
let minCountSet2Global = 1;
let maxCountSet2Global = 45;
let numOfRandIntsNeededSet2Global = 7;

if (numOfGamesGlobal < 1 || minCountSet1Global >= maxCountSet1Global || numOfRandIntsNeededSet1Global < 1) {
  let errors = [];

  // Put appropriate error string into errors array depending on values of parameters,
  if (numOfGamesGlobal < 1 ) {
    errors.push("Group(s) of random integers wanted is less than 1.");
  }

  if(minCountSet1Global >= maxCountSet1Global) {
    errors.push("Minimum number in range is equal to or greater than maximum number in range.");
  }

  if(numOfRandIntsNeededSet1Global < 1) {
    errors.push("Number of random integers wanted per set is less than 1.");
  }

  console.log("ERROR: 1 or more invalid input given.");
  
  // List errors one by 1
  errors.forEach(error => {
    console.log(error);
  });
}
else {
  for(let count = numOfGamesGlobal; count > 0; count--) {
    console.log("Random ints chosen:", randomIntsFromIntsArray(minCountSet1Global, maxCountSet1Global, numOfRandIntsNeededSet1Global, sortGlobal));
  }
}