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
		document.getElementsByClassName("content_box1")[0].style.backgroundColor = "rgb(186, 57, 51)";
		document.getElementById("blog_img").src = "./media/sect1-red-blog.png";
		document.getElementsByClassName("left_imgs")[0].innerHTML = "<img src='sect1-red-spoon.png' style='width:367px;height:396px;'><img src='sect1-red-whisk.png'><img src='sect1-red-eggs.png'><img src='sect1-red-cherries.png'>";
		circle = 1;
	}else if(circle === 1){
		document.getElementsByClassName("content_box1")[0].style.backgroundColor = "rgb(60, 141, 128)";
		document.getElementsByClassName("left_imgs")[0].innerHTML = "<img src='sect1-green-coffee.png'><img src='sect1-green-flower.png'><img src='sect1-green-letter_c.png'><img src='sect1-green-soccer_ball.png'>";
		document.getElementById("blog_img").src = "./media/sect1-green-blog.png";
		circle = 2;
		// mainContent.style.backgroundColor = "rgb(72, 132, 169)";
	}else{
		document.getElementsByClassName("content_box1")[0].style.backgroundColor = "rgb(72, 132, 169)";
		document.getElementsByClassName("left_imgs")[0].innerHTML = "<img src='sect1-blue-drone.png'><img src='sect1-blue-phone.png'><img src='sect1-blue-thermostat.png'>";
		document.getElementById("blog_img").src = "./media/sect1-blue-blog.png";
		circle = 0;
	}
}, 3000);
