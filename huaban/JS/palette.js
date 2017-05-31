//线  铅笔  矩形   多边形     多角型        圆    虚线     圆角矩形      填充    描边    填充样式     描边样式       橡皮     文字     裁切      撤销     保存      新建  


function gongneng(obj,ctx,mask){
	this.obj=obj
	this.mask=mask;
	this.ctx=ctx;
	this.lineWidth=5;
	this.fillStyle='#000';
	this.strokeStyle='#000';
	this.type='stroke';
	this.bian=5;
	this.jiao=5;
	this.lineCap='butt';
	this.mask.width=obj.width;
	this.mask.height=obj.height;
	this.arr=[];
}
gongneng.prototype={
	init:function(){
		this.ctx.lineWidth=this.lineWidth;
		this.ctx.fillStyle=this.fillStyle;
		this.ctx.strokeStyle=this.strokeStyle;
		this.ctx.lineCap=this.lineCap;
	},
	
	//直线
	line:function(){	
		this.mask.onmousedown=function(e){
			let ox=e.offsetX,oy=e.offsetY;
			this.mask.onmousemove=function(e){
				let cx=e.offsetX,cy=e.offsetY;
				this.ctx.clearRect(0,0,this.mask.width,this.mask.height);
				this.init()
				if(this.arr.length>0){
				this.ctx.putImageData(this.arr[this.arr.length-1],0,0);
			}			
				
				this.ctx.beginPath();
				this.ctx.moveTo(ox,oy);
				this.ctx.lineTo(cx,cy);
				this.ctx.stroke();
			}.bind(this)
			this.mask.onmouseup=function(){
				this.arr.push(this.ctx.getImageData(0,0,this.mask.width,this.mask.height))
				this.mask.onmousemove=null;
				this.mask.onmouseup=null;
			}.bind(this)
		}.bind(this)
	},
	//铅笔
	pencil:function(){
		this.mask.onmousedown=function(e){
			let ox=e.offsetX,oy=e.offsetY;
			this.ctx.beginPath();
			this.ctx.moveTo(ox,oy);
			this.mask.onmousemove=function(e){
				let cx=e.offsetX,cy=e.offsetY;
				this.init()
				if(this.arr.length>1){
					this.ctx.putImageData(this.arr[this.arr.length-1],0,0)
				}
				this.ctx.lineTo(cx,cy);
				this.ctx[this.type]();
			}.bind(this)
			this.mask.onmouseup=function(){
				this.arr.push(this.ctx.getImageData(0,0,this.mask.width,this.mask.height))
				this.mask.onmousemove=null;
				this.mask.onmouseup=null;
			}.bind(this)
			
			
		}.bind(this)
	},
	//矩形
	square:function(){
		this.mask.onmousedown=function(e){
			let ox=e.offsetX,oy=e.offsetY;
			
			this.mask.onmousemove=function(e){
				let cx=e.offsetX,cy=e.offsetY;
				this.ctx.beginPath();
				this.ctx.clearRect(0,0,this.mask.width,this.mask.height);
				this.init()
				if(this.arr.length>0){
					this.ctx.putImageData(this.arr[this.arr.length-1],0,0)
				}
				
				this.ctx.rect(ox,oy,cx-ox,cy-oy);
				this.ctx[this.type]();
				this.ctx.closePath();
			}.bind(this);
			this.mask.onmouseup=function(){
				this.arr.push(this.ctx.getImageData(0,0,this.mask.width,this.mask.height));
				this.mask.onmousemove=null;
				this.mask.onmouseup=null;
			}.bind(this)
		}.bind(this)
	},
	//圆
	round:function(){
		this.mask.onmousedown=function(e){
			let ox=e.offsetX,oy=e.offsetY;
			this.mask.onmousemove=function(e){
				let cx=e.offsetX,cy=e.offsetY;
				this.ctx.beginPath();
				this.ctx.clearRect(0,0,this.mask.width,this.mask.height);	
				this.init()
				if(this.arr.length>0){
					this.ctx.putImageData(this.arr[this.arr.length-1],0,0)
				}
				this.ctx.arc(ox,oy,Math.abs(cx-ox),0,2*Math.PI);
				this.ctx[this.type]();
			}.bind(this)
			this.mask.onmouseup=function(){
				this.arr.push(this.ctx.getImageData(0,0,this.mask.width,this.mask.height));
				this.mask.onmousemove=null;
				this.mask.onmouseup=null;
			}.bind(this)
		}.bind(this)
	},
	//多边形
	polygon:function(bian){
		this.mask.onmousedown=function(e){
			let ox=e.offsetX,oy=e.offsetY;
			let angle=(360/bian)/180*Math.PI;
			this.mask.onmousemove=function(e){
				let cx=e.offsetX,cy=e.offsetY;
				this.ctx.clearRect(0,0,this.mask.width,this.mask.height);
				this.init()
				this.ctx.putImageData(this.arr[this.arr.length-1],0,0)
				this.ctx.beginPath();				
				let radius=Math.sqrt((cx-ox)*(cx-ox)+(cy-oy)*(cy-oy));	
				console.log(radius)
				this.ctx.moveTo(ox+radius,oy)
				for(let i=0;i<bian;i++){
					this.ctx.lineTo(ox+radius*Math.cos(angle*i),
					oy+radius*Math.sin(angle*i))
				}
				this.ctx.closePath();
				this.ctx[this.type]();
			}.bind(this);
			this.mask.onmouseup=function(){
				this.arr.push(this.ctx.getImageData(0,0,this.mask.width,this.mask.height))
				this.mask.onmousemove=null;
				this.mask.onmouseup=null;
			}.bind(this);
		}.bind(this);
	},
	//圆角矩形
	rounded:function(jiao){
		this.mask.onmousedown=function(e){
			let ox=e.offsetX,oy=e.offsetY;
			this.mask.onmousemove=function(e){
				let cx=e.offsetX,cy=e.offsetY;				
				this.ctx.clearRect(0,0,this.mask.width,this.mask.height);
				this.init()
				this.ctx.beginPath();
				if(cx>ox&&cy>oy){
					jiao=Math.abs(jiao);
					this.ctx.moveTo(ox+jiao,oy);
					this.ctx.lineTo(cx-jiao,oy);
					this.ctx.quadraticCurveTo(cx,oy,cx,oy+jiao);
					this.ctx.lineTo(cx,cy-jiao);
					this.ctx.quadraticCurveTo(cx,cy,cx-jiao,cy);
					this.ctx.lineTo(ox+jiao,cy);
					this.ctx.quadraticCurveTo(ox,cy,ox,cy-jiao);
					this.ctx.lineTo(ox,oy+jiao);
					this.ctx.quadraticCurveTo(ox,oy,ox+jiao,oy);				
					this.ctx.closePath();
				}
				if(cx<ox&&cy<oy){
					jiao=-Math.abs(jiao)
					this.ctx.moveTo(ox+jiao,oy);
					this.ctx.lineTo(cx-jiao,oy);
					this.ctx.quadraticCurveTo(cx,oy,cx,oy+jiao);
					this.ctx.lineTo(cx,cy-jiao);
					this.ctx.quadraticCurveTo(cx,cy,cx-jiao,cy);
					this.ctx.lineTo(ox+jiao,cy);
					this.ctx.quadraticCurveTo(ox,cy,ox,cy-jiao);
					this.ctx.lineTo(ox,oy+jiao);
					this.ctx.quadraticCurveTo(ox,oy,ox+jiao,oy);				
					this.ctx.closePath();
				}
				if(cx>ox&&cy<oy){
					jiao=Math.abs(jiao);
					this.ctx.moveTo(ox+jiao,oy);
					this.ctx.lineTo(cx-jiao,oy);
					this.ctx.quadraticCurveTo(cx,oy,cx,oy-jiao);
					this.ctx.lineTo(cx,cy+jiao);
					this.ctx.quadraticCurveTo(cx,cy,cx-jiao,cy);
					this.ctx.lineTo(ox+jiao,cy);
					this.ctx.quadraticCurveTo(ox,cy,ox,cy+jiao);
					this.ctx.lineTo(ox,oy-jiao);
					this.ctx.quadraticCurveTo(ox,oy,ox+jiao,oy);
					this.ctx.closePath();
				}
				if(cx<ox&&cy>oy){
					jiao=-Math.abs(jiao);
					this.ctx.moveTo(ox+jiao,oy);
					this.ctx.lineTo(cx-jiao,oy);
					this.ctx.quadraticCurveTo(cx,oy,cx,oy-jiao);
					this.ctx.lineTo(cx,cy+jiao);
					this.ctx.quadraticCurveTo(cx,cy,cx-jiao,cy);
					this.ctx.lineTo(ox+jiao,cy);
					this.ctx.quadraticCurveTo(ox,cy,ox,cy+jiao);
					this.ctx.lineTo(ox,oy-jiao);
					this.ctx.quadraticCurveTo(ox,oy,ox+jiao,oy);
					this.ctx.closePath();
				}
				if(this.arr.length>0){
					this.ctx.putImageData(this.arr[this.arr.length-1],0,0)
				}				
				this.ctx[this.type]();
			}.bind(this);
			this.mask.onmouseup=function(){
				this.arr.push(this.ctx.getImageData(0,0,this.mask.width,this.mask.height))
				this.mask.onmousemove=null;
				this.mask.onmouseup=null;
			}.bind(this)
		}.bind(this);
	},
	//橡皮擦
	eraser:function(erase){
		this.ctx.save();
		this.mask.onmousedown=function(e){
			
			this.mask.onmousemove=function(e){
				 let cx=e.offsetX,cy=e.offsetY;
				 erase.style.display='block';
				 erase.style.left=`${cx-10}px`;
				 erase.style.top=`${cy-10}px`;
				 this.ctx.clearRect(cx,cy,20,20);
			}.bind(this)
			this.mask.onmouseup=function(){				
				this.arr.push(this.ctx.getImageData(0,0,this.mask.width,this.mask.height))	
				this.ctx.restore()	
				this.mask.onmousemove=null;								
				erase.style.display='none';
			}.bind(this);
		}.bind(this);
	},
	//虚线
	dashed:function(){
		this.mask.onmousedown=function(e){
			let ox=e.offsetX,oy=e.offsetY;
			this.mask.onmousemove=function(e){
				let cx=e.offsetX,cy=e.offsetY;
				this.ctx.clearRect(0,0,this.mask.width,this.mask.height);
				this.init()
				if(this.arr.length>0){
				this.ctx.putImageData(this.arr[this.arr.length-1],0,0);
			}			
				
				this.ctx.beginPath();
				this.ctx.setLineDash([10,5]);
				this.ctx.moveTo(ox,oy);
				this.ctx.lineTo(cx,cy);
				this.ctx.stroke();
				this.ctx.closePath()
			}.bind(this)
			this.mask.onmouseup=function(){
				this.arr.push(this.ctx.getImageData(0,0,this.mask.width,this.mask.height));
				this.ctx.setLineDash([0,0]);
				this.mask.onmousemove=null;
				this.mask.onmouseup=null;
			}.bind(this)
		}.bind(this)
	},
	//撤销
	retrn:function(){
		let last=this.arr.pop();
		if(this.arr.length>0){
			this.ctx.putImageData(last,0,0)
		}
		
	},
	save:function(img){
		let data=this.obj.toDataURL("img/ipg").
			replace("data:img/jpg","data:stream/octet");
		img.src=data;
		window.location.href=data;
	},
	//保存图片
	ployj:function(bian){	
		let angle = (360 /(bian*2)) * Math.PI / 180;
		this.mask.onmousedown=function(e){
			let ox=e.offsetX,oy=e.offsetY;			
            this.mask.onmousemove = function (e) {
                let cx = e.offsetX, cy = e.offsetY;
                let radius = Math.sqrt((cx - ox) * (cx - ox) + (cy - oy) * (cy - oy));
                let radius1=radius/3;
                this.ctx.clearRect(0, 0,this.mask.width, this.mask.height);
                this.init()
                if (this.arr.length > 0) {
                    this.ctx.putImageData(this.arr[this.arr.length - 1], 0, 0);
                }
				this.ctx.beginPath();
                this.ctx.moveTo(ox+radius,oy);
                for (let i=0;i<bian*2;i++) {
                    if(i%2==0){
                        this.ctx.lineTo(ox + Math.cos(angle * i) * radius, oy + Math.sin(angle * i) * radius)
                    }else{
                        this.ctx.lineTo(ox + Math.cos(angle * i) * radius1, oy + Math.sin(angle * i) * radius1)
                    }
                }
                this.ctx.closePath();
                this.ctx[this.type]();	
								
							
			}.bind(this);
			this.mask.onmouseup=function(){
				this.arr.push(this.ctx.getImageData(0,0,this.mask.width,this.mask.height));
				this.mask.onmousemove=null;
				this.mask.onmouseup=null;
			}.bind(this);
		}.bind(this)
	},
	//多角型
	//文字
	tet:function(){
		let self = this;
        self.init();
        self.mask.onmousedown=function(e){
            let ox=e.offsetX,oy=e.offsetY;
            let div=document.createElement('div');
            div.style.cssText=`
                width:80px;
                height:20px;
                border:1px solid #b0b0b0;
                position:relative;
                left:${ox}px;
                top:${oy}px;
                
            `;
            if(self.arr.length>0){
                    self.ctx.putImageData(self.arr[self.arr.length-1],0,0);
                }
            div.contentEditable="true";
            self.mask.appendChild(div);
            self.mask.onmousedown=null;
            self.area=div;
            self.area.onmousedown=function(e){
                let ox=e.clientX-this.offsetLeft;
                
                let oy=e.clientY-this.offsetTop; 
                console.log(ox,oy)
            self.mask.onmousemove=function(e){                
                let mx=e.clientX,my=e.clientY;
                let lefts=mx-ox;
                let tops=my-oy;
                self.area.style.left=`${lefts}px`;
                self.area.style.top=`${tops}px`;
            }
            self.area.onmouseup=function(){
                self.area.onmouseup=null;
                self.mask.onmousemove=null;
            }
            }
            div.onblur=function(){
                self.ctx.font=self.text;
                self.ctx.textAlign=self.textAlign;
                self.ctx.textBaseline=self.textBaseline;
                self.ctx.fillText(this.innerText,this.offsetLeft,this.offsetTop);
                this.parentNode.removeChild(this);
                self.area=null;
                self.arr.push(self.ctx.getImageData(0,0,self.mask.width,self.mask.height));
            }
        }
	},
	cleari:function(){
		this.ctx.clearRect(0,0,this.mask.width,this.mask.height);
		this.arr.push(this.ctx.getImageData(0,0,this.mask.width,this.mask.height));
	},
	//清除
	cup:function(clipBtn){
		let self=this;
        self.init();
        self.clipBtn=clipBtn;
        self.mask.onmousedown=function(e){
            let ox=e.offsetX,oy=e.offsetY;
            let minx,miny,w,h;
            self.init()
            self.mask.onmousemove=function(e){
            	self.init()
                let mx=e.offsetX,my=e.offsetY;
                minx=ox > mx ? mx:ox;
                miny=oy > my ? my:oy;
                w=Math.abs(mx-ox);
                h=Math.abs(my-oy);
                clipBtn.style.cssText=`
                width:${w}px;
                height:${h}px;
                position:absolute;
                top:${miny}px;
                left:${minx}px;
                border:1px dashed #000
                `;                
            };
            self.mask.onmouseup=function(){
                self.mask.onmouseup=null;
                self.mask.onmousemove=null;
                self.temp=self.ctx.getImageData(minx,miny,w,h);
                self.ctx.clearRect(minx,miny,w,h);
                self.arr.push(self.ctx.getImageData(0,0,self.mask.width,self.mask.height));
                self.ctx.putImageData(self.temp,minx,miny);
                self.drag(minx,miny,w,h,clipBtn);
            }
        }
	},
	drag:function(x,y,w,h,clipBtn){
        let  self=this;
        self.mask.onmousemove=function(e){
        	let ox=e.offsetX;
        	oy=e.offsetY;
        	if(ox>x && ox<w+x && oy>y && oy<h+y){
                self.mask.style.cursor='move';
            }else{
                self.mask.style.cursor='default';
            }
        }
        self.mask.onmousedown=function(e){
            let ox=e.offsetX,oy=e.offsetY;
            //鼠标相对于div左上角的位置
            let mx=ox-x;
            let my=oy-y;
            if(ox>x && ox<w+x && oy>y && oy<h+y){
                self.mask.style.cursor='move';
            }else{
                self.mask.style.cursor='default';
                return;
            }
            self.mask.onmousemove=function(e){
                self.ctx.clearRect(0,0,self.width,self.height);
                if(self.arr.length!=0){
                    self.ctx.putImageData(self.arr[self.arr.length-1],0,0);
                }
                let endx=e.offsetX;
                let endy=e.offsetY;
                let left=endx-mx;
                let top=endy-my;
                if(left<0){
                    left=0;
                }
                if(left>self.mask.width-w){
                    left=self.mask.width-w;
                }
                if(top<0){
                    top=0;
                }
                if(top>self.mask.height-h){
                    top=self.mask.height-h;
                }
                clipBtn.style.left=left+'px';
                clipBtn.style.top=top+'px';
                x=left;
                y=top;
                self.ctx.putImageData(self.temp,left,top);            
            self.mask.onmouseup=function(){
                self.mask.onmouseup=null;
                self.mask.onmousemove=null;
                self.drag(x,y,w,h,clipBtn);
                self.arr.push(self.ctx.getImageData(0,0,self.mask.width,self.mask.height));
            }
            }
        }
    },
}