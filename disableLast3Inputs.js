function disableLast3Inputs(_checked) {
  document.getElementById('minCountSet2Global').disabled = _checked ? false : true;
  document.getElementById('maxCountSet2Global').disabled = _checked ? false : true;
  document.getElementById('numOfRandIntsNeededSet2Global').disabled = _checked ? false : true;
}