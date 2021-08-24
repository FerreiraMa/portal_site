var slideItem = 0;
window.onload = function() {
	setInterval(passarSlide, 2000);

	var slidewidth = document.getElementById("slideshow").offsetWidth;
	var objs = document.getElementsByClassName("slide");
	for(var i=0;i<objs.length;i++) {
		objs[i].style.width = slidewidth+"px";
	}
}
function passarSlide() {
    var bolinhas = document.getElementsByClassName("bolinha");
	var slidewidth = document.getElementById("slideshow").offsetWidth;
	if(slideItem >= 3) {
		slideItem = 0;
        bolinhas[3].style.backgroundColor = "#CCC";      
	} else {
		slideItem++;
        bolinhas[slideItem -1].style.backgroundColor = "#CCC";
	}

	document.getElementsByClassName("slideshowarea")[0].style.marginLeft = "-"+(slidewidth * slideItem)+"px";
}
function mudarSlide(pos) {
	slideItem = pos;
	var slidewidth = document.getElementById("slideshow").offsetWidth;
	document.getElementsByClassName("slideshowarea")[0].style.marginLeft = "-"+(slidewidth * slideItem)+"px";
    var bolinhas = document.getElementsByClassName("bolinha");
    for (var i = 0; i < bolinhas.length; i++) {
    bolinhas[i].style.backgroundColor = "#CCC";
    }
    bolinhas[pos].style.backgroundColor = "#FF0000";
        
}

function toggleMenu() {

	var menu = document.getElementById("menu");

	if (menu.style.display == 'none' || menu.style.display == '') {
		menu.style.display = "block";
	} else {
		menu.style.display = "none";
	}

}