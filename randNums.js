// Function to generate random number between min and max inclusive
function randomIntFromInterval(min, max)
{
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let min = 1;
let max = 3;
let myRandNum = randomIntFromInterval(min, max);

console.log(myRandNum);