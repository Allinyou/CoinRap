function Rem(){
	document.documentElement.style.fontSize = 100*(document.documentElement.clientWidth/750)+'px';
}
Rem();
window.addEventListener('resize',Rem);