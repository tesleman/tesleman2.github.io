$(function() {

	$("#my-menu").mmenu({
		
		extensions: ["theme-dark", "position-right"],
		
		navbar:{
			title: '<img src="img/logosvgcom.png" alt="alt">'
		}
	
		

});
// var api = $('#my-menu').data('mmenu');
// api.bind('opened', function(){
// 	$('.hamburger') .addClass('is-active');
// })

function carouselServices(){
	$('.carousel-services-item').each(function(){
		var ths = $(this),
				thsh = ths.find('.carousel-services-content').outerHeight();
				ths.find('.carousel-services-image').css('min-height', thsh);
				
	});
}
$(".carousel-services").on('initialized.owl.carousel', function() {	
	setTimeout(function(){
		carouselServices()
	}, 100);
});

$(".carousel-services").owlCarousel({
	dots: false,
	nav: true,
	smartSpeed: 700,
	navText: ['<i class="fa fa-angle-double-left"></i>','<i class="fa fa-angle-double-right"></i>'],
	responsiveClass: true,
	responsive:{
		0:{
			items: 1
		},
		800:{
			items: 2
		},
		1100:{
			items: 3
		}

	}


});






$('.carousel-services-content').equalHeights();


$('.carousel-services-composition .h3').each(function(){
	var ths = $(this);
	ths.html(ths.html().replace(/(\S+)\s*$/, '<span>$1</span>'));
});


//	resizevindow
// function onResize(){
	
// }onResize();
// window.onResize = function(){onResize()};

$('section .h2').each(function(){
	var ths = $(this);
	ths.html(ths.html().replace(/^\W*([\w-]+)/, '<span>$1</span>'));
});

	$('select').niceSelect();
	//ajacs form
	$("form.callback").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(th).find('.success').addClass('active').css('display', 'flex').hiden().fadeIn();
			setTimeout(function() {
				$(th).find('.success').removeClass('active').fadeOut();
				// Done Functions
				th.trigger("reset");
			}, 3000);
		});
		return false;
	});
});

// $(window).on('load', function(){
	
// 	$('.preloader').delay(1000).fadeOut('slow');
	
// 	}
// 	)


