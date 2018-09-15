var $ = function(id) { return document.getElementById(id); }


//THIS FUNCTION WILL RETURN THE RESULT OF THE TRACKER IN HTML
var display = function (){

  var lengtha = $("lengtha");
  var lengthb = $("lengthb");
  var lengthc = $("lengthc");
  var validLength = 1;
  var trackerResult = " ";

  var triangleSides = [lengtha.value, lengthb.value, lengthc.value];

  var lengtha = parseInt(triangleSides[0]);
  var lengthb = parseInt(triangleSides[1]);
  var lengthc = parseInt(triangleSides[2]);

   //CONTROL OF INPUTTED LENGTHS TO BE VALID NUMBERS
  var validLength = 1;
  for (var indexArray = 0; indexArray < triangleSides.length; indexArray++) {
    if (isNaN(triangleSides[indexArray]) === false && triangleSides[indexArray] > 0){
         validLength *= 1;
     } else {
         validLength *= 0;
     }
    }
//   //end of for loop (end of control valid numbers)
//

//
//
  var triangleTracker = function(lengtha, lengthb, lengthc) {
    if (lengtha>=(lengthb + lengthc) || lengthb>=(lengtha + lengthc) || lengthc>=(lengtha + lengthb)){
      trackerResult = "These lengths don't make a triangle.";
    }else if (lengtha === lengthb && lengthb === lengthc){
      trackerResult = "This is an equilateral triangle.";
    }else if (lengtha != lengthb && lengthb != lengthc && lengtha != lengthc){
      trackerResult = "This is a scalene triangle.";
    }else {
      trackerResult = "This is an isosceles triangle.";
    };
  };
//
  //sub-tracker control flow
  if (validLength === 0) {
    trackerResult = "/!\\WARNING/!\\ \n INVALID NUMBERS --- SUBMIT AGAIN!";
  } else {
    triangleTracker(lengtha, lengthb, lengthc);
  }
//end of sub-tracker control flow

console.log(validLength);
console.log("1 = valid number / 0 = invalid");
console.log(trackerResult);
  $("text_where").innerHTML = trackerResult;
};
