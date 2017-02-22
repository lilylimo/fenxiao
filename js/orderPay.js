/*
 * 分销项目-服务详情js
 */

//切换支付方式
$(".payWay p").on("tap",function(){
	$(".payWay p").removeClass("cur");
	$(this).addClass("cur");
})

//点击加减按钮数字变化
$("#prdNum cite").on("tap",function(){
	var prdNum=$("#prdNum b").text();
	var topNum=$("#topNum").text();
	if($(this).hasClass("jian")){
		if(prdNum>0){
			prdNum--;
			$("#prdNum b").text(prdNum);
			$("#topNum").text(prdNum);
		}else{
			$("#prdNum b").text("0");
			$("#topNum").text("0");
			$(this).addClass("hidden");
		}
	}else{
		prdNum++;
		$("#prdNum b").text(prdNum);
		$("#topNum").text(prdNum);
		if(prdNum>0){
			$("#prdNum .jian").removeClass("hidden");
		}
	}
	
})

//打开弹层方法
function openCPop(id){
	$(".centerBg").fadeIn();
	$("#"+id).fadeIn();
}
//关闭弹层方法
function closeCPop(){
	$(".centerBg").fadeOut();
	$(".codePop").fadeOut();
}
//点击亲密代付 打开弹层
$("#openCode").on("tap",function(){
	openCPop("codePop");
});
//点击背景 关闭弹层
$(".centerBg").on("tap",function(){
	closeCPop();
});
