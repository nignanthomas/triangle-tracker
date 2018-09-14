var $ = function(id) { return document.getElementById(id); }


var lengtha = $("lengtha");
var lengthb = $("lengthb");
var lengthc = $("lengthc");

// var triangleSides = [$("lengtha"), $("lengthb"), $("lengthc")];

var display = function (){
  var lengtha = $("lengtha");
  var lengthb = $("lengthb");
  var lengthc = $("lengthc");
  var triangleSides = [lengtha.value, lengthb.value, lengthc.value];



};

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
