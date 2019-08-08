// JavaScript Document

//P
function createParagraph(text){
	window.paragraph = document.createElement("P");
	document.body.appendChild(paragraph);
	var textNode = document.createTextNode(text);
	paragraph.appendChild(textNode);
}

function createHeading1(text, location){
	window.heading = document.createElement("h1");
	document.body.appendChild(heading);
	var textNode = document.createTextNode(text);
	heading.appendChild(textNode);
	document.getElementById(location).appendChild(heading);
}
function createHeading2(text, location){
	var heading = document.createElement("h2");
	document.getElementById(location).appendChild(heading);
	var textNode = document.createTextNode(text);
	heading.appendChild(textNode);
	
}

function createDiv(text){
	var Text = document.createElement("div");
	var textNode = document.createTextNode(text);
	Text.appendChild(textNode);
	return Text

}

function createText(text){
	var Text = document.createElement("p");
	var textNode = document.createTextNode(text);
	Text.appendChild(textNode);
	return Text

}

function writeParagraph(text){
	var textNode = document.createTextNode(text);
	paragraph.appendChild(textNode);
}

//h1
function createH1(){
	window.H1 = document.createElement("h1");
	document.body.appendChild(H1);
}

function writeH1(text){
	var textNode = document.createTextNode(text);
	H1.appendChild(textNode);
}
//h2
function createH2(){
	window.H2 = document.createElement("h2");
	document.body.appendChild(H2);
}

function writeH2(text){
	var textNode = document.createTextNode(text);
	H2.appendChild(textNode);
}
//h3
function createH3(){
	window.H3 = document.createElement("h3");
	document.body.appendChild(H3);
}

function writeH3(text){
	var textNode = document.createTextNode(text);
	H3.appendChild(textNode);
}



//DIV
function createDIV(){
	var DIV = document.createElement("div");
	return DIV

}

function writeDIV(text){
	var textNode = document.createTextNode(text);
	DIV.appendChild(textNode);
}
//SPAN
function createSPAN(){
	window.SPAN = document.createElement("span");
	document.body.appendChild(SPAN);
}

function writeSPAN(text){
	var textNode = document.createTextNode(text);
	SPAN.appendChild(textNode);
}
//BUTTON
function createBUTTON(){
	window.btn = document.createElement("BUTTON");
	document.body.appendChild(btn);
	
}

function writeBUTTON(text, func){
	window.btnTextNode = document.createTextNode(text);
	btn.appendChild(btnTextNode);
	btn.onclick = func;
	
}
//TEXT INPUT
function createINPUT(){
	window.INPUT = document.createElement("INPUT");
	INPUT.setAttribute("type", "text");
	document.body.appendChild(INPUT);
}

function writeINPUT(text){
	var textNode = document.createTextNode(text);
	INPUT.setAttribute("value", text);
}
//IMAGE
function createImg(imageSourceURL){
 	var IMAGE = document.createElement("IMG");
	IMAGE.setAttribute("src", imageSourceURL);

return IMAGE;

}

function writeIMAGE(text){
	var textNode = document.createTextNode(text);
	IMAGE.setAttribute("src", text);
}

function labelledTextField(){
	
	//FORM
	var formElement = document.createElement("FORM");
    formElement.setAttribute("id", "myForm");
    document.body.appendChild(formElement);
	
	//LABEL
    var labelElement = document.createElement("LABEL");
    var labelText = document.createTextNode("Label test");
    labelElement.setAttribute("for", "myForm");
    labelElement.appendChild(labelText);
    
	//INPUT
    var inputElement = document.createElement("INPUT");
	inputElement.setAttribute("type", "text");
	inputElement.setAttribute("value", "Input");
    
	//BUTTON
	var btn = document.createElement("BUTTON");
	document.body.appendChild(btn);
	var textNode = document.createTextNode("Search");
	btn.appendChild(textNode);
	document.getElementById("myForm").insertBefore(labelElement,document.getElementById("male"));
	document.getElementById("myForm").appendChild(inputElement);
	
	return {
		label: "Search",
		inputText: "inputText",
		button: "Search"
};
}
