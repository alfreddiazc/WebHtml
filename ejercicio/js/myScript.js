var boton = document.querySelector('button');

boton.onclick= function(){
	calcular();
}
function calcular(){
	n=parseInt(document.querySelector('#num1').value);
	n2=parseInt(document.querySelector('#num2').value);
	r=n+n2;
	var re =document.querySelector('#result').value=r;
	
}