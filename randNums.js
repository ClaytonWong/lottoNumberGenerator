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

let numOfGamesGlobal = 4;
let sortGlobal = true; // Boolean to see if user wants random ints to be sorted
let secondSetNeededGlobal = true; // Boolean to see if user wants 2 sets of random ints per game
let errorsGlobal = []; // Array to hold error messages
let minCountSet1Global = 1;
let maxCountSet1Global = 35;
let numOfRandIntsNeededSet1Global = 6;
let minCountSet2Global = 1;
let maxCountSet2Global = 20;
let numOfRandIntsNeededSet2Global = 1;

// Put appropriate error string into errorsGlobal array depending on values of certain global variables

if (numOfGamesGlobal < 1 ) {
  errorsGlobal.push("Number of games is less than 1.");
}

if(minCountSet1Global >= maxCountSet1Global) {
  errorsGlobal.push("Minimum number in range is equal to or greater than maximum number in range for set1.");
}

if(numOfRandIntsNeededSet1Global < 1) {
  errorsGlobal.push("Number of random integers wanted for set1 is less than 1.");
}

// If you need second set of random integers, check values of more global variables 
if (secondSetNeededGlobal === true) {
  if(minCountSet2Global >= maxCountSet2Global) {
    errorsGlobal.push("Minimum number in range is equal to or greater than maximum number in range for set2.");
  }
  
  if(numOfRandIntsNeededSet2Global < 1) {
    errorsGlobal.push("Number of random integers wanted for set2 is less than 1.");
  } 
}

// If there are error messages to show
if (errorsGlobal.length > 0) { 
  console.log("ERROR: 1 or more invalid input(s) given.");
  // List errors one by one
  errorsGlobal.forEach(error => {
    console.log(error);
  });
}
else {
  if (secondSetNeededGlobal === true) {
    for(let count = 1; count <= numOfGamesGlobal; count++) {
      console.log(`
      Game ${count} 
      Random ints chosen set 1: ${randomIntsFromIntsArray(minCountSet1Global, maxCountSet1Global, numOfRandIntsNeededSet1Global, sortGlobal)}
      Random ints chosen set 2: ${randomIntsFromIntsArray(minCountSet2Global, maxCountSet2Global, numOfRandIntsNeededSet2Global, sortGlobal)}
      `);
    }
  }
  else {
    for(let count = 1; count <= numOfGamesGlobal; count++) {
      console.log(`
      Game ${count} 
      Random ints chosen set 1: ${randomIntsFromIntsArray(minCountSet1Global, maxCountSet1Global, numOfRandIntsNeededSet1Global, sortGlobal)}
      `);
    }
  }
}