function requireLast3Inputs(_checked) {
  var secondSetNeededChecked = document.getElementById("secondSetNeededGlobal").checked;

  if(secondSetNeededChecked) {
    document.getElementById('minCountSet2Global').setAttribute("required", !(_checked));
    document.getElementById('maxCountSet2Global').setAttribute("required", !(_checked));
    document.getElementById('numOfRandIntsNeededSet2Global').setAttribute("required", !(_checked));
  }
  else {
    document.getElementById('minCountSet2Global').removeAttribute("required", !(_checked));
    document.getElementById('maxCountSet2Global').removeAttribute("required", !(_checked));
    document.getElementById('numOfRandIntsNeededSet2Global').removeAttribute("required", !(_checked));
  }
}

document.getElementById("secondSetNeededGlobal").addEventListener("change", (event) => {
  var _checked = event.target.value;
  requireLast3Inputs(_checked);
})