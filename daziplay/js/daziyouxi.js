'use strict'
	

function Game(){	
	this.charArr=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T'];	
	this.charLengh=3;
	this.Cw=window.innerWidth;
	this.cH=window.innerHeight;
	this.speed=5;		//下落值
	this.currentArr=[];	//存产生的div
	this.currentpos=[];
	this.sm=10;			//生命
	this.score=0;		//分数
	this.gq=10;			//关卡分数
	this.gk=document.querySelector('.guank');
//	this.smElement=document.querySelector('.sm');
	this.smElement=document.querySelector('.sm1');
	this.scoreElement=document.querySelector('.fs');
	this.zanting=document.querySelector('.zanting');
}
	
Game.prototype={
	start:function(){
		this.getElements(this.charLengh);
		this.drop();
		this.key();
	},
		
	
	
	
	getElements:function(length){				//多少个，哪些元素
		for(let i=0;i<length;i++){
			this.getChar();
		}
	},
	
	checkRepeat:function(text){
		return this.currentArr.some(function(value){
			return	value.innerText==text;
		})
	},
	checkPosition:function(lefts){
		return this.currentpos.some(function(value){
			return value+80>lefts&&lefts+80>value;
		})
	},
	
	
	
	getChar:function(){
		//对应的字符为this.charArr[num];
		let num=Math.floor(Math.random()*this.charArr.length);	
		//创建随机下标
		while(this.checkRepeat(this.charArr[num])){
			num=Math.floor(Math.random()*this.charArr.length);	
		}
		let ele=document.createElement('div');
		let tops=Math.random()*100+100;
		let lefts=(window.innerWidth-600)*Math.random()+300;
		while(this.checkPosition(lefts)){
			lefts=(window.innerWidth-600)*Math.random()+300;
		}
		this.currentpos.push(lefts);
		function imgg(){
			let img=Math.ceil(Math.random()*6);
			if(img==1){
				let im='img/timg1.png';
				return im;
			}
			if(img==2){
				let im='img/timg2.png';
				return im;
			}
			if(img==3){
				let im='img/timg3.png';
				return im;
			}
			if(img==4){
				let im='img/timg4.png';
				return im;
			}
			if(img==5){
				let im='img/timg5.png';
				return im;
			}
			if(img==6){
				let im='img/timg6.png';
				return im;
			}
		}
		console.log(imgg())
		ele.style.cssText=`
		width:80px;
		height:80px;
		background-image:url(${imgg()});
		background-size:80px 80px;
		background-repeat:no-repeat;
		background-position:center 8px;
		color:red;
		font-size:50px;
		text-align:center;
		line-height:0;
		position:absolute;		
		top:${tops}px;
		left:${lefts}px;
		`
		ele.innerText=this.charArr[num];
		document.body.appendChild(ele);
		this.currentArr.push(ele);
	},
	
	
	
	drop:function(){
		let self=this;
		self.t=setInterval(function(){
			for(let i=0;i<self.currentArr.length;i++){
				let tops=self.currentArr[i].offsetTop+self.speed;
				
				self.currentArr[i].style.top=tops+'px';
				if(tops>800){
					document.body.removeChild(self.currentArr[i]);
					//第I个消失掉，也要让数组中删掉
					self.currentArr.splice(i,1);
					self.currentpos.splice(i,1);
					self.sm--;
//					self.smElement.innerText=self.sm;
					self.smElement.style.width=self.sm*10+'%';
					//重新开始
					if(self.sm==0){
						let flag=window.confirm('游戏结束，是否继续');
						if(flag){
							self.restart();							
						}else{
							close();
						}
					}
				}
			}
			if(self.currentArr.length<self.charLengh){
				self.getChar();
			}
		},50)
		
	},
	
	
	
	key:function(){
//		let self=this;
//键盘按下
		document.body.onkeydown=function(e){
			let code=String.fromCharCode(e.keyCode);
			for(let i=0;i<this.currentArr.length;i++){
				if(code == this.currentArr[i].innerText){
					document.body.removeChild(this.currentArr[i]);
					this.currentArr.splice(i,1);
					this.currentpos.splice(i,1);
					this.score ++;
					this.scoreElement.innerText= this.score;
					//到达关卡进入下一关					
					if(this.gk.innerText==8){
						alert('你已通关，再见')
						close();							
					}
					if(this.score==this.gq){
						alert('你好棒，进入下一关，生命加1');
						this.sm+=1;
						this.gk.innerText++;
						this.next();
					}
				}
				
			}
			if(e.keyCode==13){
					alert('游戏暂停');
				}
			if(this.currentArr.length < this.charLengh){
				this.getChar()
			}
		}.bind(this);
		this.zanting.onclick=function(){
			alert('游戏暂停')
	}
	},	
//下一关开始
	next:function(){
		clearInterval(this.t);
		this.smElement.style.width=this.sm*10+'%';
		for(let i=0;i<this.currentArr.length;i++){
			document.body.removeChild(this.currentArr[i]);
		}
		this.speed++;
		this.currentArr=[];
		this.currentpos=[];
		this.charLengh++;
		this.gq+=20;
		this.start();
	},
	
	
//	重新开始开始
	restart:function(){
		clearInterval(this.t);
		for(let i=0;i<this.currentArr.length;i++){
			document.body.removeChild(this.currentArr[i]);
		}
		this.speed=5;
		this.charLengh=3;
		this.gk.innerText=0;
		this.currentArr=[];
		this.currentpos=[];
		this.sm=10;
		this.score=0;
		this.scoreElement.innerText=this.score;
		this.start()
	}

	
}