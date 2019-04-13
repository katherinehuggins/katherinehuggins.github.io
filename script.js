// A $( document ).ready() block.
$( document ).ready(function() {
  console.log( "ready!" );

  $("h1").on("mouseenter", function() {
    $("h1").text("Welcome!").addClass("blue");
  });

  $("h1").on("mouseleave", function() {
    $("h1").text("Katherine Huggins").removeClass("blue");
  });

});
