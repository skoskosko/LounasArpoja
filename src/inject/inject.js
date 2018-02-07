var cooldown = false;
var ArvontaCooldown = false;
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

	if(!ArvontaCooldown){
		ArvontaCooldown = true;
		var nodes = document.getElementsByClassName("item-container")[0].childNodes;
		console.log(nodes);
			for(var i = 0; i < 10; i++){

				var nod = nodes[Math.floor(Math.random() * nodes.length)];

				try{
					if(nod.className.indexOf("menu item") !== -1){
						//document.getElementById("ItemArea").innerHTML = '';
						//nod.style = "";
						
						//document.getElementById("ItemArea").appendChild(nod);
						wait(100);
					}else{
						i--;
					}
				}catch(err){
					i--;
				}

			}
			ArvontaCooldown = false;
	}




}






	function mouseOver(){
		if (!cooldown) {
			animateHeightUp("popup", (window.innerHeight - 100))
			document.getElementById("ArpajaisNappi").style.display = "block";
		}
	}

	function mouseOut(){
		if (cooldown) {
			animateHeightDown("popup", (window.innerHeight / 10))
			document.getElementById("ArpajaisNappi").style.display = "none";
		}
	}

	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {





		clearInterval(readyStateCheckInterval);

		document.getElementById("popup").innerHTML = '\
		<div id="ArvontaOtsikko"> Lounas Arvonta</div>\
		<div id="ArpajaisNappi">Arvo!<div>\
		<div id="ItemArea"><div>';
		document.getElementById("popup").style.display = "block";
		document.getElementById("ArpajaisNappi").style.display = "none";
		// document.getElementById("popup").style.background = "none";
		document.getElementById("popup").style.height = (window.innerHeight / 10) + "px";
		// document.getElementsByClassName("wrapper")[0].innerHTML = '<div class = "content"> asd </div> <br>'  + oldData;
		document.getElementById("popup").addEventListener("mouseover", mouseOver);
		document.getElementsByClassName("wrapper")[0].addEventListener("mouseover", mouseOut);
		document.getElementById("ArpajaisNappi").onclick = RavintolaArvonta;


	}
	}, 10);
