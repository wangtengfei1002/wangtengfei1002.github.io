$(function(){
	//1更新，修改信息   点击单元格动态创建input 编辑完删掉表单
		
		//编辑td   事件委派  td-table
		//点击td创建一个表单元素,把当前单元格里的内容给了input,
		//单元格清空   
		//插入input-单元格
		//编辑完成后吧表单的值返回td中，然后再移除表单
		let box=$('.box')[0];
		
		
		let table=$('tbody')[0];
		
		
		let add=document.querySelector('#add');
		function init(){
			let data=localStorage.student;
			if(!data){
				let student=[
                    {name:"lisi",sex:"nv",age:"15",tall:"167cm"},
                    {name:"yumu",sex:"女",age:"14",tall:"167cm"},
                    {name:"wangzhengyi",sex:"nv",age:"19",tall:"155cm"},
                    {name:"kanwas",sex:"nv",age:"98",tall:"167cm"},
                    {name:"canwasii",sex:"nv",age:"55",tall:"167cm"},
                    {name:"xinzengde",sex:"nan",age:"99",tall:"199cm"}
                ];
						
			let stt=JSON.stringify(student);
			localStorage.setItem("student",stt);
			}
//			data.forEach(function(value,index){
//	//			creaeTr(value);		
//				let tr=document.createElement('tr');
//				tr.id=index;
//				tr.innerHTML=`
//				<td type="name">${value.name}</td>
//				<td type="sex">${value.sex}</td>
//				<td type="age">${value.age}</td>
//				<td type="tell">${value.tell}</td>
//				<td class='del'><button>删除</button></td>
//				
//				`;
//				table.appendChild(tr)			
		};
		// creatTr
		load()
		function load(){
            let data=localStorage.student;
            if(!data){
                init();
            }
            data=JSON.parse(localStorage.student);
            table.innerHTML="";
            data.forEach(function (value,index) {
                 creatTr(value,index);
            })
        }
		function creatTr(obj,index){
			let tr=document.createElement('tr');
			tr.id=index;
			tr.innerHTML=`
				<td type="name">${obj.name}</td>
                     <td type="sex">${obj.sex}</tdtype>
                     <td type="age">${obj.age}</td>
                     <td type="tall">${obj.tall}</td>
                    <td class="del"><button>删除</button></td>			
			`
			table.appendChild(tr)
		}
		table.ondblclick=function(e){
			let obj=e.target;
			if(obj.nodeName=='TD' && obj.className!='del'){
				let input=document.createElement('input');
				input.style.width='80px'
				let odiv=obj.innerText;
				input.value=odiv;
				obj.innerText='';
				obj.appendChild(input);
				//focus  获得焦点    onblur失去焦点
				input.onblur=function(){
					let newv=input.value;
					obj.removeChild(input);
					obj.innerText=newv.trim()?newv.trim():odiv;
					let id=obj.parentNode.id,type=obj.getAttribute("type");
					
					updata(id,type,newv);
				}
			}else if(obj.nodeName=="BUTTON"){
				let par=obj.parentNode.parentNode;
				table.removeChild(par);	
				let id=par.id;
				del(id)
			}
				
				
				
		function updata(id,type,value){
			let data=JSON.parse(localStorage.student);
			data[id][type]=value;
			localStorage.student=JSON.stringify(data)
			
			
		}
//			}else if(obj.nodeName=='BUTTON'){
//				let tr=obj.parentNode.parentNode;
//				let i=Math.ceil(Math.random()*2);
//				if(i==1){
//					xiao(tr)
//				}
//				if(i==2){
//					yi(tr)
//				}
//				tr.addEventListener('transitionend',function(){
//					table.removeChild(tr);
//				},false)
//				
//			}
//		function yi(obj){
//			obj.style.transform='translateX(200px)'
//		}
//		function xiao(obj){
//			obj.style.opacity='0';
//		}
		//修改删除
	}
		
			add.onclick=function () {
//				let tr=document.createElement('tr');
//				tr.innerHTML=`<td>${Math.floor(Math.random()*50)}</td>
//			        		<td>中</td>
//			        		<td>80</td>
//			        		<td>123456</td>
//			        		<td class="del"><button>删除</button></td>`
//							table.appendChild(tr)
			 		Add({name:"xxinzengde",sex:"nan",age:"99",tall:"199cm"});
			}
		//增加
	function Add(obj){
		let data=JSON.parse(localStorage.student);
        data.push(obj);
        localStorage.student=JSON.stringify(data);
        load();
	}
	function del(id){
            let data=JSON.parse(localStorage.student);
            data.splice(id,1);
            localStorage.student=JSON.stringify(data);
            load();
        }
	
	
	
	
	})