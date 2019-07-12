function clearErrors() {
  var errorsDiv = document.getElementById('errors_div');
    
  errorsDiv.innerHTML = ''; // Clear errors div
}

document.querySelector('button').addEventListener("click", (event) => {
  // Get the element that was clicked on
  var elementClicked = event.target
    
  // Check if elementClicked is a reset_button button
  if (elementClicked.className === 'reset_button') {
    clearErrors();
  }
})