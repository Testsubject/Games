// Navbar effect
$(window).on("scroll", function() {
  if($(window).scrollTop()) {
    $('nav').addClass('black');
  }
  else {
    $('nav').removeClass('black');
  }
});

// Smooth scrolling to anchor
const headerHeight = $(".menu").height() + 30;

$('a').click(function(){
  $('html, body').animate({
      scrollTop: $( $.attr(this, 'href') ).offset().top - headerHeight
  }, 400);
  return false;
});
