function disableLast3Inputs(_checked) {
  var secondSetNeededChecked = document.getElementById("secondSetNeeded").checked;

  if(secondSetNeededChecked) {
    document.getElementById('minCountSet2').removeAttribute("disabled",!(_checked));
    document.getElementById('maxCountSet2').removeAttribute("disabled",!(_checked));
    document.getElementById('numOfRandIntsNeededSet2').removeAttribute("disabled", !(_checked));
  }
  else {
    document.getElementById('minCountSet2').setAttribute("disabled",!(_checked));
    document.getElementById('maxCountSet2').setAttribute("disabled",!(_checked));
    document.getElementById('numOfRandIntsNeededSet2').setAttribute("disabled", !(_checked));
  }

  document.getElementById("x").innerText = secondSetNeededChecked;
}

document.getElementById("secondSetNeeded").addEventListener("change", (event) => {
  var _checked = event.target.value;
  disableLast3Inputs(_checked);
})