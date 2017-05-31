'use strict';
$(function(){
	let balist=$('.bn')[0];		//banner框架
	let bn=$('.ban')[0];		//放banner的框
	let bnimg=$('img',bn);		//banner的五张图
	bnimg[0].style.zIndex=10;
	let current=0;				//当前
	let next=0;					//下一个
	let lbd=$('.lunbodian')[0];
	let bnlb=$('.lbd2');	//轮播点
	let left=$('.a2')[0];		//左箭头
	let right=$('.a3')[0];		//右箭头
	let flag=true;
	for(let i=0;i<bnimg.length;i++){
		if(i==0){
			continue;
		}
		bnimg[i].style.left='1226px'
	}
	let t;
	t=setInterval(move,2000);
	balist.onmouseenter=function(){
		clearInterval(t)
	}
	balist.onmouseleave=function(){
		t=setInterval(move,2000);
	}
	//移入banner时停止运动
	function move(){
		next++;
		if(next==bnimg.length){
			next=0;
		}
		bnimg[next].style.left='1226px';
		bnlb[next].classList.add('hot');
		bnlb[current].classList.remove('hot')
		animate(bnimg[next],{left:0});
		animate(bnimg[current],{left:-1226});
		current=next;
	}
	function movel(){
		next++;
		if(next==bnimg.length){
			next=0;
		}
		bnimg[next].style.left='1226px';
		bnlb[next].classList.add('hot');
		bnlb[current].classList.remove('hot')
		animate(bnimg[next],{left:0});
		animate(bnimg[current],{left:-1226},function(){
			flag=true
		});
		current=next;
	}
	function mover(){
		next--;
		if(next<0){
			next=bnimg.length-1;
		}
		bnimg[next].style.left='-1226px';
		bnlb[next].classList.add('hot');
		bnlb[current].classList.remove('hot')
		animate(bnimg[next],{left:0});
		animate(bnimg[current],{left:1226},function(){
			flag=true
		});					
		current=next;
	}
	//banner，轮播点的移动
	for(let i=0;i<bnlb.length;i++){
		bnlb[i].onclick=function(){
			bnlb[i].classList.add('hot');
			if(i==current){
				return
			}
			bnlb[current].classList.remove('hot')			
			if(i>current){
				animate(bnimg[i],{left:0});
				animate(bnimg[current],{left:-1226});					
				current=next=i;
			}
			if(i<current){
				animate(bnimg[i],{left:0});
				animate(bnimg[current],{left:1226});					
				current=next=i;
			}
		}
	}		
	left.onclick=function(){
		if(flag){
			flag=false;
			movel()
		}		
	}
	right.onclick=function(){
		if(flag){
			flag=false;
			mover()
		}		
	}
	//banner轮播
	
	
	let nav1=$('.subnavxlk')[0];
	let navxlk=$('.xlk1');
	let navxlk1=$('.bnxlk');
	let bnxlk1=$('.bnxlk1');
	let bnxlkkj=$('.bnxlkkj')[0];
	nav1.onmouseenter=function(){
		bnxlkkj.style.height='230px';
	}
	nav1.onmouseleave=function(){
		bnxlkkj.style.height='0px';
	}
	for(let i=0;i<navxlk.length;i++){
		navxlk[i].onmouseenter=function(){
			navxlk1[i].style.display='block'
		}
		navxlk[i].onmouseleave=function(){
			navxlk1[i].style.display='none'
		}
	}
	//小米明星单品
	let mxdpk=$('.mxdp')[0];
	let mxdp1=$('.mxdpk');
	let mxleft=$('.zuo')[0];
	let mxright=$('.you')[0];
	let fla=true;
	mxright.onclick=function(){
		if(fla==true){
			fla=false;
			animate(mxdp1[0],{left:-1226})
			animate(mxdp1[1],{left:0},function(){
			fla=true;
			})
		}		
	}
	mxleft.onclick=function(){
		if(fla==true){
			fla=false;		
			animate(mxdp1[0],{left:0})
			animate(mxdp1[1],{left:1226},function(){
			fla=true;
		})
		}
	}
	
	
	
	
	let dplist1=$('.dplist')[0];
	let dplistt1=$('.dplistt',dplist1);
	let znpj1=$('.znztright0')[1];
	let znpjmain1=$('.znztright',znpj1);
	for(let i=0;i<dplistt1.length;i++){
		dplistt1[i].onmouseenter=function(){	
			for(let j=0;j<dplistt1.length;j++){
				dplistt1[j].style.borderBottom='none';
				dplistt1[j].style.color='#000'
				znpjmain1[j].style.display='none'
			}
			dplistt1[i].style.borderBottom='1px solid #ff6700'
			znpjmain1[i].style.display='block'
			dplistt1[i].style.color='#ff6700';
		}
	}
	//第一块
	let dplist2=$('.dplist')[1];	
	let dplistt2=$('.dplistt',dplist2)
	let znpj2=$('.znztright0')[2];
	let znpjmain2=$('.znztright',znpj2);
	for(let i=0;i<dplistt2.length;i++)
		dplistt2[i].onmouseover=function(){
			for(let j=0;j<dplistt2.length;j++){
				dplistt2[j].style.borderBottom='none';
				dplistt2[j].style.color='#000';
				znpjmain2[j].style.display='none'
			}
			dplistt2[i].style.borderBottom='1px solid #ff6700'
			znpjmain2[i].style.display='block'
			dplistt2[i].style.color='#ff6700';
	}
	//第二块
	let dplist3=$('.dplist')[2];	
	let dplistt3=$('.dplistt',dplist3)
	let znpj3=$('.znztright0')[3];
	let znpjmain3=$('.znztright',znpj3);
	for(let i=0;i<dplistt3.length;i++)
		dplistt3[i].onmouseover=function(){
			for(let j=0;j<dplistt3.length;j++){
				dplistt3[j].style.borderBottom='none';
				dplistt3[j].style.color='#000';
				znpjmain3[j].style.display='none'
			}
			dplistt3[i].style.borderBottom='1px solid #ff6700'
			znpjmain3[i].style.display='block'
			dplistt3[i].style.color='#ff6700';
	}
	//第三块
	let wntjzt=$('.wntjzt');
	let wntjleft=$('.wntjjt1')[0];
	let wntjright=$('.wntjjt2')[0];
	let curren=0;
	let nextt=0;
	let wngflag=true;
	for(let i=0;i<wntjzt.length;i++){
		if(i==0){
			continue;
		}
		wntjzt[i].style.left='1226px'
	}
	wntjleft.onclick=function(){
		if(nextt!=wntjzt.length-1){					
		if(wngflag){		
			wngflag=false;
			nextt++;
			if(nextt==wntjzt.length){
				nextt=wntjzt.length-1;
				return;
			}
			animate(wntjzt[curren],{left:-1226});
			animate(wntjzt[nextt],{left:0},function(){
				wngflag=true;
			});
			curren=nextt;
			}
	}
		}
	wntjright.onclick=function(){
		if(nextt!=0){					
			if(wngflag){						
				wngflag=false;
				nextt--;
				if(nextt<0){
					nextt=0;
					return
				}
				animate(wntjzt[nextt],{left:0});
				animate(wntjzt[curren],{left:1226},function(){
					wngflag=true;
				});
				curren=nextt;
			}
		}
	}
	//为你推荐左右移动
	let nrmain=document.querySelectorAll('.nrmain');
	nrmain.forEach(function(value){
				nrlunbo(value);
		})
	function nrlunbo(obj){			
		let nrflag=true;
		let nrfirst=$('.nrfirst',obj);
		let nrleft=$('.nrleft',obj);
		let nrlbd=$('.nrlbd0',obj);
		let nrcurren=0;
		let nrnext=0;
		obj.onmouseenter=function(){
			nrleft[0].style.opacity='1';
			nrleft[1].style.opacity='1';
		}
		obj.onmouseleave=function(){
			nrleft[0].style.opacity='0';
			nrleft[1].style.opacity='0';
		}
		//移入图片箭头显示
		for(let i=0;i<2;i++){
			nrleft[i].onmouseenter=function(){
				this.style.background='#8D8D8D'
			}
			nrleft[i].onmouseleave=function(){
				this.style.background='#d9d9d9'
			}
		}
		for(let i=0;i<nrfirst.length;i++){
			if(i==0){
				continue;
			}
			nrfirst[i].style.left='296px'
		}
		nrleft[1].onclick=function(){
			if(nrcurren<nrfirst.length-1){							
			if(nrflag){
				nrflag=false			
				if(nrnext<nrfirst.length-1){					
				nrnext++;
				animate(nrfirst[nrnext],{left:0});
				animate(nrfirst[nrcurren],{left:-296},function(){
								nrflag=true;
							});
				nrlbd[nrnext].classList.add('nrhot')
				nrlbd[nrcurren].classList.remove('nrhot');
				nrcurren=nrnext;
				}
				}
			}
		}
		nrleft[0].onclick=function(){
			if(nrnext>0){
				if(nrflag){
				nrflag=false;												
				nrnext--;
				animate(nrfirst[nrnext],{left:0});
				animate(nrfirst[nrcurren],{left:296},function(){
								nrflag=true;
							});
				nrlbd[nrnext].classList.add('nrhot')
				nrlbd[nrcurren].classList.remove('nrhot');
				nrcurren=nrnext;
				}
			}
		}
		for(let i=0;i<nrlbd.length;i++){
			nrlbd[i].onclick=function(){				
				if(i==nrcurren){
					return;
				}
				nrlbd[nrcurren].classList.remove('nrhot')
				if(i<nrcurren){
					animate(nrfirst[i],{left:0});
					animate(nrfirst[nrcurren],{left:296});
					nrcurren=nrnext=i;
				}
				if(i>nrcurren){
					animate(nrfirst[i],{left:0});
					animate(nrfirst[nrcurren],{left:-296});
					nrcurren=nrnext=i;
				}
				nrlbd[i].classList.add('nrhot');
			}
		}
	}
	//内容区结束
	
	
	
	
	let spimg=$('.shipin2');
	for(let i=0;i<spimg.length;i++){
		let spimga=spimg[i].querySelector('a');
		let spstar=spimg[i].querySelector('.shipinstar');
		spimga.onmouseover=function(){
			spstar.style.background='#ff6700';
			spstar.style.border='0'
		}
		spimga.onmouseleave=function(){
			spstar.style.background='#000'
			spstar.style.border='2px solid #fff'
		}
		spstar.onmouseover=function(){
			spstar.style.background='#ff6700';
			spstar.style.border='0'
		}
		spimga.onmouseleave=function(){
			spstar.style.background='#000'
			spstar.style.border='2px solid #fff'
		}
	}
})

