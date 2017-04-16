jQuery(document).ready(function($){

	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 300,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		scroll_top_duration = 1500,
        header_offset = 70,
        navScrolled = "fix_top",
        $back_to_top = $('.to-top');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('is-visible') : $back_to_top.removeClass('is-visible fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('fade-out');
		}
	});

  $('[data-toggle="tooltip"]').tooltip({
  });
    
	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});

    // Smooth scroll down
  $('.hero_down > a, .nav_item > a').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, scroll_top_duration);
            return false;
          }
        }
    }); 
    
    /* General Navigation*/

    //primary navigation slide-in effect
    // Toggles the top-navs fixed and scroll state.
    var MQL = 800;

    if($(window).width() > MQL) {
      var headerHeight = $('.nav_header').height();
      $(window).on('scroll',
      {
            previousTop: 0
        }, 
        function () {
          var currentTop = $(window).scrollTop();
          //check if user is scrolling up
          if (currentTop < this.previousTop ) {
            //if scrolling up...
            if (currentTop > 0 && $('.nav_header').hasClass('is-fixed')) {
              $('.nav_header').addClass('is-visible');
            } else {
              $('.nav_header').removeClass('is-visible is-fixed');
            }
          } else {
            //if scrolling down...
            $('.nav_header').removeClass('is-visible');
            if( currentTop > headerHeight && !$('.nav_header').hasClass('is-fixed')) $('.nav_header').addClass('is-fixed');
          }
          this.previousTop = currentTop;
      });
    }
        
        //open/close primary navigation
    $('.primary-nav-trigger').on('click', function(){
        event.stopPropagation();
        $('.menu-icon').toggleClass('is-clicked');
        $('.menu_collapse').toggleClass('menu-is-open');
        $('.menu_collapse').toggleClass('is-active');
      });

});

// Show and hide password, user login
var visualTrigger = $('#show-pass');
var pwd_input = $('.user_pass');
visualTrigger.click(function () {
    if (pwd_input.attr("type")=="password") {
        pwd_input.attr("type", "text");
    } else{
        pwd_input.attr("type", "password");
    }
});

/*Responsive Main nav script*/

$(function() {
   var  sidebar = $('.nav_sidebar'),
		sidebarTrigger = $('.nav_trigger');

    $('[data-toggle="tooltip"]').tooltip({
    });
        
    //open/close primary navigation
    sidebarTrigger.on('click', function(event){
        event.preventDefault();
		$([sidebar, sidebarTrigger]).toggleClass('nav-is-visible');
    });

});