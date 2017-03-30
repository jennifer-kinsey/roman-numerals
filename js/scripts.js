// -----Business Logic-----

//Function 1: Alert if you don't put in a good #
var romanNumeral = "";

var isNotTooBig = function(input){
  if(input > 3999){
    return false;
  } else{
    return true;
  }
}

var isInThousands = function(input){
  if (input/1000 >= 1){
    var m = Math.floor(input/1000);
    input = input - (m * 1000);
    console.log(input);
    for(var i = 0; i < m; i++){
      romanNumeral = romanNumeral + "M";
    }
  }
  return input;
}

var isInFiveHundreds = function(input){
  if (input/500 >= 1) {
    input = input - 500;
    romanNumeral = romanNumeral + "D";
  }
  return input;
}

var isInHundreds = function(input){
  if (input/100 >= 1){
    var c = Math.floor(input/100);
    input = input - (c * 100);
    for(var i = 0; i < c; i++){
      romanNumeral = romanNumeral + "C";
    }
  }
  return input;
}

var isInFifties = function(input){
  if (input/50 >= 1) {
    input = input - 50;
    romanNumeral = romanNumeral + "L";
  }
  return input;
}

var isInTens = function(input){
  if (input/10 >= 1){
    var x = Math.floor(input/10);
    input = input - (x * 10);
    for(var i = 0; i < x; i++){
      romanNumeral = romanNumeral + "X";
    }
  }
  return input;
}

var isInFives = function(input){
  if (input/5 >= 1) {
    input = input - 5;
    romanNumeral = romanNumeral + "V";
  }
  return input;
}

var isInTheOnes = function(input){
  for(var i = 0; i < input; i++){
    romanNumeral = romanNumeral + "I";
  }
  return 0;
}




// -----User Logic-----
$(function() {

  $("form").submit(function(event) {
    event.preventDefault();
    var originalInput = $("#userInput").val();
    var userInput = parseInt(originalInput);
    console.log(userInput);

    var test1 = isNotTooBig(userInput);
    if(test1 === false){
      $(".alert").append("<li> Your number is too large. Try again. </li>")
      $("p").hide();
    }

    console.log(originalInput + ": this is what we typed in");

    var test2 = isInThousands(userInput);
    console.log("this is what's left after subtracting thous: " + test2);
    console.log("this is our roman numn: " + romanNumeral);

    var test3 = isInFiveHundreds(test2);
    console.log("this is what's left after subtracting 500: " + test3);
    console.log("this is our roman numn: " + romanNumeral);

    var test4 = isInHundreds(test3);
    console.log("this is what's left after subtracting hundreds: " + test4);
    console.log("this is our roman numn: " + romanNumeral);

    var test5 = isInFifties(test4);
    console.log("this is what's left after subtracting hundreds: " + test5);
    console.log("this is our roman numn: " + romanNumeral);


    var test6 = isInTens(test5);
    console.log("this is what's left after subtracting tens: " + test6);
    console.log("this is our roman numn: " + romanNumeral);

    var test7 = isInFives(test6);
    console.log("this is what's left after subtracting fives: " + test7);
    console.log("this is our roman numn: " + romanNumeral);

    var test8 = isInTheOnes(test7);
    console.log("this is what's left after subtracting ones: " + test8);
    console.log("this is our roman numn: " + romanNumeral);

    var isFourIs = function(input) {
      //for the ones place
      if (originalInput.charAt(originalInput.length - 1) === "4"){
        romanNumeral = romanNumeral.substring(0, romanNumeral.length -4) + "IV";
      }
      if (originalInput.charAt(originalInput.length - 1) === "9"){
        romanNumeral = romanNumeral.substring(0, romanNumeral.length -4) + "IX";
      }
      return romanNumeral;
    }

    var isFourXs = function(input) {
      //for forties
      if((romanNumeral.indexOf("XXXX")>=0) && (romanNumeral.indexOf("L") < 0)){
        romanNumeral.replace(/X{4}/g, "XL");
      }
      //for nineties
      if((romanNumeral.indexOf("XXXX")>=0) && (romanNumeral.indexOf("L") >= 0)){
        romanNumeral.replace(/X{4}/g, "XC");
      }
      return romanNumeral;
    }

    var test9 = isFourIs(originalInput);
    console.log("this is what's going on if it ends in a 4 or 9: " +  test9);

    var test10 = isFourXs(romanNumeral);
    console.log("40s and 90s ought to work: " + test10);

    $("form").hide();
    $("#result").show();
  });

  //reload button function
  $("#reload").click(function(){
    location.reload();
  });


});
