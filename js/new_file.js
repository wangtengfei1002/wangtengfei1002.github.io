$(function(){
		$('.box').fullpage({verticalCentered: false,
		'navigation': true,
		anchors:['page1','page2','page3','page4','page5'],
		afterLoad:function(a,index){
			if(index==3){									
				let ctx=document.querySelector('canvas').getContext('2d');
				let ctx1=document.querySelector('.threecan2').getContext('2d');
				let ctx2=document.querySelector('.threecan3').getContext('2d');
				function jindu(ct,curren,color,width){			
					let n=0,num=curren;
					let t;
					ct.textAlign='center';
					ct.lineCap='round';
					ct.font='bold 30px 宋体';
					ct.strokeStyle=color;
					ct.lineWidth=width;
					t=setInterval(move,10);
					function move(){
						n++;
						if(n==num){
							clearInterval(t)
						}
						ct.clearRect(0,0,200,200);
						ct.beginPath();
						let tatle=n*3.6*Math.PI/180-Math.PI/2;
						ct.arc(100,100,80,-Math.PI/2,tatle);
						ct.stroke();
						
						ct.fillText(`${n}%`,100,100);		
					}
				}
			jindu(ctx,70,'#000000',5);
			jindu(ctx1,85,'#000000',5);
			jindu(ctx2,78,'#000000',5);
			}
			if(index==4){
				let zuopinz=$('.simain1 a');
				for(let i=0;i<zuopinz.length;i++){
					if(i==0){
						$(zuopinz[i]).css(												
							{ 	transition: 'all 0.3s ease',
								transform:'rotate(360deg)',
								height:'240px',
								width:'240px',
							})
					}
					if(i==1){
						$(zuopinz[i]).css(												
							{ 	transition: 'all 0.6s ease',
								transform:'rotate(360deg)',
								height:'240px',
								width:'240px'
							})
					}						
					if(i==2){
						$(zuopinz[i]).css(												
							{ 	transition: 'all 0.9s ease',
								transform:'rotate(360deg)',
								height:'240px',
								width:'240px'
							})
					}
					if(i==3){
						$(zuopinz[i]).css(												
							{ 	transition: 'all 1.2s ease',
								transform:'rotate(360deg)',
								height:'240px',
								width:'240px'
							})
					}
					if(i==4){
						$(zuopinz[i]).css(												
							{ 	transition: 'all 1.5s ease',
								transform:'rotate(360deg)',
								height:'240px',
								width:'240px'
							})
					}
					if(i==5){
						$(zuopinz[i]).css(												
							{ 	transition: 'all 1.8s ease',
								transform:'rotate(360deg)',
								height:'240px',
								width:'240px'
							})
					}
					if(i==6){
						$(zuopinz[i]).css(												
							{ 	transition: 'all 2.1s ease',
								transform:'rotate(360deg)',
								height:'240px',
								width:'240px'
							})
					}
					if(i==7){
						$(zuopinz[i]).css(												
							{ 	transition: 'all 2.4s ease',
								transform:'rotate(360deg)',
								height:'240px',
								width:'240px'
							})
					}
					if(i==8){
						$(zuopinz[i]).css(												
							{ 	transition: 'all 2.7s ease',
								transform:'rotate(360deg)',
								height:'240px',
								width:'240px'
							})
					}
				}
			}
		}
		
	});
	let inputt=$('.tet');
	$('.sub').click(function(){
		alert('提交成功')
	})
	})
