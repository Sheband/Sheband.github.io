$(document).ready(function(){
	$(".burger").click(function(event){
		$(".nav1, .burger").toggleClass("active");
	});
	$(".slider").slick({
		arrows: true,
		dots: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		speed: 4000,
		easing: "easein",
		infinite:true,
		variableWidth: true,
	});
});
