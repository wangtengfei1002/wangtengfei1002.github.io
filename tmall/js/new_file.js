'use strict';
function $(selector,ranger=document){
	if(typeof selector=='string'){
		let select=selector.trim();
		let first=select.charAt(0);
		if(first=='.'){
		   return 	ranger.getElementsByClassName(select.substring(1));
		}else if(first=='#'){
			return 	ranger.getElementById(select.substring(1));
		}else if(/^[a-zA-Z][a-zA-Z1-6]{0,8}$/.test(select)){
			return ranger.getElementsByTagName(select);
		}
	}else if(typeof selector=='function'){
		window.onload=function(){
			selector()
		}
	}
}