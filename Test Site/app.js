//Menu Toggle
$(document).ready(function() {
  $(".menu-icon").on("click", function() {
    $("nav ul").toggleClass("showing");
  });
});

// Scrolling Effect

$(window).on("scroll", function() {
  if($(window).scrollTop()) {
    $('nav').addClass('black');
  }
  else {
    $('nav').removeClass('black');
  }
});

// Smooth Scrolling
$('a').click(function(){
  $('html, body').animate({
      scrollTop: $( $.attr(this, 'href') ).offset().top
  }, 400);
  return false;
});
