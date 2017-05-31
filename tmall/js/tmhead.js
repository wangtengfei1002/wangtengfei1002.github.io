'use strict';
$(function(){
	let ban=$('.banner')[0];
	let banne=$('.bnlbt')[0];
	let bnlbt=$('li',banne);
	let lbd=$('.bnlbd')[0];
	let bnlbd=$('li',lbd);
	bnlbt[0].style.zIndex=10;
	let t=setInterval(move,2000);
	let bnbj=$('.bnbj')[0];
	let index=0;
	for(let i=0;i<bnlbd.length;i++){
		bnlbd[i].onclick=function(){
			for(let i=0;i<bnlbd.length;i++){
				bnlbd[i].style.background='#b0b0b0';
				bnlbt[i].style.display='none'
			}
			bnlbt[i].style.display='block';
			bnlbd[i].style.background='#fff';
			index=i
		}
	}
	ban.onmouseover=function(){
		clearInterval(t)
	}
	ban.onmouseout=function(){
		t=setInterval(move,2000);
	}
	//轮播点控制banner
	function move(){
		index++;
		if(index==bnlbt.length){
			index=0;
		}
		for(let i=0;i<bnlbt.length;i++){
		bnlbt[i].style.display='none';
		bnlbd[i].style.background='#b0b0b0';
		}
		bnlbt[index].style.display='block';
		bnlbd[index].style.background='#fff';
	}
	
	
	//导航的轮播图
	let headjs1=$('.headjs1');
	for(let i=0;i<headjs1.length;i++){
		headjs1[i].onmouseover=function(){		
			headjs1[i].style.color='red';
		}
		headjs1[i].onmouseout=function(){
			headjs1[i].style.color='#b0b0b0'
		}
	}
	//移入文字变红色
	let headjs3=$('.headjs3');
	for(let i=0;i<headjs3.length;i++){
		let headjs3_1=$('a',headjs3[i])		
	for (let i=0;i<headjs3_1.length;i++){
		headjs3_1[i].onmouseover=function(){
			headjs3_1[i].style.color='red'
		}
		headjs3_1[i].onmouseout=function(){
			headjs3_1[i].style.color='#000'
		}
	}
	}
	//商家中心和网站导航移入变红
	let headjsback=$('.headjsback');
	let headjsxlk=$('.headjsxlk');
	for(let i=0;i<headjsback.length;i++){
		headjsback[i].onmouseover=function(){
			this.style.background='#fff';
			headjsxlk[i].style.display='block';
		}
		headjsback[i].onmouseout=function(){
			this.style.background='#F2F2F2';
			headjsxlk[i].style.display='none';
		}
	}
	
		let navjs1=$('.subnav2_1');
		for(let i=0;i<navjs1.length;i++){
			let navmt=$('.subnavmt');
			navjs1[i].onmouseover=function(){
				navmt[i].style.webkitTransform ='translate(0,-8px)';
			}
			navjs1[i].onmouseout=function(){
				navmt[i].style.webkitTransform ='translate(0,0)';
			}
		
	}
	//猫头
	let bnjszlz=$('.banner1')[0];
	let bnjszl=$('.banner1_1',bnjszlz);	
	for(let i=0;i<bnjszl.length;i++){
		let bnjszlk1=$('.banner2_1')	
		for(let i=0;i<bnjszlk1.length;i++){
			bnjszl[i].onmouseover=function(){
				bnjszlk1[i].style.display='block';
				bnjszl[i].style.background='#fff';				
	}
			}
			bnjszl[i].onmouseout=function(){
				bnjszlk1[i].style.display='none';
				bnjszl[i].style.background='#ECEDED';
			}
	}
	//banner左边的导航栏样式
				
		//banner左边的导航栏字体颜色
		let sbbnjs=$('.sbbnright1');
		for(let i=0;i<sbbnjs.length;i++){
			let sbbnjs1=$('.sbbnright1_1');
			for(let i=0;i<sbbnjs1.length;i++){
				sbbnjs[i].onmouseover=function(){
					sbbnjs1[i].style.opacity='0.95'
				}
				sbbnjs[i].onmouseout=function(){
					sbbnjs1[i].style.opacity='0';
				}
			}
		}
		//banner下面的品牌
		
		
		
		let cbl=$('.cbl1')[0];
		let cbl1_1=$('.cbl1_1');
		let cbl1_2=$('.cbl2_1');
		for(let i=0;i<cbl1_1.length;i++){
			cbl1_1[i].onmouseenter=function(){
				this.style.background='red';				
				cbl1_2[i].style.transform="translateX(35px)"
				cbl1_2[i].style.opacity='1'
			}
			cbl1_1[i].onmouseleave=function(){
				this.style.background='#000';
				cbl1_2[i].style.opacity='0'
				cbl1_2[i].style.transform="translateX(-35px)"
			}
		}
		
		
		let cbl1_1_2=$('.cbl1_2')[0];
		let cbl1_1_3=$('.cbl1_2_1');
		let cbl1_1_3i=$('.icongou')[0];
		cbl1_1_2.onmouseenter=function(){
			this.style.background='red'
			cbl1_1_3i.style.color='#fff'
		}
		cbl1_1_2.onmouseleave=function(){
			this.style.background='#000'
			cbl1_1_3i.style.color='red'
		}
	
	
	
	let dbflag=true;
			
	window.onscroll=function(){
		let dbtop=$('.chuxian')[0];
		let fixedleft=$('.fixedleft')[0];
		let dbtops=document.body.scrollTop;		
		if(dbtops>=760){
			if(dbflag){
				dbflag=!dbflag;
				dbtop.style.height='50px';
				fixedleft.style.height='325px';
				fixedleft.style.width='35px';
			}						
		}else if(dbtops<760){
			if(!dbflag){							
				dbflag=!dbflag;
				dbtop.style.height='0';
				fixedleft.style.height='0';
				fixedleft.style.width='0';
			}
		}
		let arr=[];
		let main2=document.querySelectorAll('.main2');
		let floor=document.querySelectorAll('.fli0');
		let ch=window.innerHeight;
		
		main2.forEach(function(value){
			arr.push(value.offsetTop)
		});	
		for(let i=0;i<arr.length;i++){
			let imgs=main2[i].querySelectorAll('img');
			if(document.body.scrollTop+ch>arr[i]+300){
				for(let j=0;j<imgs.length;j++){
					imgs[j]['src']=imgs[j]['title']
				}
					
				for(let j=0;j<floor.length;j++){
					floor[j].style.background='#626262';
				}
				if(i==0){
					floor[i].style.background='#EA5F8D';
				}
				if(i==1){
					floor[i].style.background='#0AA6E8';
				}
				if(i==2){
					floor[i].style.background='#64C333';
				}
				if(i==3){
					floor[i].style.background='#F15453';
				}
				if(i==4){
					floor[i].style.background='#19C8A9';
				}
				if(i==5){
					floor[i].style.background='#F7A945';
				}
				if(i==6){
					floor[i].style.background='red';
				}
			}
		}
		for(let i=0;i<arr.length;i++){
			
		
		floor[i].onclick=function(){
				document.body.scrollTop=arr[i]-150;
				for(let j=0;j<floor.length;j++){
					floor[j].style.background='#626262'
				}
				if(i==0){
					floor[i].style.background='#EA5F8D';
				}
				if(i==1){
					floor[i].style.background='#0AA6E8';
				}
				if(i==2){
					floor[i].style.background='#64C333';
				}
				if(i==3){
					floor[i].style.background='#F15453';
				}
				if(i==4){
					floor[i].style.background='#19C8A9';
				}
				if(i==5){
					floor[i].style.background='#F7A945';
				}
				if(i==6){
					floor[i].style.background='red';
				}
			}
		}
		
	}
	//左边固定栏   楼层加载
		
		
		
})







