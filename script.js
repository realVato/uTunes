// Nav bar

$(function() {
	menu = $('nav ul');

  $('#openup').on('click', function(e) {
    e.preventDefault(); menu.slideToggle();
  });
  
  $(window).resize(function(){
    var w = $(this).width(); if(w > 480 && menu.is(':hidden')) {
      menu.removeAttr('style');
    }
  });
  
  $('nav li').on('click', function(e) {                
    var w = $(window).width(); if(w < 480 ) {
      menu.slideToggle(); 
    }
  });
  $('.open-menu').height($(window).height());
});

// Smooth Scrolling

  $('.cf a').on('click', function(event) {
    if (this.hash !== '') {
      event.preventDefault();
  
      const hash = this.hash;
  
      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top
        },
        800,
        function() {
          window.location.hash = hash;
        }
      );
    }
  });
  


// #Entertainment, button toggle (mQuery)

$(function(){

  $('.btn-toggle').on('click', function() {
    $('.hide-on-toggle').fadeToggle(350);
  })

});

// Back to the top button

$(window).scroll(function() {

  // Button disappears while scrolling
  if (window.matchMedia("(max-width: 9000px)").matches) {
    $('#myBtn').hide();
  }

  if ($(this).scrollTop() > 50 ) {
      $('#myBtn').fadeIn(200);
  } else {
      $('#myBtn').fadeOut(200);
  }
});
$(function(){$("#myBtn").click(function(){$("html,body").animate({scrollTop:$("#showcase").offset().top},1000);})});

