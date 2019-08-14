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
    if (numOfGamesGlobal < 1 ) {
      this.errorsGlobal.push("Number of games is less than 1.");
    }
  
    if(minCountSet1Global >= maxCountSet1Global) {
      this.errorsGlobal.push("Minimum number in range is equal to or greater than maximum number in range for set1.");
    }
  
    if(numOfRandIntsNeededSet1Global < 1) {
      this.errorsGlobal.push("Number of random integers wanted for set1 is less than 1.");
    }
  
    if(numOfRandIntsNeededSet1Global >= maxCountSet1Global) {
      this.errorsGlobal.push("Number of random integers wanted for set1 is greater than or equal to maximum number in range for set1.");
    }
  
    // If you need second set of random integers, check values of more global variables 
    if (secondSetNeededGlobal === true) {
      if(minCountSet2Global >= maxCountSet2Global) {
        this.errorsGlobal.push("Minimum number in range is equal to or greater than maximum number in range for set2.");
      }
      
      if(numOfRandIntsNeededSet2Global < 1) {
        this.errorsGlobal.push("Number of random integers wanted for set2 is less than 1.");
      }
  
      if(numOfRandIntsNeededSet2Global >= maxCountSet2Global) {
        this.errorsGlobal.push("Number of random integers wanted for set2 is greater than or equal to maximum number in range for set2.");
      }
    }
  },
  clearErrors: function() {
    this.errorsGlobal = [];
  }
};

let handlers = {
  generateLottoNumbers: function () {

    let numOfGamesGlobal = parseInt(
      document.getElementById("numOfGamesGlobal").value
    );//4

    let sortGlobal = document.getElementById("sortGlobal").checked;//true; // Boolean to see if user wants random ints to be sorted
    
    let secondSetNeededGlobal = document.getElementById("secondSetNeededGlobal").checked;//true; // Boolean to see if user wants 2 sets of random ints per game
    
    let minCountSet1Global = parseInt(
      document.getElementById("minCountSet1Global").value
    );//1;

    let maxCountSet1Global = parseInt(
      document.getElementById("maxCountSet1Global").value
    );//35;

    let numOfRandIntsNeededSet1Global = parseInt(
      document.getElementById("numOfRandIntsNeededSet1Global").value
    );// 36;

    let minCountSet2Global = parseInt(
      document.getElementById("minCountSet2Global").value
    );// 1;

    let maxCountSet2Global = parseInt(
      document.getElementById("maxCountSet2Global").value
    );//20;

    let numOfRandIntsNeededSet2Global = parseInt(
      document.getElementById("numOfRandIntsNeededSet2Global").value
    );//21;
  
    try {
      errorsListGlobal.checkAndAddErrors(numOfGamesGlobal, minCountSet1Global, maxCountSet1Global, 
        numOfRandIntsNeededSet1Global, secondSetNeededGlobal, 
        minCountSet2Global, maxCountSet2Global,
        numOfRandIntsNeededSet2Global);
      
      if (errorsListGlobal.errorsGlobal.length > 0) {
        //view.displayErrors();
        throw errorsListGlobal.errorsGlobal;
      }
      
    }
    catch(err) {
      
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
    //var errorsDiv = document.getElementById('errors_div');
    var errorsDiv = document.querySelector('#errors_div');
    
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