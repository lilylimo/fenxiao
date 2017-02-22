/*
 * 分销项目-商品服务js
 */

//页面加载后
$(document).ready(function(){
	//获取头部滑动div宽度
	var mallwidth=$(".mallSlide .mui-scroll").css("width");
	$(".mallSlideBox").css("width",mallwidth);
	$(".mallBox .mallSlideBox").css("width","50%");
	
})

function pullDownAction(){
	console.log("上拉加载")
}


















