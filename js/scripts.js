// -----Business Logic-----

//Function 1: Alert if you don't put in a good #
var romanNumeral = "";

var isNotTooBig = function(input){
  if(input > 3999){
    return false;
  };
}

var isInThousands = function(input){
  if (input/1000 >= 1){
    var m = Math.floor(input/1000);
    input -= (m * 1000);
    console.log(input);
    for(var i = 0; i < m; i++){
      romanNumeral += "M";
    }
  }
  return input;
}

var isInFiveHundreds = function(input){
  if (input/500 >= 1) {
    input -= 500;
    romanNumeral += "D";
  }
  return input;
}

var isInHundreds = function(input){
  if (input/100 >= 1){
    var c = Math.floor(input/100);
    input -= (c * 100);
    for(var i = 0; i < c; i++){
      romanNumeral += "C";
    }
  }
  return input;
}

var isInFifties = function(input){
  if (input/50 >= 1) {
    input -= 50;
    romanNumeral += "L";
  }
  return input;
}

var isInTens = function(input){
  if (input/10 >= 1){
    var x = Math.floor(input/10);
    input -= (x * 10);
    for(var i = 0; i < x; i++){
      romanNumeral += "X";
    }
  }
  return input;
}

var isInFives = function(input){
  if (input/5 >= 1) {
    input -= 5;
    romanNumeral += "V";
  }
  return input;
}

var isInTheOnes = function(input){
  for(var i = 0; i < input; i++){
    romanNumeral += "I";
  }
  return 0;
}

var isFourIs = function(input) {
  //for the fours
  if ((input.indexOf("IIII") >= 0) && (input.indexOf("V") < 0)) {
    romanNumeral = input.replace(/I{4}/g, "IV");
  }
  //for the nines
  if ((input.indexOf("IIII") >= 0) && (input.indexOf("V") >= 0)){
    romanNumeral = input.replace(/VI{4}/g, "IX");
  }
  return romanNumeral;
}

var isFourXs = function(input) {
  //for forties
  if((input.indexOf("XXXX")>=0) && (input.indexOf("L") < 0)){
    romanNumeral = input.replace(/X{4}/g, "XL");
  }
  //for nineties
  if((input.indexOf("XXXX")>=0) && (input.indexOf("L") >= 0)){
    romanNumeral = input.replace(/LX{4}/g, "XC");
  }
  return romanNumeral;
}

var isFourCs = function(input) {
  //for fourHundreds
  if((input.indexOf("CCCC")>=0) && (input.indexOf("D") < 0)){
    romanNumeral = input.replace(/C{4}/g, "CD");
  }
  //for nineHundreds
  if((input.indexOf("CCCC")>=0) && (input.indexOf("D") >= 0)){
    romanNumeral = input.replace(/DC{4}/g, "CM");
  }
  return romanNumeral;
}




// -----User Logic-----
$(function() {

  $("form").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("#userInput").val());

    var test1 = isNotTooBig(userInput);
    if(test1 === false){
      $(".alert").append("<li> Your number is too large. Try again. </li>")
      $("p").hide();
    }

    var messyRomanNumeral = isInTheOnes(isInFives(isInTens(isInFifties(isInHundreds(isInFiveHundreds(isInThousands(userInput)))))));

    messyRomanNumeral = isFourIs(romanNumeral);
    messyRomanNumeral = isFourXs(romanNumeral);
    messyRomanNumeral = isFourCs(romanNumeral);

    $("#romanResult").text(romanNumeral);

    // var test2 = isInThousands(userInput);
    // console.log("this is what's left after subtracting thous: " + test2);
    // console.log("this is our roman numn: " + romanNumeral);
    //
    // var test3 = isInFiveHundreds(test2);
    // console.log("this is what's left after subtracting 500: " + test3);
    // console.log("this is our roman numn: " + romanNumeral);
    //
    // var test4 = isInHundreds(test3);
    // console.log("this is what's left after subtracting hundreds: " + test4);
    // console.log("this is our roman numn: " + romanNumeral);
    //
    // var test5 = isInFifties(test4);
    // console.log("this is what's left after subtracting hundreds: " + test5);
    // console.log("this is our roman numn: " + romanNumeral);
    //
    //
    // var test6 = isInTens(test5);
    // console.log("this is what's left after subtracting tens: " + test6);
    // console.log("this is our roman numn: " + romanNumeral);
    //
    // var test7 = isInFives(test6);
    // console.log("this is what's left after subtracting fives: " + test7);
    // console.log("this is our roman numn: " + romanNumeral);
    //
    // var test8 = isInTheOnes(test7);
    // console.log("this is what's left after subtracting ones: " + test8);
    // console.log("this is our roman numn: " + romanNumeral);




    $("form").hide();
    $("#result").show();
  });

  //reload button function
  $("#reload").click(function(){
    location.reload();
  });


});
