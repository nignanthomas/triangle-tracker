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

  if (validLength === false) {
    trackerResult = "/!\\WARNING/!\\ \n PLEASE ENSURE THAT YOU ENTERED POSITIVE NUMBERS AND SUBMIT AGAIN!";
  } else {
      if (lengtha.value === lengthb.value && lengthb.value === lengthvc.value){
        trackerResult = "This is an equilateral triangle";
      } else if (lengtha.value + lengthb.value <= lengthc.value || lengthb.value + lengthc.value <= lengthb.value || lengtha.value +lengthc.value <= lengthb.value) {
          trackerResult = "This is not a triangle";
      } else {
        if (lengtha === lengthb || lengthb === lengthc || lengtha === lengthc) {
          trackerResult = "This is an isoscele triangle";
        } else {
          trackerResult = "This is a scalene triangle";
        }
      }
  }

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
