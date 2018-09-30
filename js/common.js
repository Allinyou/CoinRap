function Rem(){
	document.documentElement.style.fontSize = 100*(document.documentElement.clientWidth/750)+'px';
}
Rem();
window.addEventListener('resize',Rem);

window.onload = function () {
	var menuBtn = document.querySelector('.option-h5 .menu');
	var h5Slide = document.querySelector('.h5-slide');
	var slideBox = document.querySelector('.h5-slide .slide-box');
	menuBtn.onclick = function () {
		h5Slide.classList.add('active');
	}
	h5Slide.onclick = function () {
		h5Slide.classList.remove('active');
	}
	slideBox.onclick = function(e) {
		e.stopPropagation();
	}
}