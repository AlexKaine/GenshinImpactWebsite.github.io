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
	
		case 'Beidou':
			document.getElementById("character").src = "LiyueTall/Character_Beidou_Portrait.webp";
			break;
			
	
		case 'Chongyun':
			document.getElementById("character").src = "LiyueTall/Character_Chongyun_Portrait.webp";
			break;
			
		case 'Ganyu':
			document.getElementById("character").src = "LiyueTall/Character_Ganyu_Portrait.webp";
			break;
			
	
		case 'Hu_Tao':
			document.getElementById("character").src = "LiyueTall/Character_Hu_Tao_Portrait.webp";
			break;
			
		case 'Keqing':
			document.getElementById("character").src = "LiyueTall/Character_Keqing_Portrait.webp";
			break;
			
	
		case 'Ningguang':
			document.getElementById("character").src = "LiyueTall/Character_Ningguang_Portrait.webp";
			break;
			
		case 'Qiqi':
			document.getElementById("character").src = "LiyueTall/Character_Qiqi_Portrait.webp";
			break;
			
	
		case 'Shenhe':
			document.getElementById("character").src = "LiyueTall/Character_Shenhe_Portrait.png";
			break;
			
		case 'Xiangling':
			document.getElementById("character").src = "LiyueTall/Character_Xiangling_Portrait.webp";
			break;
			
	
		case 'Xiao':
			document.getElementById("character").src = "LiyueTall/Character_Xiao_Portrait.webp";
			break;
			
		case 'Xingqiu':
			document.getElementById("character").src = "LiyueTall/Character_Xingqiu_Portrait.webp";
			break;
			
	
		case 'Xinyan':
			document.getElementById("character").src = "LiyueTall/Character_Xinyan_Portrait.webp";
			break;
			
		case 'Yanfei':
			document.getElementById("character").src = "LiyueTall/Character_Yanfei_Portrait.webp";
			break;
	
		case 'Yelan':
			document.getElementById("character").src = "LiyueTall/Character_Yelan_Portrait.webp";
			break;
		
		case 'Yun_Jin':
			document.getElementById("character").src = "LiyueTall/Character_Yun_Jin_Portrait.webp";
			break;
			
	
		case 'Zhongli':
			document.getElementById("character").src = "LiyueTall/Character_Zhongli_Portrait.webp";
			break;
			
		case 'Collei':
			document.getElementById("character").src = "SumeruTall/Character_Collei_Portrait.webp";
			break;
		
		case 'Dori':
			document.getElementById("character").src = "SumeruTall/Character_Dori_Portrait.webp";
			break;
			
	
		case 'Tighnari':
			document.getElementById("character").src = "SumeruTall/Character_Tighnari_Portrait.webp";
			break;
			
		case 'Arataki_Itto':
			document.getElementById("character").src = "InazumaTall/Character_Arataki_Itto_Portrait.webp";
			break;
			
		case 'Gorou':
			document.getElementById("character").src = "InazumaTall/Character_Gorou_Portrait.webp";
			break;
			
		case 'Kaedehara_Kazuha':
			document.getElementById("character").src = "InazumaTall/Character_Kaedehara_Kazuha_Portrait.webp";
			break;
			
		case 'Kamisato_Ayaka':
			document.getElementById("character").src = "InazumaTall/Character_Kamisato_ayaka_Portrait.webp";
			break;
			
		case 'Kamisato_Ayato':
			document.getElementById("character").src = "InazumaTall/Character_Kamisato_Ayato_Portrait.webp";
			break;
			
		case 'Kujou_Sara':
			document.getElementById("character").src = "InazumaTall/Character_Kujou_Sara_Portrait.webp";
			break;
			
		case 'Kuki_Shinobu':
			document.getElementById("character").src = "InazumaTall/Character_Kuki_Shinobu_Portrait.webp";
			break;
			
		case 'Raiden_Shougun':
			document.getElementById("character").src = "InazumaTall/Character_Raiden_Shogun_Portrait.webp";
			break;
	
		case 'Sangonomiya_Kokomi':
			document.getElementById("character").src = "InazumaTall/Character_Sangonomiya_Kokomi_Portrait.webp";
			break;
		
		case 'Sayu':
			document.getElementById("character").src = "InazumaTall/Character_Sayu_Portrait.webp";
			break;
			
	
		case 'Shikanoin_Heizou':
			document.getElementById("character").src = "InazumaTall/Character_Shikanoin_Heizou_Portrait.webp";
			break;
			
		case 'Thoma':
			document.getElementById("character").src = "InazumaTall/Character_Thoma_Portrait.webp";
			break;
		
		case 'Yae_Miko':
			document.getElementById("character").src = "InazumaTall/Character_Yae_Miko_Portrait.webp";
			break;
			
	
		case 'Yoimiya':
			document.getElementById("character").src = "InazumaTall/Character_Yoimiya_Portrait.webp";
			break;
				
	}	
}

function openNav() {
	document.getElementById("defaultSidebar").style.width = "250px";
	document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
	document.getElementById("defaultSidebar").style.width = "0px";
	document.getElementById("main").style.marginLeft = "0px";
}

