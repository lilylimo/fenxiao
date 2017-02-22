/*
 * 分销项目-分销订单js
 */

//页面加载后
$(document).ready(function(){
	//
	
	
})
var orderIndex="";
$(".orderHeard").on("tap","li",function(){
	orderIndex = $(this).index();
	$(this).addClass("active").siblings("li").removeClass("active");
})


function pullDownAction(){
	if(Upcount < count){
		mui.later(function() {  
			dataload();
	    }, 1500); 
   }else{
   		pullUpSuccess();
   }
}











