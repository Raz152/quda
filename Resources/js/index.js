$(document).ready(function () {
	// STICKY MENU JS
	$(window).scroll(function () {
		if ($(this).scrollTop() > 650) {
			$('nav').addClass('sticky');
		} else {
			$('nav').removeClass('sticky');
		}
	});

	//wow init
	new WOW().init();

	//ISOTOPE FILTER JS INIT
	var $grid = $('.containt').isotope({});

	$('.portfolio-filter').on('click', 'button', function () {
		var filterValue = $(this).attr('data-filter');
		$grid.isotope({ filter: filterValue });
	});

	$('.portfolio-filter button').click(function () {
		$(this).addClass('active');
		$(this).siblings().removeClass('active');
	});

	// mobile-menu
	$('.menu-list li').click(function () {
		$(this).parents('.navbar-collapse').removeClass('show');
	});
	// smooth scroll for all browser
	$('a').click(function (event) {
		if (this.hash !== '') {
			event.preventDefault();
			let hash = this.hash;
			$('html,body').animate({ scrollTop: $(hash).offset().top }, 2000, function () {
				window.location.hash = hash;
			});
		}
	});
});
