$(document).ready(function() {
	
	/* nav dropdown menu */
	if ($(window).width() > 768) {
		$('#navbar .nav').removeClass('animated bounceInDown');
		$('ul.nav li.dropdown').hover(function() {
			//$(this).find('.dropdown-menu').stop(true, true).fadeIn();
			//$(this).find('.dropdown-menu').stop(true, true).slideDown();
			$(this).find('.dropdown-menu').removeClass('animated flipOutY').addClass('animated rubberBand');
			$(this).addClass('open');
		}, function() {
			//$(this).find('.dropdown-menu').stop(true, true).fadeOut();
			//$(this).find('.dropdown-menu').stop(true, true).slideUp();
			//$(this).find('.dropdown-menu').removeClass('animated flipInY').addClass('animated flipOutY');
			$(this).removeClass('open');
		});
	} else {
		$('#navbar .nav').addClass('animated bounceInDown');
	}
	
	/* remove focus from bootstrap btn */
	$('.btn').focus(function(event) {
		event.target.blur();
	});

	$('#header h1').hover(function(event) {
		$(this).addClass('animated rubberBand');
	}, function(){
		$(this).removeClass('animated rubberBand');
	});

	/* remove empty p tag */
	$('p').each(function() {
		var $this = $(this);
		if ($this.html().replace(/\s|&nbsp;/g, '').length == 0)
			$this.remove();
	});

	/* remove error image */
	$("img").error(function () { 
    	$(this).hide(); 
	});
	
	/* window scroll */
	// $fn.scrollSpeed(step, speed, easing);
	jQuery.scrollSpeed(100, 600);
	
	/* disable right click */
	$(document).on("contextmenu", function(e) {
		e.preventDefault();
	});

	/* disable developer mode (f12) */
	$(document).keydown(function(event) {
		if (event.keyCode == 123) {
			return false;
		} else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
			return false;
			//Prevent from ctrl+shift+i
		}
	});
	
});