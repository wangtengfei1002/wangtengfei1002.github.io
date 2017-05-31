"use strict"
//窗口加载完成后执行一段程序
window.onload=function(){
	var designwidth=375;/*定义设计尺寸*/

	function fontSize(){
		/*设置尺寸 文档的宽度*/
		var CW=document.documentElement.clientWidth;
		/*console.logo(CW);  输出文档的宽度*/
		var size=CW/designwidth*100+"px";
		/*设备的尺寸/设计尺寸*100 加上单位*/
		document.querySelector("html").style.fontSize=size;
		/*设置html的font-size*/
	}
/*运行函数*/
fontSize();
window.onresize=fontSize;
/*监测窗口尺寸是否发生变化*/
}