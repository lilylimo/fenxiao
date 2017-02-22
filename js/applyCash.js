/*
 * 分销项目-申请提现js
 */

//页面加载后
$(document).ready(function(){
	//
	
	
})

function pullDownAction(){
	console.log("上拉加载")
}
//打开弹层方法
function openDPop(id){
	$(".popBg").fadeIn();
	$("#"+id).animate({"bottom":"0px"},500);
}
//关闭弹层方法
function closeDPop(){
	$(".popBg").fadeOut();
	$(".downPop").animate({"bottom":"-100%"},500);
}
//点击问号 打开弹层
$("#explain").on("tap",function(){
	openDPop("applyTip");
});
//点击提现到账 打开弹层
$("#openWay").on("tap",function(){
	openDPop("applyWay");
});
//点击背景 关闭弹层
$(".popBg").on("tap",function(){
	closeDPop();
});
//点击关闭 关闭弹层
$(".closedPop").on("tap",function(){
	closeDPop();
});
//点支付方式弹层 切换效果
$("#applyWay p").on("tap",function(){
	$(this).addClass("cur").siblings().removeClass("cur");
	$("#openWay").html($(this).find("span").html());
});






