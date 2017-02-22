/*
 * 分销项目-我的代言人js
 */

//页面加载后
$(document).ready(function(){
	//搜索框样式变换
	$("#agentName").on("focus",function(){
		$(this).css("text-align","left");
		$("#search").css("left","initial").css("right","10px");
	})
	$("#agentName").on("blur",function(){
		$(this).css("text-align","center");
		$("#search").css("left","30%").css("right","initial");
	})
	
})

function pullDownAction(){
	console.log("上拉加载")
}








