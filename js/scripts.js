// -----Business Logic-----

//Function 1: Alert if you don't put in a good #

var isNotTooBig = function(input){
  if(input > 3999){
    return false;
  } else{
    return true;
  }
}








// -----User Logic-----
$(function() {

  $("form").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("#userInput").val());
    console.log(userInput);

    var test1 = isNotTooBig(userInput);
    console.log("The number is not too big: " + test1);
    if(test1 === false){
      $(".alert").append("<li> Your number is too large. Try again. </li>")
      $("p").hide();
    }

    $("form").hide();
    $("#result").show();
  });

  //reload button function
  $("#reload").click(function(){
    location.reload();
  });


});
