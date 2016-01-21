$(document).ready(function(){
	var swiper = new Swiper('#p_swiper_banner .swiper-container', {
		pagination: '#p_swiper_banner .swiper-pagination',
		paginationClickable: true,
		loop: true,
		spaceBetween: 0
	});

	var swiper02 = new Swiper('#p_swiper_contents .swiper-container', {
		pagination: '#p_swiper_contents .swiper-pagination',
		paginationClickable: true,
		nextButton: '#p_swiper_contents .swiper-button-next',
		prevButton: '#p_swiper_contents .swiper-button-prev',
		loop: true,
		spaceBetween: 0
	});

	var swiper03 = new Swiper('#p_swiper_goods .swiper-container', {
		pagination: '#p_swiper_goods .swiper-pagination',
		paginationClickable: true,
		spaceBetween: 10
	});
	
	var pm_swiper = new Swiper('#p_swiper_promotion .swiper-container', {
		slidesPerView: 'auto',
		spaceBetween: 10,
		freeMode: true
	});
});