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
      this.errors.push("Smallest normal number in game is not an integer.")
    }

    if(maxCountSet1IntTest === false) {
      this.errors.push("Largest normal number in game is not an integer.")
    }

    if(numOfRandIntsNeededSet1IntTest === false) {
      this.errors.push("Amount of normal numbers to draw per game is not an integer.")
    }

    // If min. and max. from set1 are integers, then compare them 
    if(minCountSet1IntTest && maxCountSet1IntTest) {
      if( parseInt(minCountSet1) >= parseInt(maxCountSet1) ) {
        this.errors.push("Smallest normal number in game is equal to or greater than largest normal number in game.");
      }
    }

    if(numOfRandIntsNeededSet1IntTest) {
      if( parseInt(numOfRandIntsNeededSet1) < 1 ) {
        this.errors.push("Amount of normal numbers to draw per game is less than 1.");
      }
    }
  
    if(numOfRandIntsNeededSet1IntTest && maxCountSet1IntTest) {
      if( parseInt(numOfRandIntsNeededSet1) >= parseInt(maxCountSet1) ) {
        this.errors.push("Amount of normal numbers to draw per game is greater than or equal to largest normal number in game.");
      }
    }
    
    // If you need second set of random integers, check values of more global variables 
    if (secondSetNeeded === true) {

      var minCountSet2IntTest = /^-?\d+$/.test(minCountSet2);
      var maxCountSet2IntTest = /^-?\d+$/.test(maxCountSet2);
      var numOfRandIntsNeededSet2IntTest = /^-?\d+$/.test(numOfRandIntsNeededSet2);

      if(minCountSet2IntTest === false) {
        this.errors.push("Smallest special number is not an integer.")
      }

      if(maxCountSet2IntTest === false) {
        this.errors.push("Largest special number is not an integer.")
      }

      if(numOfRandIntsNeededSet2IntTest === false) {
        this.errors.push("Amount of special numbers to draw is not an integer.")
      }

      if(minCountSet2IntTest && maxCountSet2IntTest) {
        if( parseInt(minCountSet2) >= parseInt(maxCountSet2) ) {
          this.errors.push("Smallest special number in game is equal to or greater than largest special number in game.");
        }
      }

      if(numOfRandIntsNeededSet2IntTest) {
        if(parseInt(numOfRandIntsNeededSet2) < 1) {
          this.errors.push("Amount of special numbers to draw is less than 1.");
        }
      }
      
      if(numOfRandIntsNeededSet2IntTest && maxCountSet2IntTest) {
        if( parseInt(numOfRandIntsNeededSet2) >= parseInt(maxCountSet2) ) {
          this.errors.push("Amount of special numbers to draw per game is greater than or equal to largest special number in game.");
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
    this.clearOutputDiv(); // Clear outputDiv first

    // Put header in error div
    var errorHeader = document.createElement('h3');
    errorHeader.textContent = 'Error! 1 or more invalid inputs given!';

    var outputDiv = document.getElementById('output_div');
    outputDiv.appendChild(errorHeader);

    // For each error, create a paragraph in outputDiv
    // under header
    errorsList.errors.forEach(function(error) {
      var errorPara = document.createElement('p');
      var errorText = error;

      errorPara.textContent = errorText;
      
      outputDiv.appendChild(errorPara);
    }, this)  // need to include 'this' here to refer to
              // object in errorsList method in view object
              // this refers to view object
              // forEach(callback, this)
  },
  displayTable: function() {
    this.clearOutputDiv(); // Clear outputDiv first

    var outputDiv = document.getElementById('output_div');
    
    // Put table in output div
    var table = document.createElement('table');
    outputDiv.appendChild(table);
  },
  addRow: function() {
    // need to add '[0]' to end of
    // 'var table = document.getElementsByTagName('table')'
    // to make 'table.appendChild(row)' work.
    // This works by getting the first table.
    var table = document.getElementsByTagName('table')[0];

    var row = document.createElement('tr');
    
    table.appendChild(row);
  },
  addTableHeader: function (headerName) {
    var topOfTable = document.getElementsByTagName('tr')[0];

    var header = document.createElement('th');
    header.innerText = headerName;

    topOfTable.appendChild(header);
  },
  addTableData: function () {
    var tableLength = document.getElementsByTagName('tr').length;

    // Get to last row in table
    var lastTableRow = document.getElementsByTagName('tr')[tableLength - 1];

    var tableData = document.createElement('td');
    
    lastTableRow.appendChild(tableData);
  },
  addGameNum: function (count) {
    var tableDataLength = document.getElementsByTagName('td').length;

    // Get to last tableData
    var lastTableData = document.getElementsByTagName('td')[tableDataLength - 1];

    lastTableData.innerText = count;
  },
  addRandNum: function(randNum) {
    var tableDataLength = document.getElementsByTagName('td').length;

    // Get to last tableData
    var lastTableData = document.getElementsByTagName('td')[tableDataLength - 1];

    var span = document.createElement('span');
    span.innerText = randNum;

    lastTableData.appendChild(span);
  },
  clearOutputDiv: function() {
    var outputDiv = document.getElementById('output_div');
      
    outputDiv.innerHTML = ''; // Clear output div
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
    this.clearErrorsAndOutputDiv();

    let numOfGames = document.getElementById("numOfGames").value;

    // Boolean to see if user wants random ints to be sorted
    let sort = document.getElementById("sort").checked;
    
    // Boolean to see if user wants 2 sets of random ints per game
    let secondSetNeeded = document.getElementById("secondSetNeeded").checked;
    
    let minCountSet1 = document.getElementById("minCountSet1").value;

    let maxCountSet1 = document.getElementById("maxCountSet1").value;

    let numOfRandIntsNeededSet1 = document.getElementById("numOfRandIntsNeededSet1").value;

    let minCountSet2 = document.getElementById("minCountSet2").value;

    let maxCountSet2 = document.getElementById("maxCountSet2").value;

    let numOfRandIntsNeededSet2 = document.getElementById("numOfRandIntsNeededSet2").value;
  
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
    finally {
      if (errorsList.errors.length === 0) {
        view.displayTable();
        view.addRow();
        view.addTableHeader('Game');
        view.addTableHeader('Standard numbers');

        if (secondSetNeeded === true) {
          view.addTableHeader('Special numbers');
        }
        
        for(let count = 1; count <= numOfGames; count++) {
          view.addRow();
          view.addTableData();
          view.addGameNum(count);
          view.addTableData();

          var randomNumsSet1 = randomIntsFromIntsArray(minCountSet1, maxCountSet1, numOfRandIntsNeededSet1, sort);

          randomNumsSet1.forEach(function(randNum) {
            view.addRandNum(randNum);
          });

          if (secondSetNeeded === true) {
            view.addTableData();

            var randomNumsSet2 = randomIntsFromIntsArray(minCountSet2, maxCountSet2, numOfRandIntsNeededSet2, sort);
            
            randomNumsSet2.forEach(function(randNum) {
              view.addRandNum(randNum);
            });
          }
        }
      }
    }
  },
  clearErrorsAndOutputDiv: function () {
    view.clearOutputDiv();
    errorsList.clearErrorsList();
  },
  clearErrorsAndOutputDivAndInputs: function () {
    this.clearErrorsAndOutputDiv();
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
    handlers.clearErrorsAndOutputDivAndInputs();
  }
})