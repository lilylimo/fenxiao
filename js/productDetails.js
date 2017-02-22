/*
 * 分销项目-服务详情js
 */

//页面加载后
$(document).ready(function(){
	//
	
	
})

function pullDownAction(){
	console.log("上拉加载")
}

//初始化顶部轮播
var mySwiper = new Swiper ('.prdSlide', {
    direction: 'horizontal',
    autoplay: 3000,
    pagination: '.swiper-pagination',
})  

//电话咨询
$("body").on('tap','.callTel',function(){
	var telNumb = $(this).attr("data-tel");
	location.href=telNumb;
})

//打开商家自己上传的内容
$("#openLights").on("tap",function(){
	if($(this).hasClass("cur")){
		$(this).removeClass("cur");
		$(".uploadBox").addClass("hide");
	}else{
		$(this).addClass("cur");
		$(".uploadBox").removeClass("hide");
	}
})

//打开弹层方法
function openRPop(id){
	$(".rightpopBg").fadeIn();
	$("#"+id).animate({"right":"0"},500);
}
//关闭弹层方法
function closeRPop(){
	$(".rightpopBg").fadeOut();
	$(".rightPop").animate({"right":"-100%"},500);
}
//点击下箭头 打开弹层
$("#openStore").on("tap",function(){
	openRPop("storePop");
});
//点击背景 关闭弹层
$(".rightpopBg").on("tap",function(){
	closeRPop();
});



