function makeGreen() {
  document.body.style.backgroundColor = "green";
}
function makeRed() {
  document.body.style.backgroundColor = "red";
}
//***********handle blue button click by setting function name**********
// get make-blue-button id elements into blueButton
const blueButton = document.getElementById("make-blue-button");
//  just set the name of the function
blueButton.onclick = makeBlue;

function makeBlue() {
  document.body.style.backgroundColor = "blue";
}

//   handle event using anonymous function
const greenButton = document.getElementById("make-purple-button");
// anonymous function that means which function have no name
greenButton.onclick = function () {
  document.body.style.backgroundColor = "purple";
};
//handle by using add event listener
const steelBlue = document.getElementById("make-steelBlue-button");
steelBlue.addEventListener("click", makeSteelBlue);
function makeSteelBlue() {
  document.body.style.backgroundColor = "SteelBlue";
}
// another way addEventListener
const hotPinkButton = document.getElementById("make-thistle-button");
hotPinkButton.addEventListener("click", function () {
  document.body.style.backgroundColor = "Thistle";
});
//another addEvenetListener
document.getElementById("make-aliceBlue-button").addEventListener("click", function () {
    document.body.style.backgroundColor = "AliceBlue";
  });
