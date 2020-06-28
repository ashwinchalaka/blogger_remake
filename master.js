var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;

    if (currentScrollPos > 60) {
        document.getElementsByClassName("navbarClosed")[0].className = "navbar";
    } else if (currentScrollPos < 60) {
        document.getElementsByClassName("navbar")[0].className = "navbarClosed";
    }
  
    prevScrollpos = currentScrollPos;
}


var circle = 0;
setInterval(function(){
	if(circle === 0){
		document.getElementsByClassName("main_page")[0].style.backgroundColor = "rgb(186, 57, 51)";
		// mainContent.style.backgroundColor = "rgb(60, 141, 128)";
		circle = 1;
	}else if(circle === 1){
		document.getElementsByClassName("main_page")[0].style.backgroundColor = "rgb(60, 141, 128)";
		circle = 2;
		// mainContent.style.backgroundColor = "rgb(72, 132, 169)";
	}else{
		document.getElementsByClassName("main_page")[0].style.backgroundColor = "rgb(72, 132, 169)";
		circle = 0;
	}
}, 5000);
