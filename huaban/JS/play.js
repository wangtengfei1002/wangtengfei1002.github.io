window.onload=function(){
	let canvas=document.querySelector('canvas');
	let ctx=canvas.getContext('2d');
	let mask=document.querySelector('.mask')
	let play=new gongneng(canvas,ctx,mask);	
	let line=document.querySelector('.icon-zhixian');
	let pencil=document.querySelector('.icon-qianbi');
	let square=document.querySelector('.icon-zhengfangxing');
	let round=document.querySelector('.icon-yuan');
	let  polygon=document.querySelector('.icon-duobianxing');
	let rounded=document.querySelector('.icon-yuanjiaojuxingxuanzekuang');
	let eraser=document.querySelector('.icon-xiangpi');
	let erase=document.querySelector('.eraser')
	let dashed=document.querySelector('.icon-xuxian');
	let retrn=document.querySelector('.icon-undoIcon');
	let save=document.querySelector('.icon-73');
	let img=document.querySelector('img');
	let fill=document.querySelector('.icon-tianchong');
	let stroke=document.querySelector('.icon-miaobian');
	let fillstyle=document.querySelector('.fillstyle');
	let strokestyle=document.querySelector('.strokestyle');
	let duojiaoxing=document.querySelector('.duojiaoxing');
	let tet=document.querySelector('.icon-wenzi');
	let scren=document.querySelector('.screen');
	let cup=document.querySelector('.icon-jiancai')
	let label=document.querySelectorAll('label');
	let cleari=document.querySelector('.cleari')
	line.onclick=function(){
		play.line()
	}
	pencil.onclick=function(){
		play.pencil()
	}
	square.onclick=function(){
		play.square()
	}
	round.onclick=function(){
		play.round();
	}
	polygon.onclick=function(e){
		e=window.prompt('请输入边数','5');
		if((e==''||e<3)&&e==parseInt(e)){
			alert("请输入正确的边数")
		}
		if(parseInt(e)!=e&&e==Number(e)){
			alert('请输入整数');
			return;
		}
		if(e>10){
			alert('画这么圆，你咋不上天呢')
		}
		play.polygon(e);
	}
	rounded.onclick=function(e){
		e=window.prompt('请输入圆角大小','20')		
		play.rounded(e)
	}
	eraser.onclick=function(){
		play.eraser(erase)
	}
	let clipBtn=document.querySelector('.clip');
	cup.onclick=function(){
		play.cup(clipBtn)
	}
	dashed.onclick=function(){
		play.dashed()
	}
	retrn.onclick=function(){
		play.retrn()
	}
	document.body.onkeydown=function(e){
		if(e.ctrlKey&&e.keyCode==90){
			play.retrn()
		}
	}
	save.onclick=function(){
		play.save(img)
	}
	fill.onclick=function(){
		play.type='fill';
	}
	stroke.onclick=function(){
		play.type='stroke';
	}
	fillstyle.onchange=function(){
		play.fillStyle=`${fillstyle.value}`;
	}
	strokestyle.onchange=function(){
		play.strokeStyle=`${strokestyle.value}`;
	}
	duojiaoxing.onclick=function(e){
		e=window.prompt('清输入边数','5');
		play.ployj(e);
	}
	tet.onclick=function(){
		play.tet();
	}
	for(let i=0;i<label.length-1;i++){
		label[i].addEventListener('click',function(){
			for(let j=0;j<label.length-1;j++){
				label[j].style.background='#0085d0'
			}
			label[i].style.background='#33754E'
		})
	}
	cleari.onclick=function(){
		play.cleari()
	}
}
