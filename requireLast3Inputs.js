function requireLast3Inputs(_checked) {
  var secondSetNeededChecked = document.getElementById("secondSetNeeded").checked;

  if(secondSetNeededChecked) {
    document.getElementById('minCountSet2').setAttribute("required", !(_checked));
    document.getElementById('maxCountSet2').setAttribute("required", !(_checked));
    document.getElementById('numOfRandIntsNeededSet2').setAttribute("required", !(_checked));
  }
  else {
    document.getElementById('minCountSet2').removeAttribute("required", !(_checked));
    document.getElementById('maxCountSet2').removeAttribute("required", !(_checked));
    document.getElementById('numOfRandIntsNeededSet2').removeAttribute("required", !(_checked));
  }
}

document.getElementById("secondSetNeeded").addEventListener("change", (event) => {
  var _checked = event.target.value;
  requireLast3Inputs(_checked);
})