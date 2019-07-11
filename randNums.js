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

function generateLottoNumbers() {
  let numOfGames = 4;
  let sort = true; // Boolean to see if user wants random ints to be sorted
  let secondSetNeeded = true; // Boolean to see if user wants 2 sets of random ints per game
  let errors = []; // Array to hold error messages
  let minCountSet1 = 1;
  let maxCountSet1 = 35;
  let numOfRandIntsNeededSet1 = 36;
  let minCountSet2 = 1;
  let maxCountSet2 = 20;
  let numOfRandIntsNeededSet2 = 21;

  // Put appropriate error string into errors array depending on values of certain global variables

  if (numOfGames < 1 ) {
    errors.push("Number of games is less than 1.");
  }

  if(minCountSet1 >= maxCountSet1) {
    errors.push("Minimum number in range is equal to or greater than maximum number in range for set1.");
  }

  if(numOfRandIntsNeededSet1 < 1) {
    errors.push("Number of random integers wanted for set1 is less than 1.");
  }

  if(numOfRandIntsNeededSet1 >= maxCountSet1) {
    errors.push("Number of random integers wanted for set1 is greater than or equal to maximum number in range for set1.");
  }

  // If you need second set of random integers, check values of more global variables 
  if (secondSetNeeded === true) {
    if(minCountSet2 >= maxCountSet2) {
      errors.push("Minimum number in range is equal to or greater than maximum number in range for set2.");
    }
    
    if(numOfRandIntsNeededSet2 < 1) {
      errors.push("Number of random integers wanted for set2 is less than 1.");
    }

    if(numOfRandIntsNeededSet2 >= maxCountSet2) {
      errors.push("Number of random integers wanted for set2 is greater than or equal to maximum number in range for set2.");
    }
  }

  // If there are error messages to show
  if (errors.length > 0) {
    /*
    console.log("ERROR: 1 or more invalid input(s) given.");
    
    // List errors one by one
    errors.forEach(error => {
      console.log(error);
    });
    */
    // For each item in todo list create a list item
    todoList.todos.forEach(function(todo, position) {
      var todoLi = document.createElement('li');
      var todoTextWithCompletion = '';

      if (todo.completed === true) {
        todoTextWithCompletion = '(x) ' + todo.todoText;
      }
      else {
        todoTextWithCompletion = '( ) ' + todo.todoText;
      }

      todoLi.id = position;
      todoLi.textContent = todoTextWithCompletion;
      todoLi.appendChild(this.createDeleteButton());
      todosUl.appendChild(todoLi);
    }, this)  // need to include 'this' here to refer to
              // object in todo method in view object
      // this // refers to iew object
      // forEach(callback, this)
  }
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
}