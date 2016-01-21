$(document).ready(function(){
	wh = $(window).height();

	if (wh < 625){
		$("#p_template").css({"height":625})
		$("#p_swiper_banner").css({"top":16,"marginTop":0})

		$("#p_footer").fadeIn(300);
	} else {
		$("#p_template").css({"height":wh})

		$("#p_swiper_banner").css({"top":"50%","marginTop":"-288.5px"})

		$("#p_footer").fadeOut(300);
	}

	if ($(".swiper-slide" ).find(".swiper-container").hasClass("inner") != true){
		var totalIndex = $(".swiper-slide").length;
	} else {
		var totalIndex = $(".swiper-slide").length-1;
	}

	$(".swiper-navigation").find("em").html(totalIndex);

	var swiper = new Swiper('#p_swiper_banner .swiper-container.outer', {
		paginationClickable: true,
		spaceBetween: 0,
		preloadImages: false,
		lazyLoading: true,
		onReachBeginning (swiper){
			$("#p_swiper_banner").css({"width":"690px"});
		},
		onSlideNextStart(swiper){
			$("#p_swiper_banner").css({"width":"345px"});
		},
		onTouchEnd: function(swiper){
			$(".swiper-navigation").find("strong").html(swiper.activeIndex+1);
		},
		onSlideChangeEnd: function(swiper){
			$(".swiper-navigation").find("strong").html(swiper.activeIndex+1);
			
			if (swiper1 == undefined || null){
				
			} else {
				swiper1.detachEvents();
				$(".inner .swiper-wrapper").css({"transform":"translate3d(0px, 0px, 0px)"});
			}
		}
	});

	var swiper1;

	$(".inner .swiper-slide").click(function(){
		swiper1 = new Swiper('.swiper-container.inner', {
			freeMode: true,
			slidesPerView: 'auto',
			nested: true,
			preloadImages: false,
			lazyLoading: true,
		});
	})

	$("#p_pagesmap .p_btn_close").click(function(){
		$("#p_swiper_banner").animate({"opacity":1},300);

		$("#p_pagesmap_area").fadeOut(300);
		if (wh < 625){
		} else {
			$("#p_footer").fadeOut(300);
		}

		$("#p_pagesmap").animate({"top":"200%"},300);

		return false;
	});
	$(".swiper-navigation").click(function(){
		$("#p_swiper_banner").animate({"opacity":0},300);

		$("#p_pagesmap_area").fadeIn(300);
		$("#p_footer").fadeIn(300);


		$("#p_pagesmap").animate({"top":"50%"},300);

		return false;
	});
});

$(window).resize(function(){
	wh = $(window).height();

	if (wh < 625){
		$("#p_template").css({"height":625})
		$("#p_swiper_banner").css({"top":16,"marginTop":0})

		$("#p_footer").fadeIn(300);
	} else {
		$("#p_template").css({"height":wh})

		$("#p_swiper_banner").css({"top":"50%","marginTop":"-288.5px"})

		$("#p_footer").fadeOut(300);
	}
});