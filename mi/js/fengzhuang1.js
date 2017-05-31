/*
* @Author: WTF
* @Date:   2017-04-28 14:44:38
* @Last Modified by:   WTF
* @Last Modified time: 2017-05-01 08:56:47
*/

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
// $(function(){
// 	let list=$('#box');
// 	list.onclick=function(){
// 		if(list.style.borderRadius==0){
// 			list.style.background='red';
// 			list.style.borderRadius='50%';
// 		}		
// 		else{
// 			list.style.borderRadius=0;
// 			list.style.background='blue';
// 		}
// 	} 