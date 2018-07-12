let $whiteicon = $(".whiteicon");
let $blackicon = $(".blackicon");

$whiteicon.hide();
$blackicon.show();
$(document).ready(function() {


  $(".blackicon").on("mouseover", function() {
    $blackicon.hide();
    $whiteicon.show();

  }); //end of mouseover function

)}; //end of document function tag
