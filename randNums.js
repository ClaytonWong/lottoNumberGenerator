//let numOfGamesGlobal;//4
//let sortGlobal;//true; // Boolean to see if user wants random ints to be sorted
//let secondSetNeededGlobal;//true; // Boolean to see if user wants 2 sets of random ints per game
//let errorsGlobal; // Array to hold error messages
//let minCountSet1Global;//1;
//let maxCountSet1Global;//35;
//let numOfRandIntsNeededSet1Global;// 36;
//let minCountSet2Global;// 1;
//let maxCountSet2Global;//20;
//let numOfRandIntsNeededSet2Global;//21;

let errorsListGlobal = {
  errorsGlobal: [],
  checkAndAddErrors: function(numOfGamesGlobal, minCountSet1Global, maxCountSet1Global, 
                              numOfRandIntsNeededSet1Global, secondSetNeededGlobal, 
                              minCountSet2Global, maxCountSet2Global, numOfRandIntsNeededSet2Global) {
    // Put appropriate error string into errorsGlobal array depending on values of certain global variables
    
    // The regular expression /^-?\d+$/ will check if given string is an integer
    if( /^-?\d+$/.test(numOfGamesGlobal) === false ) {
      this.errorsGlobal.push("Number of games is not an integer.");
    }
    else {
      if ( parseInt(numOfGamesGlobal) < 1 ) {
        this.errorsGlobal.push("Number of games is less than 1.");
      }
    }

    var minCountSet1GlobalIntTest = /^-?\d+$/.test(minCountSet1Global);
    var maxCountSet1GlobalIntTest = /^-?\d+$/.test(maxCountSet1Global);
    var numOfRandIntsNeededSet1GlobalIntTest = /^-?\d+$/.test(numOfRandIntsNeededSet1Global);

    if(minCountSet1GlobalIntTest === false) {
      this.errorsGlobal.push("minCountSet1Global is not an integer.")
    }

    if(maxCountSet1GlobalIntTest === false) {
      this.errorsGlobal.push("maxCountSet1Global is not an integer.")
    }

    if(numOfRandIntsNeededSet1GlobalIntTest === false) {
      this.errorsGlobal.push("numOfRandIntsNeededSet1Global is not an integer.")
    }

    // If min. and max. from set1 are integers, then compare them 
    if(minCountSet1GlobalIntTest && maxCountSet1GlobalIntTest) {
      if( parseInt(minCountSet1Global) >= parseInt(maxCountSet1Global) ) {
        this.errorsGlobal.push("Minimum number in range is equal to or greater than maximum number in range for set1.");
      }
    }

    if(numOfRandIntsNeededSet1GlobalIntTest === true) {
      if( parseInt(numOfRandIntsNeededSet1Global) < 1 ) {
        this.errorsGlobal.push("Number of random integers wanted for set1 is less than 1.");
      }
    }
  
    if(numOfRandIntsNeededSet1GlobalIntTest && maxCountSet1GlobalIntTest) {
      if( parseInt(numOfRandIntsNeededSet1Global) >= parseInt(maxCountSet1Global) ) {
        this.errorsGlobal.push("Number of random integers wanted for set1 is greater than or equal to maximum number in range for set1.");
      }
    }
    
    // If you need second set of random integers, check values of more global variables 
    if (secondSetNeededGlobal === true) {

      var minCountSet2GlobalIntTest = /^-?\d+$/.test(minCountSet2Global);
      var maxCountSet2GlobalIntTest = /^-?\d+$/.test(maxCountSet2Global);
      var numOfRandIntsNeededSet2GlobalIntTest = /^-?\d+$/.test(numOfRandIntsNeededSet2Global);

      if(minCountSet2GlobalIntTest === false) {
        this.errorsGlobal.push("minCountSet2Global is not an integer.")
      }

      if(maxCountSet2GlobalIntTest === false) {
        this.errorsGlobal.push("maxCountSet2Global is not an integer.")
      }

      if(numOfRandIntsNeededSet2GlobalIntTest === false) {
        this.errorsGlobal.push("numOfRandIntsNeededSet2Global is not an integer.")
      }

      if(minCountSet2GlobalIntTest && maxCountSet2GlobalIntTest) {
        if( parseInt(minCountSet2Global) >= parseInt(maxCountSet2Global) ) {
          this.errorsGlobal.push("Minimum number in range is equal to or greater than maximum number in range for set2.");
        }
      }

      if(numOfRandIntsNeededSet2GlobalIntTest) {
        if(parseInt(numOfRandIntsNeededSet2Global) < 1) {
          this.errorsGlobal.push("Number of random integers wanted for set2 is less than 1.");
        }
      }
      
      if(numOfRandIntsNeededSet2GlobalIntTest && maxCountSet2GlobalIntTest) {
        if( parseInt(numOfRandIntsNeededSet2Global) >= parseInt(maxCountSet2Global) ) {
          this.errorsGlobal.push("Number of random integers wanted for set2 is greater than or equal to maximum number in range for set2.");
        }
      }
    }
  },
  clearErrors: function() {
    this.errorsGlobal = [];
  }
};

let handlers = {
  generateLottoNumbers: function () {

    view.clearErrorsDiv(); // Clear any error messages currently on screen
    errorsListGlobal.clearErrors(); // Clear any error messages from errors list

    let numOfGamesGlobal = document.getElementById("numOfGamesGlobal").value;//4

    let sortGlobal = document.getElementById("sortGlobal").checked;//true; // Boolean to see if user wants random ints to be sorted
    
    let secondSetNeededGlobal = document.getElementById("secondSetNeededGlobal").checked;//true; // Boolean to see if user wants 2 sets of random ints per game
    
    let minCountSet1Global = document.getElementById("minCountSet1Global").value;//1;

    let maxCountSet1Global = document.getElementById("maxCountSet1Global").value;//35;

    let numOfRandIntsNeededSet1Global = document.getElementById("numOfRandIntsNeededSet1Global").value;// 36;

    let minCountSet2Global = document.getElementById("minCountSet2Global").value;// 1;

    let maxCountSet2Global = document.getElementById("maxCountSet2Global").value;//20;

    let numOfRandIntsNeededSet2Global = document.getElementById("numOfRandIntsNeededSet2Global").value;//21;
  
    try {
      errorsListGlobal.checkAndAddErrors(numOfGamesGlobal, minCountSet1Global, maxCountSet1Global, 
        numOfRandIntsNeededSet1Global, secondSetNeededGlobal, 
        minCountSet2Global, maxCountSet2Global,
        numOfRandIntsNeededSet2Global);
      
      if (errorsListGlobal.errorsGlobal.length > 0) {
        throw errorsListGlobal.errorsGlobal;
      }
    }
    catch(err) {
      view.displayErrors();
    }
  },
  clearErrors: function () {
    errorsListGlobal.clearErrors();
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

let view = {
  displayErrors: function() {
    //var errorsDiv = document.querySelector('div');
    var errorsDiv = document.getElementById('errors_div');
    //var errorsDiv = document.querySelector('#errors_div');
    
    errorsDiv.innerHTML = ''; // Clear div before going through it

    // Put header in error div
    var errorHeader = document.createElement('h3');
    errorHeader.textContent = 'Error! 1 or more invalid inputs given!';
    errorsDiv.appendChild(errorHeader);

    // For each error in errorsGlobal, create a paragraph in error div
    // under header
    errorsListGlobal.errorsGlobal.forEach(function(error) {
      var errorPara = document.createElement('p');
      var errorTextWithCompletion = error;

      errorPara.textContent = errorTextWithCompletion;
      
      errorsDiv.appendChild(errorPara);
    }, this)  // need to include 'this' here to refer to
              // object in errorsListGlobal method in view object
              // this refers to view object
              // forEach(callback, this)
  },
  clearErrorsDiv: function() {
    var errorsDiv = document.getElementById('errors_div');
      
    errorsDiv.innerHTML = ''; // Clear errors div
  }
}

//function generateLottoNumbers() {
  // If there are error messages to show
  //if (errorsGlobal.length > 0) {
    
  //}
  /*
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
  */
//}


document.querySelector('button').addEventListener("click", (event) => {
  // Get the element that was clicked on
  var elementClicked = event.target
    
  // Check if elementClicked is a GenerateNumbers button
  if (elementClicked.className === 'GenerateNumbers') {
    handlers.generateLottoNumbers();
  }
})