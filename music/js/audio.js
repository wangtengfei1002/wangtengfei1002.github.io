window.onload=function(){
	let audio=document.querySelector('audio');
	let song=document.querySelector('.song');
	let author=document.querySelector('.author');
	let lyrics=document.querySelector('.lyrics');
	let play=document.querySelector('.play');
	let last=document.querySelector('.last');
	let next=document.querySelector('.next');
	let info=document.querySelector('.info');
	let imgs=document.querySelector('img');
	let box=document.querySelector('.box');
	let son=document.querySelector('.son');
	let ctime=document.querySelector('.ctime');
	let dtime=document.querySelector('.dtime');	
	let volumebtn=document.querySelector('.volumebtn');
	let volumeC=document.querySelector('.volumeC');
	let volume=document.querySelector('.volume');
	let index=0;
	let photo = [
        {src:"images/mww.jpg"},
        {src:"images/cyx.jpg"},        
        {src:"images/rz.jpg"},
        {src:"images/lyj.jpg"},
        {src:"images/yzw.jpg"},
		{src:"images/zxy.jpg"}
    ];
    console.log(photo[index].src)
	render(database[index]);
	play.onclick=function(){
		if(audio.paused){
			audio.play();
			play.classList.toggle('icon-kaishi')
		}else{
			audio.pause();
			play.classList.toggle('icon-kaishi')
		}
	}				
	last.onclick=function(){
		index++;
		if(index==database.length){
			index=0
		}
		play.className='iconfont icon-kaishi1 play';
		son.style.width=0;
		render(database[index]);
	}
	next.onclick=function(){
		index--
		if(index<0){
			index=database.length-1;
		}
		play.className='iconfont icon-kaishi1 play';
		son.style.width=0;
		render(database[index]);
	}
	let i=x=0;
	audio.ontimeupdate = function(){ 
		let current = format(audio.currentTime); // 100  02:11
        let duration =format(audio.duration); // 100  02:11
        let string='';
        ctime.innerText =current; 
//    	dtime.innerText =duration;
        

        lyrics.innerHTML='';
        database[index]['lyrics'].forEach(function(value,aa){
            if( value.time == current ){
                x = i = aa;
            }
        })

        if(x<2){
           i=0
        }else{
            i = x - 2;
        }
        for(let j=i;j<database[index]['lyrics'].length;j++){
            if(j==x){
                string+=`
             <li class="hot">
                ${database[index]['lyrics'][j]['lyric']}
             </li>`;
            }else{
                string+=`
             <li >
                ${database[index]['lyrics'][j]['lyric']}
             </li>`;
            }

        }
        lyrics.innerHTML = string;
//		let time=audio.currentTime;
//		let m=Math.floor(time/60);
//		let s=Math.floor(time%60);
//		if(s<10){
//			s=`0${s}`
//		}
//		if(m==0){
//			m=`00`
//		}
//		ctime.innerText=`${m}:${s}`;
//		if(current==duration){
//			index++
//		}
	jindu()
		if(audio.ended){
			index++;
            render(database[index]);
            audio.autoplay=true;
		}
	}
	function jindu(){
		let now=audio.currentTime;
		let noww=audio.duration;
		son.style.width=now/noww*100+'%'
	}
	box.onclick=function(e){
		let nowe=audio.currentTime;
		let nowwe=audio.duration;
		let xo=e.offsetX;
		let bw=box.offsetWidth;
		son.style.width=xo+'px';
		nowe=xo/bw*nowwe;
		audio.currentTime=xo/bw*nowwe;
	}
	
	
	function  format(time){
        let m =  Math.floor(time /60) >=10 ? Math.floor(time /60) :  '0'+Math.floor(time /60);
        let s =  Math.floor(time % 60) >=10 ? Math.floor(time % 60) :  '0'+Math.floor(time % 60);
        return  `${m}:${s}`;
    }
//	function format(time){
//		let m=Math.floor(time/60)>=0?math.floor(time/);
//	}
	//往页面中放歌词
	function render(obj){
		//歌名   播放   audio的SRC  歌词 
		let string='';
		song.innerText = obj.songs;
		author.innerText = obj.name;
		audio.src=obj.src;
		info.innerText = `${obj.songs} - ${obj.name} `;
		ctime.innerText = "00:00";
		imgs.src=photo[index].src;
      	dtime.innerText = obj.alltime;
		obj.lyrics.forEach(function(value,index){
			//这里value相当于一串串的歌词
			string+=`<li>${value.lyric}</li>`;
		})
		
		lyrics.innerHTML="";
		lyrics.innerHTML=string;
	}
	
	let offsetL=volume.offsetLeft;
	volumebtn.onmousedown=function(e){
		let ox=e.offsetX;
		document.onmousemove=function(e){			
			let cx=e.clientX;
			let lefts=cx-offsetL-ox/2;
			if(lefts>100){
				lefts=100
			}
			if(lefts<0){
				lefts=0;
			}
			volumebtn.style.left=lefts+'px';
			volumeC.style.width=lefts+'px';
			
			if(cx>800+'px'){
				cx=800+'px';
			}
			audio.volume=lefts/100;
		}
		document.onmouseup=function(){
			document.onmousemove=null;
			volumebtn.onmouseup=null;
		}
	}
}
