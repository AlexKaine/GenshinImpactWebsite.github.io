function delay(URL) {
	setTimeout( function() { window.location = URL }, 2000 );
}

function play() {
	document.getElementById("backgroundVideo").style.animationPlayState = "running";
}