// Function to generate random number between min and max inclusive
function randomIntFromInterval(min, max)
{
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/*
Function to pick random integers from an array of integers in order
from mincount to maxcount
*/
function randomIntsFromIntsArray(minCount, maxCount, NumOfRandIntsNeeded, sort) {
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

  while(NumOfRandIntsNeeded > 0) {
    maxIndex = intsArray.length - 1;
    
    // Pick a random index from intsArray
    randIndex = randomIntFromInterval(minIndex, maxIndex);

    // Get copy of integer at previously generated index
    copyOfRandInt = intsArray[randIndex];

    // Add copyOfRandInt to randIntsChosen
    randIntsChosen.push(copyOfRandInt);

    // Remove integer from array
    intsArray.splice(randIndex, 1);

    NumOfRandIntsNeeded--;
  }

  if(sort === true) {
    randIntsChosen = randIntsChosen.sort((a, b) => a - b);
  }

  return randIntsChosen;
}

let numOfGamesGlobal = 1;
let minCountGlobal = 1;
let maxCountGlobal = 45;
let NumOfRandIntsNeededGlobal = 7;
let sort = false; // Boolean to see if user wants random ints to be sorted 

if (numOfGamesGlobal < 1 || minCountGlobal >= maxCountGlobal || NumOfRandIntsNeededGlobal < 1) {
  let errors = [];

  // Put appropriate error string into errors array depending on values of parameters,
  if (numOfGamesGlobal < 1 ) {
    errors.push("Group(s) of random integers wanted is less than 1.");
  }

  if(minCountGlobal >= maxCountGlobal) {
    errors.push("Minimum number in range is equal to or greater than maximum number in range.");
  }

  if(NumOfRandIntsNeededGlobal < 1) {
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
    console.log("Random ints chosen:", randomIntsFromIntsArray(minCountGlobal, maxCountGlobal, NumOfRandIntsNeededGlobal, sort));
  }
}