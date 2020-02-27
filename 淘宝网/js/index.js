//页面预加载
window.onload = function(){
	//主题市场下面的导航
		let serBD = document.querySelector('.service_bd');
		let serBDlis = serBD.querySelectorAll('li');
		let serlisArr = Array.from(serBDlis);
		let serFlo = document.querySelector('.service-float');
		let serFloItem = serFlo.querySelectorAll('.service-float-item');
		serlisArr.map((item,index) => {
			let tid = item.getAttribute('tid');
			tid = index;
			item.onmouseenter = function(){
				serFlo.style.display = 'block';
				serFloItem[tid].style.display = 'block';
			 	serFloItem[tid].innerHTML ="<h1>"+item.innerText+"</h1>";
			 	serFlo.onmousemove = function(){
			 		serFlo.style.display = 'block';
					serFloItem[tid].style.display = 'block';
			 		serFloItem[tid].innerHTML ="<h1>"+item.innerText+"</h1>";
			 	}
			 	
			}
			
			item.onmouseleave = function(){
				serFlo.style.display = 'none';
				serFloItem[tid].style.display = 'none';
				serFlo.onmouseleave = function(){
			 		serFlo.style.display = 'none';
					serFloItem[tid].style.display = 'none';
			 	}
			}
		})
		
		//swiper  轮播图
		 var mySwiper = new Swiper ('.swiper-container', {
		    direction: 'horizontal',
		    loop: true,
		    autoplay:3000,
		    speed:500,
		    
		    // 如果需要分页器
		    pagination: '.swiper-pagination',
		    paginationClickable :true,
		    // 如果需要前进后退按钮
		    nextButton: '.swiper-button-next',
		    prevButton: '.swiper-button-prev',
		    
		  })
		 let tbhLunboT = document.querySelector('.tbh_lunbo_top');
		 tbhLunboT.onmouseover = function(){
		 	tbhLunboT.querySelector('.swiper-button-prev').style.display = 'block';
		 	tbhLunboT.querySelector('.swiper-button-next').style.display = 'block'
		 	mySwiper.stopAutoplay();
		 	
		 }
		 tbhLunboT.onmouseleave = function(){
		 	tbhLunboT.querySelector('.swiper-button-prev').style.display = 'none';
		 	tbhLunboT.querySelector('.swiper-button-next').style.display = 'none';
		 	mySwiper.startAutoplay();
		 }
		
		
		var mySwiper2 = new Swiper('.swiper-container2',{
			scrollbar:'.swiper-scrollbar',
			loop: false,
		    autoplay:2000,
		    scrollbarHide:false,
		    speed:500,
		  }); 
		  
		  
		  
		  
	//淘宝猜你喜欢商品数据渲染
	var res = datas.map(function(items,index){
			return `<div class="item">
						<a href="details.html?id=${items.id}">
							<div class="img-wrapper">
								<img src="${items.img}"/>
							</div>
							<h4>${items.h4}</h4>
						</a>
						
						<p class="info">
							<span class="marks hotsale-hide"></span>
						    <span class="price">${items.price}</span>
						    <span class="sales">${items.sales}</span>
						</p>
					</div>`;
					console.log(items.img)
		}).join("")
		document.querySelector('.lists').innerHTML = res;

}
//顶部搜索栏的选项卡
function Tabobj(ele,content){
			this.ele = document.querySelector(ele);
			this.title = tabobj.title;
			this.content = tabobj.content;
			this.init();
		}
		
		Tabobj.prototype = {
			constructor:Tabobj,
			init(){
				this.ul = document.createElement('ul');
				this.tabcen = this.ele.querySelector('.tabItem_center');
				this.ele.insertBefore(this.ul,this.tabcen);
				this.renderTitle();
				this.renderContent();
				
				this.lis = this.ele.querySelectorAll('li');
				this.contents = this.ele.querySelectorAll('.tab-content');
				
				let _this = this;
				this.lis.forEach((items,idx) => {
					items.onclick = function(){
						_this.changeClassName(this,idx);
					}
				})
			},
			//渲染标题
			renderTitle(){
				this.title.forEach((item,index) => {
					let li = document.createElement('li');
					li.innerHTML = item;
					if(index == 0){
						li.classList.add('selected')
					}
					this.ul.appendChild(li)
				})
				
			},
			renderContent(){
				this.content.forEach((item,index) => {
					let div = document.createElement('div');
					div.innerHTML = item;
					div.classList.add('tab-content');
					if(index == 0){
						div.classList.add('current');
					}
					this.ele.appendChild(div)
				})
			},
			changeClassName(ele,idx){
				for(var i=0;i<this.lis.length;i++){
					this.lis[i].classList.remove('selected');
					this.contents[i].classList.remove('current');
				}
				ele.classList.add('selected')
				this.contents[idx].classList.add('current');
			}
			
		}
		




//获取淘宝猜你喜欢的商品数据
//		function randomNum(min, max) {
//		    if (min > max) {
//		        return parseInt(Math.random() * (min - max + 1)) + max
//		    }
//		    return parseInt(Math.random() * (max - min + 1)) + min;
//		}
//		
//		var Items = document.querySelectorAll('.tbh-hotsale .item');
//		var arr = [];
//		for(var i =0;i<Items.length;i++){
//			var itemsobj = {};
//			var img = Items[i].querySelector('.img-wrapper img').src;
//			var h4 = Items[i].querySelector('h4').innerText;
//			var price = Items[i].querySelector('.price').innerHTML;
//			var xiaol = randomNum(1, 100);
//			itemsobj.id = i;
//			itemsobj.img = img;
//			itemsobj.h4 = h4;
//			itemsobj.price = price;
//			itemsobj.sales ="销量:" + xiaol;
//			arr.push(itemsobj)
//		}
//		var a = JSON.stringify(arr)
//		console.log(a)

