// Function to generate random number between min and max inclusive
function randomIntFromInterval(min, max)
{
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/*
Function to pick random integers from an array of integers in order
from mincount to maxcount
*/
function randomIntsFromIntsArray(minCount, maxCount, NumOfRandIntsNeeded) {
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

    /*
    console.log(`randIndex: ${randIndex}`);
    console.log(`copyOfRandInt: ${copyOfRandInt}`);
    console.log(`intsArray: ${intsArray}`);
    console.log(`---------------`);
    */

    NumOfRandIntsNeeded--;
  }

  return randIntsChosen;
}

let groupsOfRandIntsNeeded = 3;
for(let count = groupsOfRandIntsNeeded; count > 0; count--) {
  console.log("Random ints chosen:", randomIntsFromIntsArray(1, 45, 7));
}
