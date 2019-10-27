var open = false;

$(".navbutton").click(function(){
  console.log("succes");
  $(".navbutton__line--1").toggleClass("move-down");
    $(".navbutton__line--2").toggleClass("display-toggle");
      $(".navbutton__line--3").toggleClass("move-up");

  if(open === false){
    open = true;
  }

  else{ open = false;}

  console.log(open);

$(".navbutton--1").toggleClass("navtainer");
$(".navbutton__background").toggleClass("opacity-toggle");
$(".header__brand").toggleClass("opacity-toggle");
});
