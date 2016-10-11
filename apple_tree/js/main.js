// JavaScript Document
window.onload = function(){
	var land = document.getElementById("land");
	var arrleft = [367,437,507,577,647,317,387,457,527,597,257,327,397,467,537,187,257,337,407,117,187,257,337,37,117,187,267];
	var arrtop = [204,210,226,238,248,230,240,250,265,275,260,270,285,300,310,290,300,315,330,320,335,350,365,360,375,390,410];
	var titles = ["张一","张二","张三","张思","张武","李毅","李二","李三","李四","李武","宋毅","宋轶","宋琦","宋琪","宋奇","许嵩","Terry","Larry","Tom","Vicky","lala","bobo","cici","baby","haha","xixi","poppy"];
	for(var i = 0;i<27;i++){
		var newTree = document.createElement("img");
		console.log(newTree);
		newTree.style.left = arrleft[i]+"px";
		newTree.style.top = arrtop[i]+"px";
		newTree.title = titles[i];
		land.appendChild(newTree);
		newTree.onclick = function(){
				window.open("http://localhost/web1/apple_tree/student.html","_blank");
			}
		}
}