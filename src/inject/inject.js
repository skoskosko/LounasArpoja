var cooldown = false;

function animateHeightUp(id, height) {

    var obj_height = document.getElementById(id).offsetHeight;
    if (obj_height >= height) {
        cooldown = true;
        return;
    } else {
        document.getElementById(id).style.height = (obj_height + 5) + "px";

        setTimeout(function() {
            animateHeightUp(id, height);
        }, 1)
    }
}


function animateHeightDown(id, height) {

    var obj_height = document.getElementById(id).offsetHeight;
    if (obj_height <= height) {
        cooldown = false;
        return;
    } else {
        document.getElementById(id).style.height = (obj_height - 10) + "px";

        setTimeout(function() {
            animateHeightDown(id, height);
        }, 1)
    }
}


function rotateitem(node, val, to) {

    setTimeout(function() {
        node.style.webkitTransform = 'rotate(' + val + 'deg)';
        node.style.mozTransform = 'rotate(' + val + 'deg)';
        node.style.msTransform = 'rotate(' + val + 'deg)';
        node.style.oTransform = 'rotate(' + val + 'deg)';
        node.style.transform = 'rotate(' + val + 'deg)';
        val++;
        if (val >= to) {
            return;
        } else {
            rotateitem(node, val, to);
        }
    }, 2);

}


function RavintolaArvonta() {
    mouseOut()
    var nodes = document.getElementsByClassName("item-container")[0].childNodes;
    while (true) {
        var nod = nodes[Math.floor(Math.random() * nodes.length)];
        try {
            if (nod.className.indexOf("menu item") !== -1) {
                break;
            }
        } catch (err) {
            console.log(err);
        }
    }
    var str = nod.style.top.substring(0, nod.style.top.length - 2);
    window.scrollTo(0, parseInt(str));
    rotateitem(nod, 0, 1000);
    setTimeout(function() {
        base = nod.children[0].children[1].baseURI;
        str = nod.children[0].children[1].innerHTML;
        str = str.substring(str.indexOf('"/') + 2);
        str = str.substring(0, str.indexOf('"'));
        location.href = base + str;
    }, 3000);
}


function mouseOver() {
    if (!cooldown) {
        animateHeightUp("popup", (100))
        document.getElementById("ArpajaisNappi").style.display = "block";
    }
}

function mouseOut() {
    if (cooldown) {
        animateHeightDown("popup", (50))
        document.getElementById("ArpajaisNappi").style.display = "none";
    }
}


var readyStateCheckInterval = setInterval(function() {
    if (document.readyState === "complete") {
        clearInterval(readyStateCheckInterval);
        document.getElementById("popup").innerHTML = '\
		      <div id="ArvontaOtsikko"> Lounas Arvonta</div>\
		      <div id="ArpajaisNappi">Arvo!<div>';
        document.getElementById("popup").style.display = "block";
        document.getElementById("ArpajaisNappi").style.display = "none";
        document.getElementById("popup").style.height = (50) + "px";
        document.getElementById("popup").addEventListener("mouseover", mouseOver);
        document.getElementsByClassName("wrapper")[0].addEventListener("mouseover", mouseOut);
        document.getElementsByClassName("header")[0].addEventListener("mouseover", mouseOut);
        document.getElementsByClassName("ad-container")[0].addEventListener("mouseover", mouseOut);
        document.getElementById("ArpajaisNappi").onclick = RavintolaArvonta;
    }
}, 10);
