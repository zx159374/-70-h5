// < script type = "text/javascript" >
// 	var music1 = document.getElementById("music1");
// var music2 = document.getElementById("music2");
// var music3 = document.getElementById("music3");
// var music4 = document.getElementById("music4");
// var music5 = document.getElementById("music5");
// var music6 = document.getElementById("music6");
// var music7 = document.getElementById("music7");
// var music8 = document.getElementById("music8");
// var music9 = document.getElementById("music9");
// var music10 = document.getElementById("music10");
// var music11 = document.getElementById("music11");
// var music12 = document.getElementById("music12");
// var music13 = document.getElementById("music13");
// var music14 = document.getElementById("music14");
// var music15 = document.getElementById("music15");
// var music16 = document.getElementById("music16");
// var music17 = document.getElementById("music17");
// var music18 = document.getElementById("music18");
// var music19 = document.getElementById("music19");
// music1.style.animationPlayState = "paused";
// music2.style.animationPlayState = "paused";
// music3.style.animationPlayState = "paused";
// music4.style.animationPlayState = "paused";
// music5.style.animationPlayState = "paused";
// music6.style.animationPlayState = "paused";
// music7.style.animationPlayState = "paused";
// music8.style.animationPlayState = "paused";
// music9.style.animationPlayState = "paused";
// music10.style.animationPlayState = "paused";
// music11.style.animationPlayState = "paused";
// music12.style.animationPlayState = "paused";
// music13.style.animationPlayState = "paused";
// music14.style.animationPlayState = "paused";
// music15.style.animationPlayState = "paused";
// music16.style.animationPlayState = "paused";
// music17.style.animationPlayState = "paused";
// music18.style.animationPlayState = "paused";
// music19.style.animationPlayState = "paused";
// //重要！禁止移动端滑动的默认事件
// // 			
// // 			
// // 			function funcTo4() {
// // 				var box2 = document.getElementById("wrap2");
// // 				if (n == 2) n = 3;
// // 				box2.style.transform = 'translateY(' + (-3 * n * 10) + '%)'; //根据百分比位置移动页面
// // 				console.log(n);
// // 			}
// // 
// // 			function funcTo5() {
// // 				var box2 = document.getElementById("wrap2");
// // 				if (n == 2) n = 4;
// // 				box2.style.transform = 'translateY(' + (-4 * n * 10) + '%)'; //根据百分比位置移动页面
// // 				console.log(n);
// // 			}
// // 
// // 			function funcTo6() {
// // 				var box2 = document.getElementById("wrap2");
// // 				if (n == 2) n = 5;
// // 				box2.style.transform = 'translateY(' + (-5 * n * 10) + '%)'; //根据百分比位置移动页面
// // 				console.log(n);
// // 			}
// // 
// // 			function funcTo7() {
// // 				var box2 = document.getElementById("wrap2");
// // 				if (n == 2) n = 6;
// // 				box2.style.transform = 'translateY(' + (-6 * n * 10) + '%)'; //根据百分比位置移动页面
// // 				console.log(n);
// // 			}
// 
// // function funcTo1() {
// // 	var box2 = document.getElementById("wrap2");
// // 	if ((n == 3) && (n == 4) && (n == 5) && (n == 6)) n = 0;
// // 	box2.style.transform = 'translateY(' + (-0 * n * 10) + '%)'; //根据百分比位置移动页面
// // 	console.log(n);
// // }
// document.body.addEventListener('touchmove', function(event) {
// 	event = event ? event : window.event;
// 	if (event.preventDefault) {
// 		event.preventDefault()
// 	} else {
// 		event.returnValue = false
// 	}
// }, false)
// var pages = function(obj) {
// 	var box = document.getElementById("wrap");
// 	var box2 = document.getElementById("wrap2");
// 	var len = obj.len;
// 	var n = obj.n;
// 	var startY, moveY, cliH;
// 	//获取屏幕高度
// 	var getH = function() {
// 		cliH = document.body.clientHeight
// 	};
// 	getH();
// 	window.addEventListener('resize', getH, false);
// 	//touchStart
// 	var touchstart = function(event) {
// 		if (!event.touches.length) {
// 			return;
// 		}
// 		startY = event.touches[0].pageY;
// 		moveY = 0;
// 	};
// 	//touchMove
// 	var touchmove = function(event) {
// 		if (!event.touches.length) {
// 			return;
// 		}
// 		moveY = event.touches[0].pageY - startY;
// 		box2.style.transform = 'translateY(' + (-n * cliH + moveY) + 'px)'; //根据手指的位置移动页面
// 	};
// 	//touchEnd
// 
// 	var touchend = function(event) {
// 		var b20 = document.getElementById("b20");
// 		var b21 = document.getElementById("b21");
// 		var b22 = document.getElementById("b22");
// 		var b23 = document.getElementById("b23");
// 		var b24 = document.getElementById("b24");
// 		// var lineA1 = document.getElementById("lineA1");
// 		//位移小于+-50的不翻页
// 		if (moveY < -50) n++;
// 		if (moveY > 50) n--;
// 		//最后&最前页控制
// 		if (n < 0) n = 0;
// 		if (n > len - 1) n = len - 1;
// 		//重定位
// 		box2.style.transform = 'translateY(' + (-n * 10) + '%)'; //根据百分比位置移动页面
// 		music1.style.animationPlayState = "running";
// 		music2.style.animationPlayState = "running";
// 		music3.style.animationPlayState = "running";
// 		music4.style.animationPlayState = "running";
// 		music5.style.animationPlayState = "running";
// 		music6.style.animationPlayState = "running";
// 		music7.style.animationPlayState = "running";
// 		music8.style.animationPlayState = "running";
// 		music9.style.animationPlayState = "running";
// 		music10.style.animationPlayState = "running";
// 		music11.style.animationPlayState = "running";
// 		music12.style.animationPlayState = "running";
// 		music13.style.animationPlayState = "running";
// 		music14.style.animationPlayState = "running";
// 		music15.style.animationPlayState = "running";
// 		music16.style.animationPlayState = "running";
// 		music17.style.animationPlayState = "running";
// 		music18.style.animationPlayState = "running";
// 		music19.style.animationPlayState = "running";
// 		bgmusic.play();
// 		console.log(n);
// 		if (n == 1) {
// 			b20.style.animation = "bounceInLeft 5s linear 0.2s 1 normal";
// 			b21.style.animation = "bounceInUp 5s linear 0.6s 1 normal";
// 			b22.style.animation = "bounceInUp 5s linear 0.9s 1 normal";
// 			b23.style.animation = "bounceInUp 5s linear 1.2s 1 normal";
// 			b24.style.animation = "bounceInUp 5s linear 1.5s 1 normal";
// 			// lineA1.style.animation = "centerOut 1s linear forwards";
// 		}
// 		if (n == 7) {
// 
// 		}
// 		// 					if (musicState == 1) {
// 		// 						music.style.animationPlayState = "paused";
// 		// 						musicState = 0;
// 		// 						bgmusic.pause();
// 		// 						bgState = 0;
// 		// 
// 		// 					} else if (musicState == 0) {
// 		// 						music.style.animationPlayState = "running";
// 		// 						musicState = 1;
// 		// 						bgmusic.play();
// 		// 						bgState = 1;
// 		// 					}
// 		// 	b21.style.display="";
// 
// 		// 	//style="animation: bounceInUp 5s linear 1.2s 1 normal;"
// 
// 	};
// 	//touch事件绑定
// 	box.addEventListener("touchstart", function(event) {
// 		touchstart(event)
// 	}, false);
// 	box.addEventListener("touchmove", function(event) {
// 		touchmove(event)
// 	}, false);
// 	box.addEventListener("touchend", function(event) {
// 		touchend(event)
// 	}, false);
// };
// pages({
// 	wrap: 'wrap', //.wrap的id
// 	wrap2: 'wrap2', //.wrap2的id
// 	len: 19, //一共有几页
// 	n: 0, //页面一打开默认在第几页？第一页就是0，第二页就是1
// });
// 
// 
// // setInterval(function() {
// // 	var bgmusic = document.getElementById("bgmusic");
// // 	if (bgmusic.paused) { //判读是否播放
// // 		bgmusic.paused = false;
// // 		bgmusic.play(); //没有就播放 
// // 	}
// // }, 1);
// // 			var musicAuto = 0;
// // 
// // 			function toggleSound() {
// // 				var bgmusic = document.getElementById("bgmusic"); //获取ID  
// // 				console.log(bgmusic);
// // 				console.log(bgmusic.paused);
// // 				if (bgmusic.paused) { //判读是否播放  
// // 					bgmusic.paused = false;
// // 					bgmusic.play(); //没有就播放 
// // 					musicAuto = 1;
// // 				}
// // 			}
// // 			if (musicAuto == 0) {
// // 				setInterval("toggleSound()", 1);
// // 			} else if (musicAuto = 1) {
// // 				bgmusic.play(); //没有就播放 
// // 			}
// 
// function once() {
// 	bgmusic.play();
// 	bgState = 1;
// 	window.removeEventListener('touchstart', once, false);
// }
// 
// var bgState = 0;
// var musicState = 1;
// 
// function stoping() {
// 	// var music = document.getElementById("music");
// 	if (musicState == 1) {
// 		music1.style.animationPlayState = "paused";
// 		music2.style.animationPlayState = "paused";
// 		music3.style.animationPlayState = "paused";
// 		music4.style.animationPlayState = "paused";
// 		music5.style.animationPlayState = "paused";
// 		music6.style.animationPlayState = "paused";
// 		music7.style.animationPlayState = "paused";
// 		music8.style.animationPlayState = "paused";
// 		music9.style.animationPlayState = "paused";
// 		music10.style.animationPlayState = "paused";
// 		music11.style.animationPlayState = "paused";
// 		music12.style.animationPlayState = "paused";
// 		music13.style.animationPlayState = "paused";
// 		music14.style.animationPlayState = "paused";
// 		music15.style.animationPlayState = "paused";
// 		music16.style.animationPlayState = "paused";
// 		music17.style.animationPlayState = "paused";
// 		music18.style.animationPlayState = "paused";
// 		music19.style.animationPlayState = "paused";
// 		musicState = 0;
// 		bgmusic.pause();
// 		bgState = 0;
// 
// 	} else if (musicState == 0) {
// 		music1.style.animationPlayState = "running";
// 		music2.style.animationPlayState = "paused";
// 		music3.style.animationPlayState = "running";
// 		music4.style.animationPlayState = "running";
// 		music5.style.animationPlayState = "running";
// 		music6.style.animationPlayState = "running";
// 		music7.style.animationPlayState = "running";
// 		music8.style.animationPlayState = "running";
// 		music9.style.animationPlayState = "running";
// 		music10.style.animationPlayState = "running";
// 		music11.style.animationPlayState = "running";
// 		music12.style.animationPlayState = "running";
// 		music13.style.animationPlayState = "running";
// 		music14.style.animationPlayState = "running";
// 		music15.style.animationPlayState = "running";
// 		music16.style.animationPlayState = "running";
// 		music17.style.animationPlayState = "running";
// 		music18.style.animationPlayState = "running";
// 		music19.style.animationPlayState = "running";
// 		musicState = 1;
// 		bgmusic.play();
// 		bgState = 1;
// 	}
// }
// 
// // if (bgState == 0) {
// // 	music.style.animationPlayState = "paused";
// // } else if (bgState == 1) {
// // 	music.style.animationPlayState = "running";
// // }
// <
// /script>
// 