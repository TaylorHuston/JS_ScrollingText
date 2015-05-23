$(document).ready(function scrollText() {
	
	
    $(".scrollingText").addClass("end");
    setTimeout(function() {
        $(".scrollingText").removeClass("end");
    },19800);
  
   setTimeout(scrollText, 20000);
});