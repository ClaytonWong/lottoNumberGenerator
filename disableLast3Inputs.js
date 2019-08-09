function disableLast3Inputs(_checked) {
  var secondSetNeededChecked = document.getElementById("secondSetNeededGlobal").checked;

  if(secondSetNeededChecked) {
    document.getElementById('minCountSet2Global').removeAttribute("disabled", !(_checked));
    document.getElementById('maxCountSet2Global').removeAttribute("disabled", !(_checked));
    document.getElementById('numOfRandIntsNeededSet2Global').removeAttribute("disabled", !(_checked));
  }
  else {
    document.getElementById('minCountSet2Global').setAttribute("disabled", !(_checked));
    document.getElementById('maxCountSet2Global').setAttribute("disabled", !(_checked));
    document.getElementById('numOfRandIntsNeededSet2Global').setAttribute("disabled", !(_checked));
  }
}

document.getElementById("secondSetNeededGlobal").addEventListener("change", (event) => {
  var _checked = event.target.value;
  disableLast3Inputs(_checked);
})