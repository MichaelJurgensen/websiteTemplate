

$(document).ready(function()
{
	var slider = $('.content_slider').bxSlider(
	{
		adaptiveHeight: true,
		adaptiveWidth: true,
		auto: true,
		stopAuto: true,

		slideWidth: 480,
		minSlides: 1,
		maxSlides: 1,
		slideMargin: 10,

		mode: 'fade'

	});
	
	
});


$(window).resize(function(e){
   $('.content_slider').reloadShow();
});




