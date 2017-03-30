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
    return input;
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

    $("form").hide();
    $("#result").show();
  });

  //reload button function
  $("#reload").click(function(){
    location.reload();
  });


});
