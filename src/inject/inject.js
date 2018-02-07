var cooldown = false;

function animateHeightUp(id, height){

 var obj_height = document.getElementById(id).offsetHeight;
 if(obj_height >= height){cooldown = true;return; }
 else {
		 document.getElementById(id).style.height = (obj_height + 5) + "px";

		 setTimeout(function(){
				 animateHeightUp(id, height);
		 }, 1)
 }
}


function animateHeightDown(id, height){

	var obj_height = document.getElementById(id).offsetHeight;
  if(obj_height <= height){cooldown = false; return; }
  else {
 		 document.getElementById(id).style.height = (obj_height - 10) + "px";

 		 setTimeout(function(){
 				 animateHeightDown(id, height);
 		 }, 1)
  }
}

function RavintolaArvonta(){
	console.log("arvottu!!!");


}


chrome.extension.sendMessage({}, function(response) {



	function mouseOver(){
		if (!cooldown) {
			animateHeightUp("popup", (window.innerHeight - 100))
			document.getElementById("popup").innerHTML = '\
			<div id="ArvontaOtsikko"> Lounas Arvonta !!!</div> \
			<div id="ArpajaisNappi" onclick="RavintolaArvonta()">ARVO!!!</div>';
		}
	}

	function mouseOut(){
		if (cooldown) {
			animateHeightDown("popup", (window.innerHeight / 10))
			document.getElementById("popup").innerHTML = '\
			<div id="ArvontaOtsikko"> Lounas Arvonta !!!</div>';
		}
	}

	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		document.getElementById("popup").innerHTML = '\
		<div id="ArvontaOtsikko"> Lounas Arvonta</div>';
		document.getElementById("popup").style.display = "block";
		// document.getElementById("popup").style.background = "none";
		document.getElementById("popup").style.height = (window.innerHeight / 10) + "px";
		// document.getElementsByClassName("wrapper")[0].innerHTML = '<div class = "content"> asd </div> <br>'  + oldData;
		document.getElementById("popup").addEventListener("mouseover", mouseOver);
		document.getElementsByClassName("wrapper")[0].addEventListener("mouseover", mouseOut);



	}
	}, 10);



});
