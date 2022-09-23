function delay(URL) {
	setTimeout( function() { window.location = URL }, 2000 );
}

function play() {
	document.getElementById("backgroundVideo").style.animationPlayState = "running";
}

function changeTall(name) {
	var imgState = document.getElementById("character").style.visibility;
	console.log(imgState);
	//if (imgState == "hidden"){
		//console.log(imgState);
		document.getElementById("character").style.visibility = "visible";
	//}
	console.log(name);
	
	switch (name){
		case 'Albedo':
			document.getElementById("character").src = "MondstadtTall/Character_Albedo_Portrait.webp";
			break;
			
	
		case 'Amber':
			document.getElementById("character").src = "MondstadtTall/Character_Amber_Portrait.webp";
			break;
			
		case 'Barbara':
			document.getElementById("character").src = "MondstadtTall/Character_Barbara_Portrait.webp";
			break;
			
	
		case 'Bennett':
			document.getElementById("character").src = "MondstadtTall/Character_Bennett_Portrait.webp";
			break;
			
		case 'Diluc':
			document.getElementById("character").src = "MondstadtTall/Character_Diluc_Portrait.webp";
			break;
			
	
		case 'Diona':
			document.getElementById("character").src = "MondstadtTall/Character_Diona_Portrait.webp";
			break;
			
		case 'Eula':
			document.getElementById("character").src = "MondstadtTall/Character_Eula_Portrait.webp";
			break;
			
	
		case 'Fischl':
			document.getElementById("character").src = "MondstadtTall/Character_Fischl_Portrait.webp";
			break;
			
		case 'Jean':
			document.getElementById("character").src = "MondstadtTall/Character_Jean_Portrait.webp";
			break;
			
	
		case 'Kaeya':
			document.getElementById("character").src = "MondstadtTall/Character_Kaeya_Portrait.webp";
			break;
			
		case 'Klee':
			document.getElementById("character").src = "MondstadtTall/Character_Klee_Portrait.webp";
			break;
			
	
		case 'Lisa':
			document.getElementById("character").src = "MondstadtTall/Character_Lisa_Portrait.webp";
			break;
			
		case 'Mona':
			document.getElementById("character").src = "MondstadtTall/Character_Mona_Portrait.webp";
			break;
			
	
		case 'Noelle':
			document.getElementById("character").src = "MondstadtTall/Character_Noelle_Portrait.webp";
			break;
			
		case 'Razor':
			document.getElementById("character").src = "MondstadtTall/Character_Razor_Portrait.webp";
			break;
			
	
		case 'Rosaria':
			document.getElementById("character").src = "MondstadtTall/Character_Rosaria_Portrait.webp";
			break;
			
		case 'Sucrose':
			document.getElementById("character").src = "MondstadtTall/Character_Sucrose_Portrait.webp";
			break;
			
	
		case 'Venti':
			document.getElementById("character").src = "MondstadtTall/Character_Venti_Portrait.png";
			break;
	}
	
	
}