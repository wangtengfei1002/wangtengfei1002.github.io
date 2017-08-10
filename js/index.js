$(function () {
	window.onscroll=function(){
		var top=$(document).scrollTop();
		// 导航
        if(top<800){
            $("nav").fadeOut(1000);
        }else if(top>800) {
            $("nav").fadeIn(1000);
        }
        // 斗鱼
		if(top<600||top>1500){
            $(".fish").fadeOut(1000);
		}else{
            $(".fish").fadeIn(1000);
        }
        // 梅花
        if(top<1700||top>2500){
            $(".plum").fadeOut(1000);
        }else{
            $(".plum").fadeIn(1000);
        }
        // 竹
        if(top<2500){
            $(".leaf").fadeOut(1000);
        }else if(top>2800){
            $(".leaf").fadeIn(1000);
        }
	}


    function navBox() {
	    var btn=$(".ul_box>li>a")
        btn.each(function (i) {
            $(this).click(function () {
                $(".ul_box li").removeClass('hover1').find("a").css({color:'#000'});
                $(this).parent().addClass('hover1').end().css({color:'#fff'});
                animate(document.body,{scrollTop:$(".floor")[i].offsetTop}, 500);

            })

        })
        $(window).scroll(function(){
            $(".ul_box li").removeClass('hover1').find("a").css({color:'#000'});
        });

    }
    navBox();

})