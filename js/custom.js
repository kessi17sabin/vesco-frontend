/*==========================================
		animation services
==========================================*/

$(function(){
	new WOW().init();	
});

/*==========================================
		magnific popup
==========================================*/

$(function(){
	$("#work").magnificPopup({
		delegate: 'a', // child items selector, by clicking on it popup will open
  		type: 'image',
  		gallery:{
    				enabled:true
  				}
	});
});

/*==========================================
		team-members carousel
==========================================*/

$(function(){
	$("#team-members").owlCarousel({
		items: 3,
		autoplay: true,
		smartSpeed: 700,
		loop: true,
		autoplayHoverPause:true,
		responsive : {
		    // breakpoint from 0 up
		    0 : {
		       items: 2 
		    },

		   480 : {
		      items: 2
		    },
		    // breakpoint from 768 up
		    768 : {
		        items: 2
		    },
		    // breakpoints from 992 up
		    992 : {
		    	items: 3
		    }
		}
	});
});

/*==========================================
		testimonial carousel
==========================================*/

$(function(){
	$("#customers-testimonials").owlCarousel({
		items: 1,
		autoplay: true,
		smartSpeed: 700,
		loop: true,
		autoplayHoverPause:true
	});
});

/*==========================================
		stats
==========================================*/

$(function(){
	 $('.counter').counterUp({
	 	 delay: 10,
         time: 2000
	 });
});

/*==========================================
		clients
==========================================*/

$(function(){
	$("#clients").owlCarousel({
		items: 6,
		autoplay: true,
		smartSpeed: 700,
		loop: true,
		autoplayHoverPause:true,
		responsive : {
		    // breakpoint from 0 up
		    0 : {
		       items: 1 
		    },
		    // breakpoint from 480 up
		    480 : {
		      items: 3
		    },
		    // breakpoint from 768 up
		    768 : {
		        items: 5
		    },
		    // breakpoints from 992 up
		    992 : {
		    	items: 6
		    }	

		}
	});
});

/*==========================================
		Navigation
==========================================*/

$(function(){
	$(window).scroll(function(){
		if ($(this).scrollTop() < 50) {
			/*hide nav*/
			$("nav").removeClass("vesco-top-nav");
			$("#back-to-home").fadeOut();
		}
		else{
			/*show nav*/
			$("nav").addClass("vesco-top-nav");
			$("#back-to-home").fadeIn();
		}
	});

});

/*==========================================
		smooth scroll
==========================================*/

$(function(){
	$("a.smooth-scroll").click(function(event){
		event.preventDefault();

		//get id like home,services,about etc
		var section = $(this).attr("href");

		$('html,body').animate({
			scrollTop: $(section).offset().top - 64 
		},1250, "easeInOutExpo");
	});
});

/*==========================================
		collapse on click
==========================================*/

$(function(){
	$(".navbar-collapse ul li a").on("click", function(){
		$(".navbar-toggle").click();
	});
});