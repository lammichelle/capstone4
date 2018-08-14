//if you want to see the document heirarchy in the inspect element
//console.dir(document); ----use this!



function rollDie(){
  //step 1: find element
  var dieEl = document.getElementById("die1");
  //step 2 : modify the element
  dieEl.textContent = getRandom();

}




function getRandom () {
  //step 1 : find the elements
  var numberOfSidesEl = document.getElementById("numOfSides");

  //step 2 : get the value from element
  var numberOfSides = numberOfSidesEl.value;
  return Math.floor(Math.random() * numberOfSides) +1;

}

//for box color
function setBoxColor(color){
  //step 1 : find the element
  var box = document.getElementById("colorbox");
  box.style.backgroundColor = color; //changes background color
  box.innerHTML += "<p>" + color + "</p>";







}
