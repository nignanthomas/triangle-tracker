var $ = function(id) { return document.getElementById(id); }

// var validLength = false;
// var trackerResult = " ";


//THIS FUNCTION WILL RETURN THE RESULT OF THE TRACKER IN HTML
var display = function (){

  var lengtha = $("lengtha");
  var lengthb = $("lengthb");
  var lengthc = $("lengthc");
  var validLength = false;
  var trackerResult = " ";

  var triangleSides = [lengtha.value, lengthb.value, lengthc.value];

  var lengtha = triangleSides[0];
  var lengthb = triangleSides[1];
  var lengthc = triangleSides[2];

//   //CONTROL OF INPUTTED LENGTHS TO BE VALID NUMBERS
//   var validLength = false;
//   for (var indexArray = 0; indexArray < triangleSides.length; indexArray++) {
//     if (isNaN(triangleSides[indexArray]) === false){
//          validLength *= true;
//      } else if (triangleSides[indexArray] > 0){
//          validLength *= true;
//      } else {
//          validLength = false;
//      }
//     }
//   //end of for loop (end of control valid numbers)
//
//   var isTriangle = function (lengtha, lengthb, lengthc) {
//     return (lengtha + lengthb > lengthc || lengthb + lengthc >lengtha || lengtha +lengthc > lengthb)
//   }
//
//
//   var triangleTracker = function(lengtha, lengthb, lengthc) {
//     if (!(isTriangle(lengtha, lengthb, lengthc))){
//       trackerResult = "This is not a triangle";
//     } else if (lengtha === lengthb && lengthb === lengthc){
//       trackerResult = "This is an equilateral triangle";
//     } else if (lengtha === lengthb || lengthb === lengthc || lengtha === lengthc) {
//       trackerResult = "This is an isoscele triangle";
//     } else {
//       trackerResult = "This is a scalene triangle";
//     }
//   }
//
//   //real tracker control flow
//   if (validLength === false) {
//     trackerResult = "/!\\WARNING/!\\ \n PLEASE ENSURE THAT YOU ENTERED POSITIVE NUMBERS AND SUBMIT AGAIN!";
//   } else {
//       triangleTracker();
//   }
// //end of tracker control flow

var triangle = function(lengtha, lengthb, lengthc){
  if (isTriangle(lengtha, lengthb, lengthc)) {
    return triangleType(lengtha, lengthb, lengthc)
  } else {
    trackerResult = "This is not a triangle";
  }
};

var triangleType = function(lengtha, lengthb, lengthc){
  if (lengtha===lengthb && lengthb===lengthc) {
    trackerResult = "This is an equilateral triangle";
  } else if (lengtha===lengthb || lengtha===lengthc || lengthc===lengthb) {
    trackerResult = "This is an isoscele triangle";
  } else {
    trackerResult = "This is a scalene triangle";
  }
};

var isTriangle = function(lengtha, lengthb, lengthc) {
  return lengtha <= (lengthb + lengthc) && lengthb <= (lengthc + lengtha) && lengthc <= (lengtha + lengthb)
};



triangle(lengtha, lengthb, lengthc);





console.log(trackerResult);
  $("text_where").innerHTML = trackerResult;
};
