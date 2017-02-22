/*
 * 分销项目-会员说明js
 */

var swiper = new Swiper('.swiper-container', {
        slidesPerView: 5,
        paginationClickable: true,
        spaceBetween: 10,
        centeredSlides: true
    });
    
    //给时间流程滑动div赋值高
    function getTimeHeight(){
    	var width=$(".timeBox").css("width");
    	$(".timeBox").css("height",width);
    }
    $(document).ready(function(){
    	getTimeHeight();
    });
    $(window).resize(function(){
    	getTimeHeight();
    });

//页面加载后
$(document).ready(function(){
	//等级居中
//	$(".swiper-slide").removeClass("swiper-slide-active");
//	$(".mylevel").parent().addClass("swiper-slide-active");
//	alert($(".swiper-slide-active").previousSibling());
//alert($(".mylevel").parent().siblings().index());
	
})

//var myindex=$(".mylevel").parent().index();
//var 
//
//if(){
//	
//}


