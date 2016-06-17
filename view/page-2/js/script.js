
$('ul.nav li.dropdown').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
});

$(document).ready(function () {
    var carousel = $("#owl-demo");
  carousel.owlCarousel({
    navigation:true,
    navigationText: [
      "<i class='icon-chevron-left icon-white'><</i>",
      "<i class='icon-chevron-right icon-white'>></i>"
      ],
  });

  
});


$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});

// When the DOM is ready, run this function
$(document).ready(function() {
  //Set the carousel options
  $('#quote-carousel').carousel({
    pause: true,
    interval: 4000,
  });
});


  

