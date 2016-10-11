// JavaScript Document
 window.onload = function(){
	 	var left = document.getElementById("left");
		console.log(left);
		var redArr=[{top:"300px",left:"350px"},{top:"200px",left:"350px"},{top:"300px",left:"540px"},{top:"250px",left:"450px"},{top:"190px",left:"470px"}]
		var yellowArr=[{top:"300px",left:"200px"},{top:"360px",left:"190px"},{top:"265px",left:"310px"},{top:"150px",left:"350px"},{top:"170px",left:"200px"}]
		var greenArr=[{top:"180px",left:"100px"},{top:"180px",left:"200px"},{top:"260px",left:"350px"},{top:"360px",left:"300px"},{top:"290px",left:"210px"}]
		for (var j=0; j<5;j++){
			var newRedApple = document.createElement("img");
			console.log(newRedApple);
			newRedApple.src = " images/icon-04.png";
			newRedApple.style.position = "relative";
			newRedApple.style.left = redArr[j].left;
			newRedApple.style.top = redArr[j].top;
			left.appendChild(newRedApple);
			console.log(newRedApple);
			newRedApple.onclick = function(){
					var tab = document.getElementById("tab");
					tab.style.display = "block"; 
				}
			
			}
		for (var j=0; j<5;j++){
			var newYellowApple = document.createElement("img");
			console.log(newYellowApple);
			newYellowApple.src = " images/icon-06.png";
			newYellowApple.style.position = "relative";
			newYellowApple.style.left = yellowArr[j].left;
			newYellowApple.style.top = yellowArr[j].top;
			left.appendChild(newYellowApple);
			console.log(newYellowApple);
			newYellowApple.onclick = function(){
					var tab = document.getElementById("tab");
					tab.style.display = "block"; 
				}
			
			}
		for (var j=0; j<5;j++){
			var newGreenApple = document.createElement("img");
			console.log(newGreenApple);
			newGreenApple.src = " images/icon-05.png";
			newGreenApple.style.position = "relative";
			newGreenApple.style.left = greenArr[j].left;
			newGreenApple.style.top = greenArr[j].top;
			left.appendChild(newGreenApple);
			console.log(newGreenApple);
			newGreenApple.onclick = function(){
					var tab = document.getElementById("tab");
					tab.style.display = "block"; 
				}
			
			}
		
		
	}
	 