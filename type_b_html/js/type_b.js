$(document).ready(function(){
	var sNum = $("#p_swiper_banner .swiper-slide").length;

	var swiper = new Swiper('#p_swiper_banner .swiper-container', {
		pagination: '#p_swiper_banner .swiper-pagination',
		paginationClickable: true,
		nextButton: '#p_swiper_banner .swiper-button-next',
		prevButton: '#p_swiper_banner .swiper-button-prev',
		spaceBetween: 200,
		loop: true,
		onSlideChangeEnd: function(swiper){
			//console.log(swiper.activeIndex);

			$(".p_list_goods").hide();
			if (swiper.activeIndex == 0){
				$("#p_list_goods0"+sNum).show();
			} else if (swiper.activeIndex > sNum){
				$("#p_list_goods01").show();
			} else {
				$("#p_list_goods0"+swiper.activeIndex).show();
			}
		}
	});

	var hashtag_swiper = new Swiper('#p_hashtag_area .swiper-container', {
		slidesPerView: 'auto',
		spaceBetween: 5,
		freeMode: true
	});

	var pm_swiper = new Swiper('#p_swiper_promotion .swiper-container', {
		spaceBetween: 5,
	});
});