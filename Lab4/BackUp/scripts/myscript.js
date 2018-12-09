function styleChange() {
    document.getElementById("p2").style.color = "#444444";
    document.getElementById("foot").style.fontStyle = "italic";
    document.getElementById("p2").style.fontWeight = "700";
}

function welcome() {
	window.alert("Welcome to #ClevelandFACTS!");
}

function news() {
	var nus, text, nLen, i;

nus = ["Cleveland, Ohio, is the greatest place to live!",
"Cleveland, Ohio, has great sports teams!",
"Cleveland, Ohio, loves its Great Lake!"];
nLen = nus.length;
text = "<ul>";
for (i = 0; i < nLen; i++) {
    text += "<li>" + nus[i] + "</li>";
}
text += "</ul>";
document.getElementById("newslines").innerHTML = text;
}

function years() {
	var x = 2018;
	var y = 1969;
	var z = x - y;
	document.getElementById("years").innerHTML = z;
}

function cdate() {
var today = new Date();
document.getElementById("codate").innerHTML = (today.getFullYear());
}

