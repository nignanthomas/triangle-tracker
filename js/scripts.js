var $ = function(id) { return document.getElementById(id); }


var lengtha = $("lengtha");
var lengthb = $("lengthb");
var lengthc = $("lengthc");
var trackerResult;

// var triangleSides = [$("lengtha"), $("lengthb"), $("lengthc")];
//THIS FUNCTION WILL RETURN THE RESULT OF THE TRACKER IN HTML
var display = function (){
  var lengtha = $("lengtha");
  var lengthb = $("lengthb");
  var lengthc = $("lengthc");
  var triangleSides = [lengtha.value, lengthb.value, lengthc.value];

  //CONTROL OF INPUTTED LENGTHS TO BE VALID NUMBERS
  var validLength = false;
  for (var indexArray = 0; indexArray < triangleSides.length; indexArray++) {
    if (isNaN(triangleSides[indexArray]) === false){
         validLength = true;
     } else if (triangleSides[indexArray] > 0){
         validLength = true;
     } else {
         validLength = false;
     }
    }
  }
  //end of for loop (end of control valid numbers)

  

$("text_where").innerHTML = trackerResult;
// }
// closing bracket of display() function

// for (var notNumber = true; notNumber === true;) {
//     var countBy = prompt("Enter a number to count by:");
//  var testCountBy = parseInt(countBy);
//  if (isNaN(testCountBy) === true){
//      notNumber = true;
//  } else if (testCountBy <= 0){
//      notNumber = true;
//  } else {
//      notNumber = false;
//  }
// }
