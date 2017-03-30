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

}




// -----User Logic-----
$(function() {

  $("form").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("#userInput").val());
    console.log(userInput);

    var test1 = isNotTooBig(userInput);
    if(test1 === false){
      $(".alert").append("<li> Your number is too large. Try again. </li>")
      $("p").hide();
    }

    var test2 = isInThousands(userInput);
    console.log("this is what's left after subtracting thous: " + test2);
    console.log("this is our roman numn: " + romanNumeral);

    var test3 = isInFiveHundreds(test2);
    console.log("this is what's left after subtracting 500: " + test3);
    console.log("this is our roman numn: " + romanNumeral);

    var test4 = isInHundreds(test3);
    console.log("this is what's left after subtracting hundreds: " + test4);
    console.log("this is our roman numn: " + romanNumeral);

    var test5 = isInTens(test4);
    console.log("this is what's left after subtracting tens: " + test5);
    console.log("this is our roman numn: " + romanNumeral);

    var test6 = isInFives(test5);
    console.log("this is what's left after subtracting fives: " + test6);
    console.log("this is our roman numn: " + romanNumeral);

    var test7 = isInTheOnes(test6);
    console.log("this is what's left after subtracting ones: " + test7);
    console.log("this is our roman numn: " + romanNumeral);

    $("form").hide();
    $("#result").show();
  });

  //reload button function
  $("#reload").click(function(){
    location.reload();
  });


});
