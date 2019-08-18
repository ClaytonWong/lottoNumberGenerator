let errorsList = {
  errors: [],
  checkAndAddErrors: function(numOfGames, minCountSet1, maxCountSet1, 
                              numOfRandIntsNeededSet1, secondSetNeeded, 
                              minCountSet2, maxCountSet2, numOfRandIntsNeededSet2) {
    // Put appropriate error string into errors array depending on values of certain global variables
    
    // The regular expression /^-?\d+$/ will check if given string is an integer
    if( /^-?\d+$/.test(numOfGames) === false ) {
      this.errors.push("Number of games is not an integer.");
    }
    else {
      if ( parseInt(numOfGames) < 1 ) {
        this.errors.push("Number of games is less than 1.");
      }
    }

    var minCountSet1IntTest = /^-?\d+$/.test(minCountSet1);
    var maxCountSet1IntTest = /^-?\d+$/.test(maxCountSet1);
    var numOfRandIntsNeededSet1IntTest = /^-?\d+$/.test(numOfRandIntsNeededSet1);

    if(minCountSet1IntTest === false) {
      this.errors.push("minCountSet1 is not an integer.")
    }

    if(maxCountSet1IntTest === false) {
      this.errors.push("maxCountSet1 is not an integer.")
    }

    if(numOfRandIntsNeededSet1IntTest === false) {
      this.errors.push("numOfRandIntsNeededSet1 is not an integer.")
    }

    // If min. and max. from set1 are integers, then compare them 
    if(minCountSet1IntTest && maxCountSet1IntTest) {
      if( parseInt(minCountSet1) >= parseInt(maxCountSet1) ) {
        this.errors.push("Minimum number in range is equal to or greater than maximum number in range for set1.");
      }
    }

    if(numOfRandIntsNeededSet1IntTest) {
      if( parseInt(numOfRandIntsNeededSet1) < 1 ) {
        this.errors.push("Number of random integers wanted for set1 is less than 1.");
      }
    }
  
    if(numOfRandIntsNeededSet1IntTest && maxCountSet1IntTest) {
      if( parseInt(numOfRandIntsNeededSet1) >= parseInt(maxCountSet1) ) {
        this.errors.push("Number of random integers wanted for set1 is greater than or equal to maximum number in range for set1.");
      }
    }
    
    // If you need second set of random integers, check values of more global variables 
    if (secondSetNeeded === true) {

      var minCountSet2IntTest = /^-?\d+$/.test(minCountSet2);
      var maxCountSet2IntTest = /^-?\d+$/.test(maxCountSet2);
      var numOfRandIntsNeededSet2IntTest = /^-?\d+$/.test(numOfRandIntsNeededSet2);

      if(minCountSet2IntTest === false) {
        this.errors.push("minCountSet2 is not an integer.")
      }

      if(maxCountSet2IntTest === false) {
        this.errors.push("maxCountSet2 is not an integer.")
      }

      if(numOfRandIntsNeededSet2IntTest === false) {
        this.errors.push("numOfRandIntsNeededSet2 is not an integer.")
      }

      if(minCountSet2IntTest && maxCountSet2IntTest) {
        if( parseInt(minCountSet2) >= parseInt(maxCountSet2) ) {
          this.errors.push("Minimum number in range is equal to or greater than maximum number in range for set2.");
        }
      }

      if(numOfRandIntsNeededSet2IntTest) {
        if(parseInt(numOfRandIntsNeededSet2) < 1) {
          this.errors.push("Number of random integers wanted for set2 is less than 1.");
        }
      }
      
      if(numOfRandIntsNeededSet2IntTest && maxCountSet2IntTest) {
        if( parseInt(numOfRandIntsNeededSet2) >= parseInt(maxCountSet2) ) {
          this.errors.push("Number of random integers wanted for set2 is greater than or equal to maximum number in range for set2.");
        }
      }
    }
  },
  clearErrorsList: function() {
    this.errors = [];
  }
};

let view = {
  displayErrors: function() {
    var errorsDiv = document.getElementById('errors_div');
        
    errorsDiv.innerHTML = ''; // Clear div before going through it

    // Put header in error div
    var errorHeader = document.createElement('h3');
    errorHeader.textContent = 'Error! 1 or more invalid inputs given!';
    errorsDiv.appendChild(errorHeader);

    // For each error in errors, create a paragraph in error div
    // under header
    errorsList.errors.forEach(function(error) {
      var errorPara = document.createElement('p');
      var errorText = error;

      errorPara.textContent = errorText;
      
      errorsDiv.appendChild(errorPara);
    }, this)  // need to include 'this' here to refer to
              // object in errorsList method in view object
              // this refers to view object
              // forEach(callback, this)
  },
  clearErrorsDiv: function() {
    var errorsDiv = document.getElementById('errors_div');
      
    errorsDiv.innerHTML = ''; // Clear errors div
  },
  clearTextInputs: function() {
    document.getElementById("numOfGames").value = "";

    document.getElementById("minCountSet1").value = "";

    document.getElementById("maxCountSet1").value = "";

    document.getElementById("numOfRandIntsNeededSet1").value = "";

    document.getElementById("minCountSet2").value = "";

    document.getElementById("maxCountSet2").value = "";

    document.getElementById("numOfRandIntsNeededSet2").value = "";
  }
}

let handlers = {
  generateLottoNumbers: function () {

    // Clear any error messages currently on screen, then
    // clear any error messages from errors list
    this.clearErrors();

    let numOfGames = document.getElementById("numOfGames").value;//4

    let sort = document.getElementById("sort").checked;//true; // Boolean to see if user wants random ints to be sorted
    
    let secondSetNeeded = document.getElementById("secondSetNeeded").checked;//true; // Boolean to see if user wants 2 sets of random ints per game
    
    let minCountSet1 = document.getElementById("minCountSet1").value;//1;

    let maxCountSet1 = document.getElementById("maxCountSet1").value;//35;

    let numOfRandIntsNeededSet1 = document.getElementById("numOfRandIntsNeededSet1").value;// 36;

    let minCountSet2 = document.getElementById("minCountSet2").value;// 1;

    let maxCountSet2 = document.getElementById("maxCountSet2").value;//20;

    let numOfRandIntsNeededSet2 = document.getElementById("numOfRandIntsNeededSet2").value;//21;
  
    try {
      // Validate input from test boxes
      errorsList.checkAndAddErrors(numOfGames, minCountSet1, maxCountSet1, 
        numOfRandIntsNeededSet1, secondSetNeeded, 
        minCountSet2, maxCountSet2,
        numOfRandIntsNeededSet2);
      
      if (errorsList.errors.length > 0) {
        throw errorsList.errors;
      }
    }
    catch(err) {
      // If there are errors, then display them
      view.displayErrors();
    }
    
  },
  clearErrors: function () {
    view.clearErrorsDiv();
    errorsList.clearErrorsList();
  },
  clearErrorsAndInputs: function () {
    this.clearErrors();
    view.clearTextInputs();
  }
}

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

//function generateLottoNumbers() {
  // If there are error messages to show
  //if (errors.length > 0) {
    
  //}
  /*
  else {
    if (secondSetNeeded === true) {
      for(let count = 1; count <= numOfGames; count++) {
        console.log(`
        Game ${count} 
        Random ints chosen set 1: ${randomIntsFromIntsArray(minCountSet1, maxCountSet1, numOfRandIntsNeededSet1, sort)}
        Random ints chosen set 2: ${randomIntsFromIntsArray(minCountSet2, maxCountSet2, numOfRandIntsNeededSet2, sort)}
        `);
      }
    }
    else {
      for(let count = 1; count <= numOfGames; count++) {
        console.log(`
        Game ${count} 
        Random ints chosen set 1: ${randomIntsFromIntsArray(minCountSet1, maxCountSet1, numOfRandIntsNeededSet1, sort)}
        `);
      }
    }
  }
  */
//}

document.querySelector('button').addEventListener("click", (event) => {
  // Get the element that was clicked on
  var elementClicked = event.target;
    
  // Check if elementClicked is a GenerateNumbers button
  if (elementClicked.className === 'GenerateNumbers') {
    handlers.generateLottoNumbers();
  }
})

document.querySelector('button').addEventListener("click", (event) => {
  // Get the element that was clicked on
  var elementClicked = event.target;
    
  // Check if elementClicked is a reset_button button
  if (elementClicked.className === 'reset_button') {
    handlers.clearErrorsAndInputs();
  }
})