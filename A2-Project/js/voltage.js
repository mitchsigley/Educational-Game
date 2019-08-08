// JavaScript Document


var currentDraggingObject = null;
function allowDrop(){
	event.preventDefault();
}
function onItemDragStart(event){
	currentDraggingObject = event.target;
	event.dataTransfer.setData("text", event.target.id);
	console.log(event.target.id + " has been picked up")
}

function createOnBoxDropFunction(itemSlot) {
	return function(event) {
		console.log("Dropping on " + itemSlot.id)
		//error check
		if (currentDraggingObject == null) return;
		
		//if item slot doesnt contain item
		if (itemSlot.contains(item1 || item2 || item3 || item4 || item5 || item6)){
			console.log("Slot was filled");
			
		}else{
			//fill that slot with the dragging tile
			console.log("Slot was empty");
			itemSlot.appendChild(currentDraggingObject);}
			
		
		//Check if level has been won based on what level is currnetly active
		switch(level) {
    case "level1":
		checkIfWon1()
        break;
    case "level2":
		checkIfWon2()
        break;
	case "level3":
		checkIfWon3()
        break;
	case "level4":
		checkIfWon4()
        break;
	case "level5":
		checkIfWon5()
        break;
	case "level6":
		checkIfWon6()
        break;
	case "level7":
		checkIfWon7()
        break;
	case "level8":
		checkIfWon8()
        break;
	case "level9":
		checkIfWon9()
        break;
	case "level10":
		checkIfWon10()
        break;
}					
		event.preventDefault();
		var data = event.dataTransfer.getData("text");
	}
}

function Initialise() {
	console.log("Initialised")
	
	//Clear the content of each slot
	itemSlot1.innerHTML = "";
	itemSlot2.innerHTML = "";
	itemSlot3.innerHTML = "";
	itemSlot4.innerHTML = "";
	itemSlot5.innerHTML = "";
	itemSlot6.innerHTML = "";
	itemSlot7.innerHTML = "";
	itemSlot8.innerHTML = "";
	itemSlot9.innerHTML = "";
	itemSlot10.innerHTML = "";
	itemSlot11.innerHTML = "";
	itemSlot12.innerHTML = "";
	itemSlot13.innerHTML = "";
	itemSlot14.innerHTML = "";
	itemSlot15.innerHTML = "";
	
	//unhide all slots by removing the class and adding it back to all slots
	itemSlot1.classList.remove("itemSlot");
	itemSlot2.classList.remove("itemSlot");
	itemSlot3.classList.remove("itemSlot");
	itemSlot4.classList.remove("itemSlot");
	itemSlot5.classList.remove("itemSlot");
	itemSlot6.classList.remove("itemSlot");
	itemSlot7.classList.remove("itemSlot");
	itemSlot8.classList.remove("itemSlot");
	itemSlot9.classList.remove("itemSlot");
	itemSlot10.classList.remove("itemSlot");
	itemSlot11.classList.remove("itemSlot");
	itemSlot12.classList.remove("itemSlot");
	itemSlot13.classList.remove("itemSlot");
	itemSlot14.classList.remove("itemSlot");
	itemSlot15.classList.remove("itemSlot");
	itemSlot1.classList.add("itemSlot");
	itemSlot2.classList.add("itemSlot");
	itemSlot3.classList.add("itemSlot");
	itemSlot4.classList.add("itemSlot");
	itemSlot5.classList.add("itemSlot");
	itemSlot6.classList.add("itemSlot");
	itemSlot7.classList.add("itemSlot");
	itemSlot8.classList.add("itemSlot");
	itemSlot9.classList.add("itemSlot");
	itemSlot10.classList.add("itemSlot");
	itemSlot11.classList.add("itemSlot");
	itemSlot12.classList.add("itemSlot");
	itemSlot13.classList.add("itemSlot");
	itemSlot14.classList.add("itemSlot");
	itemSlot15.classList.add("itemSlot");

	//Set game grid spaces
	var itemSlot = itemSlot1
	itemSlot.ondrop = createOnBoxDropFunction(itemSlot);
	itemSlot.ondragover = allowDrop;
	itemSlot.mySlot = "1";
	
	var itemSlot = itemSlot2
	itemSlot.ondrop = createOnBoxDropFunction(itemSlot);
	itemSlot.ondragover = allowDrop;
	itemSlot.mySlot = "2";
	
	var itemSlot = itemSlot3
	itemSlot.ondrop = createOnBoxDropFunction(itemSlot);
	itemSlot.ondragover = allowDrop;
	itemSlot.mySlot = "3";
	
	var itemSlot = itemSlot4
	itemSlot.ondrop = createOnBoxDropFunction(itemSlot);
	itemSlot.ondragover = allowDrop;
	itemSlot.mySlot = "4";
	
	var itemSlot = itemSlot5
	itemSlot.ondrop = createOnBoxDropFunction(itemSlot);
	itemSlot.ondragover = allowDrop;
	itemSlot.mySlot = "5";
	
	var itemSlot = itemSlot6
	itemSlot.ondrop = createOnBoxDropFunction(itemSlot);
	itemSlot.ondragover = allowDrop;
	itemSlot.mySlot = "6";
		
	var itemSlot = itemSlot7
	itemSlot.ondrop = createOnBoxDropFunction(itemSlot);
	itemSlot.ondragover = allowDrop;
	itemSlot.mySlot = "7";
		
	var itemSlot = itemSlot8
	itemSlot.ondrop = createOnBoxDropFunction(itemSlot);
	itemSlot.ondragover = allowDrop;
	itemSlot.mySlot = "8";
		
	var itemSlot = itemSlot9
	itemSlot.ondrop = createOnBoxDropFunction(itemSlot);
	itemSlot.ondragover = allowDrop;
	itemSlot.mySlot = "9";	
	
	var itemSlot = itemSlot10
	itemSlot.ondrop = createOnBoxDropFunction(itemSlot);
	itemSlot.ondragover = allowDrop;
	itemSlot.mySlot = "10";	
	
	var itemSlot = itemSlot11
	itemSlot.ondrop = createOnBoxDropFunction(itemSlot);
	itemSlot.ondragover = allowDrop;
	itemSlot.mySlot = "11";	
		
	var itemSlot = itemSlot12
	itemSlot.ondrop = createOnBoxDropFunction(itemSlot);
	itemSlot.ondragover = allowDrop;
	itemSlot.mySlot = "12";	
		
	var itemSlot = itemSlot13
	itemSlot.ondrop = createOnBoxDropFunction(itemSlot);
	itemSlot.ondragover = allowDrop;
	itemSlot.mySlot = "13";
		
	var itemSlot = itemSlot14
	itemSlot.ondrop = createOnBoxDropFunction(itemSlot);
	itemSlot.ondragover = allowDrop;
	itemSlot.mySlot = "14";
	
	var itemSlot = itemSlot15
	itemSlot.ondrop = createOnBoxDropFunction(itemSlot);
	itemSlot.ondragover = allowDrop;
	itemSlot.mySlot = "15";
}
//LEVEL 1//
	function startLevel1() {
	window.level = "level1";
	console.log("level 1 started")
	//Inventory 
	//Create inventory elements 
	//draw the image
	var itemImage1 = createImg("images/item1.png");
	itemImage1.id = ("item1");
	itemImage1.mySlot = ("1");
	itemImage1.classList.add("item");
	//make the tile draggable
	itemImage1.setAttribute("draggable", "true");
	//start the dragging function when the tile is being held
	itemImage1.ondragstart = onItemDragStart;
	//put this tile inside the first inventory slot
	invItemSlot1.appendChild(itemImage1);
	//Let the tiles be able to be dropped back in the inventory
	invItemSlot1.ondrop = createOnBoxDropFunction(invItemSlot1);
	invItemSlot1.ondragover = allowDrop;
	
	var itemImage2 = createImg("images/item2.png");
	itemImage2.id = ("item2");
	itemImage2.mySlot = ("2");
	itemImage2.classList.add("item");
	itemImage2.setAttribute("draggable", "true");
	itemImage2.ondragstart = onItemDragStart;
	invItemSlot2.appendChild(itemImage2);
	invItemSlot2.ondrop = createOnBoxDropFunction(invItemSlot2);
	invItemSlot2.ondragover = allowDrop;
	
	var itemImage3 = createImg("images/item3.png");
	itemImage3.id = ("item3");
	itemImage3.mySlot = ("3");
	itemImage3.classList.add("item");
	itemImage3.setAttribute("draggable", "true");
	itemImage3.ondragstart = onItemDragStart;
	invItemSlot3.appendChild(itemImage3);
	invItemSlot3.ondrop = createOnBoxDropFunction(invItemSlot3);
	invItemSlot3.ondragover = allowDrop;
	
	var itemImage4 = createImg("images/item4.png");
	itemImage4.id = ("item4");
	itemImage4.mySlot = ("4");
	itemImage4.classList.add("item");
	itemImage4.setAttribute("draggable", "true");
	itemImage4.ondragstart = onItemDragStart;
	invItemSlot4.appendChild(itemImage4);
	invItemSlot4.ondrop = createOnBoxDropFunction(invItemSlot4);
	invItemSlot4.ondragover = allowDrop;
	
	var itemImage5 = createImg("images/item5.png");
	itemImage5.id = ("item5");
	itemImage5.mySlot = ("5");
	itemImage5.classList.add("item");
	itemImage5.setAttribute("draggable", "true");
	itemImage5.ondragstart = onItemDragStart;
	invItemSlot5.appendChild(itemImage5);
	invItemSlot5.ondrop = createOnBoxDropFunction(invItemSlot5);
	invItemSlot5.ondragover = allowDrop;
	
	var itemImage6 = createImg("images/item6.png");
	itemImage6.id = ("item6");
	itemImage6.mySlot = ("6");
	itemImage6.classList.add("item");
	itemImage6.setAttribute("draggable", "true");
	itemImage6.ondragstart = onItemDragStart;
	invItemSlot6.appendChild(itemImage6);
	invItemSlot6.ondrop = createOnBoxDropFunction(invItemSlot6);
	invItemSlot6.ondragover = allowDrop;
		
	//Start and End Slots
	var orangeImage = src="images/end.png";
	var startImage = createImg("images/start.png");
	var endImage = createImg(orangeImage);
	startImage.classList.add("item");
	endImage.classList.add("item");
	startImage.setAttribute("draggable", "false");
	endImage.setAttribute("draggable", "false");
	itemSlot1.appendChild(startImage);
	itemSlot1.ondragover = null;
	itemSlot10.appendChild(endImage);
	itemSlot10.ondragover = null;
		
	//Hidden Slots
	itemSlot1.classList.remove("itemSlot");
	itemSlot1.classList.add("itemSlotHidden");
	itemSlot6.classList.remove("itemSlot");
	itemSlot6.classList.add("itemSlotHidden");
	itemSlot5.classList.remove("itemSlot");
	itemSlot5.classList.add("itemSlotHidden");
	itemSlot10.classList.remove("itemSlot");
	itemSlot10.classList.add("itemSlotHidden");
	itemSlot11.classList.remove("itemSlot");
	itemSlot11.classList.add("itemSlotHidden");
	itemSlot15.classList.remove("itemSlot");
	itemSlot15.classList.add("itemSlotHidden");
	
	//Create numbers for the voltage (these are just for looks and to guide the playing to the correct path)
	var number = createDiv("+10V");
	number.id = "number1";
	itemSlot2.appendChild(number);
	number.classList.add("itemSlotNumberPlus");
		
	var number = createDiv("+10V");
	number.id = "number2";
	itemSlot7.appendChild(number);
	number.classList.add("itemSlotNumberPlus");
		
	var number = createDiv("+10V");
	number.id = "number3";
	itemSlot8.appendChild(number);
	number.classList.add("itemSlotNumberPlus");
		
	//Change Target Voltage
	document.getElementById("targetVoltage").innerHTML = "";
	createHeading2("30V", "targetVoltage")
		
	//Change Level Name
	document.getElementById("levelBox").innerHTML = "";
	createHeading1("Level 1", "levelBox")
}
function checkIfWon1(){
	if (itemSlot2.contains(item2) && itemSlot7.contains(item5) && itemSlot12.contains(item3) && itemSlot13.contains(item4) && itemSlot8.contains(item1)&& itemSlot9.contains(item6)
	){ 
		console.log("LEVEL WON");
		//change top battery to green
		battery.classList.add("batteryGreen");
		
		//remove orange battery image and replace with green
		itemSlot10.innerHTML = "";
		var startImage = createImg("images/start.png");
		startImage.classList.add("item");
		itemSlot10.appendChild(startImage);
			var delayInMilliseconds = 3000; //3 seconds
			setTimeout(function() {
			battery.classList.remove("batteryGreen");
			Initialise();
			startLevel2();
			}, delayInMilliseconds);
		
	}else{
		console.log("Level 1 not finished")
	}
}
//LEVEL 2//
	function startLevel2() {
		window.level = "level2";
	console.log("level 2 started")
	//Inventory 
	var itemImage1 = createImg("images/item1.png");
	itemImage1.id = ("item1");
	itemImage1.mySlot = ("1");
	itemImage1.classList.add("item");
	itemImage1.setAttribute("draggable", "true");
	itemImage1.ondragstart = onItemDragStart;
	invItemSlot1.appendChild(itemImage1);
	invItemSlot1.ondrop = createOnBoxDropFunction(invItemSlot1);
	invItemSlot1.ondragover = allowDrop;
	
	var itemImage2 = createImg("images/item2.png");
	itemImage2.id = ("item2");
	itemImage2.mySlot = ("2");
	itemImage2.classList.add("item");
	itemImage2.setAttribute("draggable", "true");
	itemImage2.ondragstart = onItemDragStart;
	invItemSlot2.appendChild(itemImage2);
	invItemSlot2.ondrop = createOnBoxDropFunction(invItemSlot2);
	invItemSlot2.ondragover = allowDrop;
	
	var itemImage3 = createImg("images/item3.png");
	itemImage3.id = ("item3");
	itemImage3.mySlot = ("3");
	itemImage3.classList.add("item");
	itemImage3.setAttribute("draggable", "true");
	itemImage3.ondragstart = onItemDragStart;
	invItemSlot3.appendChild(itemImage3);
	invItemSlot3.ondrop = createOnBoxDropFunction(invItemSlot3);
	invItemSlot3.ondragover = allowDrop;
	
	var itemImage4 = createImg("images/item4.png");
	itemImage4.id = ("item4");
	itemImage4.mySlot = ("4");
	itemImage4.classList.add("item");
	itemImage4.setAttribute("draggable", "true");
	itemImage4.ondragstart = onItemDragStart;
	invItemSlot4.appendChild(itemImage4);
	invItemSlot4.ondrop = createOnBoxDropFunction(invItemSlot4);
	invItemSlot4.ondragover = allowDrop;
	
	var itemImage5 = createImg("images/item5.png");
	itemImage5.id = ("item5");
	itemImage5.mySlot = ("5");
	itemImage5.classList.add("item");
	itemImage5.setAttribute("draggable", "true");
	itemImage5.ondragstart = onItemDragStart;
	invItemSlot5.appendChild(itemImage5);
	invItemSlot5.ondrop = createOnBoxDropFunction(invItemSlot5);
	invItemSlot5.ondragover = allowDrop;
	
	var itemImage6 = createImg("images/item6.png");
	itemImage6.id = ("item6");
	itemImage6.mySlot = ("6");
	itemImage6.classList.add("item");
	itemImage6.setAttribute("draggable", "true");
	itemImage6.ondragstart = onItemDragStart;
	invItemSlot6.appendChild(itemImage6);
	invItemSlot6.ondrop = createOnBoxDropFunction(invItemSlot6);
	invItemSlot6.ondragover = allowDrop;
		
	//Start and End Slots
	var orangeImage = src="images/end.png";
	var startImage = createImg("images/start.png");
	var endImage = createImg(orangeImage);
	startImage.classList.add("item");
	endImage.classList.add("item");
	startImage.setAttribute("draggable", "false");
	endImage.setAttribute("draggable", "false");
	itemSlot1.appendChild(startImage);
	itemSlot1.ondragover = null;
	itemSlot10.appendChild(endImage);
	itemSlot10.ondragover = null;
		
	//Hidden Slots
	itemSlot1.classList.remove("itemSlot");
	itemSlot1.classList.add("itemSlotHidden");
	itemSlot6.classList.remove("itemSlot");
	itemSlot6.classList.add("itemSlotHidden");
	itemSlot5.classList.remove("itemSlot");
	itemSlot5.classList.add("itemSlotHidden");
	itemSlot10.classList.remove("itemSlot");
	itemSlot10.classList.add("itemSlotHidden");
	itemSlot11.classList.remove("itemSlot");
	itemSlot11.classList.add("itemSlotHidden");
	itemSlot15.classList.remove("itemSlot");
	itemSlot15.classList.add("itemSlotHidden");
	
	//Create numbers for the voltage (these are just for looks and to guide the playing to the correct path)
	var number = createDiv("+15");
	number.id = "number1";
	itemSlot2.appendChild(number);
	number.classList.add("itemSlotNumberPlus");
		
	var number = createDiv("+15V");
	number.id = "number2";
	itemSlot7.appendChild(number);
	number.classList.add("itemSlotNumberPlus");
		
	var number = createDiv("+25V");
	number.id = "number2";
	itemSlot3.appendChild(number);
	number.classList.add("itemSlotNumberPlus");
		
	var number = createDiv("+10V");
	number.id = "number3";
	itemSlot9.appendChild(number);
	number.classList.add("itemSlotNumberPlus");
		
	var number = createDiv("-15V");
	number.id = "number3";
	itemSlot14.appendChild(number);
	number.classList.add("itemSlotNumberMinus");
	
	//Change Target Voltage
	document.getElementById("targetVoltage").innerHTML = "";
	createHeading2("25V", "targetVoltage")
		
	//Change Level Name
	document.getElementById("levelBox").innerHTML = "";
	createHeading1("Level 2", "levelBox")
}
function checkIfWon2(){
	if (itemSlot2.contains(item2) && itemSlot7.contains(item5) && itemSlot12.contains(item3) && itemSlot13.contains(item6) && itemSlot9.contains(item1)&& itemSlot14.contains(item4)
	){ 
		console.log("LEVEL WON");
		//change top battery green
		battery.classList.add("batteryGreen");
		//change end battery to green
		itemSlot10.innerHTML = "";
		var startImage = createImg("images/start.png");
		startImage.classList.add("item");
		itemSlot10.appendChild(startImage);
			var delayInMilliseconds = 3000; //1 second
			setTimeout(function() {
			battery.classList.remove("batteryGreen");
			Initialise();
			startLevel3();
			}, delayInMilliseconds);
		
	}else{
		console.log("Level 2 not finished")
	}
}
//LEVEL 3//
	function startLevel3() {
		window.level = "level3";
	console.log("level 3 started")
	//Inventory 
	var itemImage1 = createImg("images/item1.png");
	itemImage1.id = ("item1");
	itemImage1.mySlot = ("1");
	itemImage1.classList.add("item");
	itemImage1.setAttribute("draggable", "true");
	itemImage1.ondragstart = onItemDragStart;
	invItemSlot1.appendChild(itemImage1);
	invItemSlot1.ondrop = createOnBoxDropFunction(invItemSlot1);
	invItemSlot1.ondragover = allowDrop;
	
	var itemImage2 = createImg("images/item2.png");
	itemImage2.id = ("item2");
	itemImage2.mySlot = ("2");
	itemImage2.classList.add("item");
	itemImage2.setAttribute("draggable", "true");
	itemImage2.ondragstart = onItemDragStart;
	invItemSlot2.appendChild(itemImage2);
	invItemSlot2.ondrop = createOnBoxDropFunction(invItemSlot2);
	invItemSlot2.ondragover = allowDrop;
	
	var itemImage3 = createImg("images/item3.png");
	itemImage3.id = ("item3");
	itemImage3.mySlot = ("3");
	itemImage3.classList.add("item");
	itemImage3.setAttribute("draggable", "true");
	itemImage3.ondragstart = onItemDragStart;
	invItemSlot3.appendChild(itemImage3);
	invItemSlot3.ondrop = createOnBoxDropFunction(invItemSlot3);
	invItemSlot3.ondragover = allowDrop;
	
	var itemImage4 = createImg("images/item4.png");
	itemImage4.id = ("item4");
	itemImage4.mySlot = ("4");
	itemImage4.classList.add("item");
	itemImage4.setAttribute("draggable", "true");
	itemImage4.ondragstart = onItemDragStart;
	invItemSlot4.appendChild(itemImage4);
	invItemSlot4.ondrop = createOnBoxDropFunction(invItemSlot4);
	invItemSlot4.ondragover = allowDrop;
	
	var itemImage5 = createImg("images/item5.png");
	itemImage5.id = ("item5");
	itemImage5.mySlot = ("5");
	itemImage5.classList.add("item");
	itemImage5.setAttribute("draggable", "true");
	itemImage5.ondragstart = onItemDragStart;
	invItemSlot5.appendChild(itemImage5);
	invItemSlot5.ondrop = createOnBoxDropFunction(invItemSlot5);
	invItemSlot5.ondragover = allowDrop;
	
	var itemImage6 = createImg("images/item6.png");
	itemImage6.id = ("item6");
	itemImage6.mySlot = ("6");
	itemImage6.classList.add("item");
	itemImage6.setAttribute("draggable", "true");
	itemImage6.ondragstart = onItemDragStart;
	invItemSlot6.appendChild(itemImage6);
	invItemSlot6.ondrop = createOnBoxDropFunction(invItemSlot6);
	invItemSlot6.ondragover = allowDrop;
		
	//Start and End Slots
	var orangeImage = src="images/end.png";
	var startImage = createImg("images/start.png");
	var endImage = createImg(orangeImage);
	startImage.classList.add("item");
	endImage.classList.add("item");
	startImage.setAttribute("draggable", "false");
	endImage.setAttribute("draggable", "false");
	itemSlot11.appendChild(startImage);
	itemSlot11.ondragover = null;
	itemSlot10.appendChild(endImage);
	itemSlot10.ondragover = null;
		
	//Hidden Slots
	itemSlot10.classList.remove("itemSlot");
	itemSlot10.classList.add("itemSlotHidden");
	itemSlot11.classList.remove("itemSlot");
	itemSlot11.classList.add("itemSlotHidden");

	
	//Create numbers for the voltage (these are just for looks and to guide the playing to the correct path)
	var number = createDiv("+15");
	number.id = "number2";
	itemSlot2.appendChild(number);
	number.classList.add("itemSlotNumberPlus");
		
	var number = createDiv("+12V");
	number.id = "number3";
	itemSlot7.appendChild(number);
	number.classList.add("itemSlotNumberPlus");
		
	var number = createDiv("-15V");
	number.id = "number4";
	itemSlot3.appendChild(number);
	number.classList.add("itemSlotNumberMinus");
		
	var number = createDiv("+10V");
	number.id = "number5";
	itemSlot9.appendChild(number);
	number.classList.add("itemSlotNumberPlus");
		
	var number = createDiv("-15V");
	number.id = "number6";
	itemSlot14.appendChild(number);
	number.classList.add("itemSlotNumberMinus");
		
	var number = createDiv("-15V");
	number.id = "number7";
	itemSlot6.appendChild(number);
	number.classList.add("itemSlotNumberMinus");
		
	var number = createDiv("-8V");
	number.id = "number7";
	itemSlot12.appendChild(number);
	number.classList.add("itemSlotNumberPlus");
	
	var number = createDiv("+8V");
	number.id = "number7";
	itemSlot12.appendChild(number);
	number.classList.add("itemSlotNumberPlus");
		
	var number = createDiv("+3V");
	number.id = "number7";
	itemSlot4.appendChild(number);
	number.classList.add("itemSlotNumberPlus");
	
	//Change Target Voltage
	document.getElementById("targetVoltage").innerHTML = "";
	createHeading2("33V", "targetVoltage")
		
	//Change Level Name
	document.getElementById("levelBox").innerHTML = "";
	createHeading1("Level 3", "levelBox")
}
function checkIfWon3(){
	if (itemSlot12.contains(item4) && itemSlot7.contains(item5) && itemSlot2.contains(item1) && itemSlot3.contains(item6) && itemSlot4.contains(item2)&& itemSlot9.contains(item3)
	){ 
		console.log("LEVEL WON");
		//change top battery green
		battery.classList.add("batteryGreen");
		//change end battery to green
		itemSlot10.innerHTML = "";
		var startImage = createImg("images/start.png");
		startImage.classList.add("item");
		itemSlot10.appendChild(startImage);
			var delayInMilliseconds = 3000; //1 second
			setTimeout(function() {
			battery.classList.remove("batteryGreen");
			Initialise();
			startLevel4();
			}, delayInMilliseconds);
		
	}else{
		console.log("Level 3 not finished")
	}
}
//LEVEL 4//
	function startLevel4() {
		window.level = "level4";
	console.log("level 4 started")
	//Inventory 
	var itemImage1 = createImg("images/item1.png");
	itemImage1.id = ("item1");
	itemImage1.mySlot = ("1");
	itemImage1.classList.add("item");
	itemImage1.setAttribute("draggable", "true");
	itemImage1.ondragstart = onItemDragStart;
	invItemSlot1.appendChild(itemImage1);
	invItemSlot1.ondrop = createOnBoxDropFunction(invItemSlot1);
	invItemSlot1.ondragover = allowDrop;
	
	var itemImage2 = createImg("images/item2.png");
	itemImage2.id = ("item2");
	itemImage2.mySlot = ("2");
	itemImage2.classList.add("item");
	itemImage2.setAttribute("draggable", "true");
	itemImage2.ondragstart = onItemDragStart;
	invItemSlot2.appendChild(itemImage2);
	invItemSlot2.ondrop = createOnBoxDropFunction(invItemSlot2);
	invItemSlot2.ondragover = allowDrop;
	
	var itemImage3 = createImg("images/item3.png");
	itemImage3.id = ("item3");
	itemImage3.mySlot = ("3");
	itemImage3.classList.add("item");
	itemImage3.setAttribute("draggable", "true");
	itemImage3.ondragstart = onItemDragStart;
	invItemSlot3.appendChild(itemImage3);
	invItemSlot3.ondrop = createOnBoxDropFunction(invItemSlot3);
	invItemSlot3.ondragover = allowDrop;
	
	var itemImage4 = createImg("images/item4.png");
	itemImage4.id = ("item4");
	itemImage4.mySlot = ("4");
	itemImage4.classList.add("item");
	itemImage4.setAttribute("draggable", "true");
	itemImage4.ondragstart = onItemDragStart;
	invItemSlot4.appendChild(itemImage4);
	invItemSlot4.ondrop = createOnBoxDropFunction(invItemSlot4);
	invItemSlot4.ondragover = allowDrop;
	
	var itemImage5 = createImg("images/item5.png");
	itemImage5.id = ("item5");
	itemImage5.mySlot = ("5");
	itemImage5.classList.add("item");
	itemImage5.setAttribute("draggable", "true");
	itemImage5.ondragstart = onItemDragStart;
	invItemSlot5.appendChild(itemImage5);
	invItemSlot5.ondrop = createOnBoxDropFunction(invItemSlot5);
	invItemSlot5.ondragover = allowDrop;
	
	var itemImage6 = createImg("images/item6.png");
	itemImage6.id = ("item6");
	itemImage6.mySlot = ("6");
	itemImage6.classList.add("item");
	itemImage6.setAttribute("draggable", "true");
	itemImage6.ondragstart = onItemDragStart;
	invItemSlot6.appendChild(itemImage6);
	invItemSlot6.ondrop = createOnBoxDropFunction(invItemSlot6);
	invItemSlot6.ondragover = allowDrop;
		
	//Start and End Slots
	var orangeImage = src="images/end.png";
	var startImage = createImg("images/start.png");
	var endImage = createImg(orangeImage);
		
	startImage.classList.add("item");
	endImage.classList.add("item");
	startImage.setAttribute("draggable", "false");
	endImage.setAttribute("draggable", "false");
	itemSlot11.appendChild(startImage);
	itemSlot11.ondragover = null;
	startImage.classList.add("item");
	itemSlot4.appendChild(endImage);
	itemSlot4.ondragover = null;
		
	//Hide and unhide Slots
	itemSlot4.classList.remove("itemSlot");
	itemSlot4.classList.add("itemSlotHidden");
	itemSlot11.classList.remove("itemSlot");
	itemSlot11.classList.add("itemSlotHidden");

	//Create numbers for the voltage (these are just for looks and to guide the playing to the correct path)
	var number = createDiv("+13V");
	number.id = "number2";
	itemSlot2.appendChild(number);
	number.classList.add("itemSlotNumberPlus");
		
	var number = createDiv("+5V");
	number.id = "number3";
	itemSlot7.appendChild(number);
	number.classList.add("itemSlotNumberPlus");
		
	var number = createDiv("+20V");
	number.id = "number7";
	itemSlot6.appendChild(number);
	number.classList.add("itemSlotNumberPlus");
		
	var number = createDiv("-18V");
	number.id = "number10";
	itemSlot1.appendChild(number);
	number.classList.add("itemSlotNumberMinus");
		
	var number = createDiv("+11V");
	number.id = "number10";
	itemSlot8.appendChild(number);
	number.classList.add("itemSlotNumberPlus");
		
	var number = createDiv("+19V");
	number.id = "number10";
	itemSlot9.appendChild(number);
	number.classList.add("itemSlotNumberPlus");
	
	//Change Target Voltage
	document.getElementById("targetVoltage").innerHTML = "";
	createHeading2("50V", "targetVoltage")
		
	//Change Level Name
	document.getElementById("levelBox").innerHTML = "";
	createHeading1("Level 4", "levelBox")
}
function checkIfWon4(){
	if (itemSlot6.contains(item5) && itemSlot1.contains(item1) && itemSlot2.contains(item2) && itemSlot7.contains(item3) && itemSlot8.contains(item6)&& itemSlot9.contains(item4)
	){ 
		console.log("LEVEL WON");
		//change top battery green
		battery.classList.add("batteryGreen");
		//change end battery to green
		itemSlot4.innerHTML = "";
		var startImage = createImg("images/start.png");
		startImage.classList.add("item");
		itemSlot4.appendChild(startImage);
			var delayInMilliseconds = 3000; //1 second
			setTimeout(function() {
			battery.classList.remove("batteryGreen");
			Initialise();
			startLevel5();
			}, delayInMilliseconds);
		
	}else{
		console.log("Level 4 not finished")
	}
}
//LEVEL 5//
	function startLevel5() {
		window.level = "level5";
	console.log("level 5 started")
	//Inventory 
	var itemImage1 = createImg("images/item1.png");
	itemImage1.id = ("item1");
	itemImage1.mySlot = ("1");
	itemImage1.classList.add("item");
	itemImage1.setAttribute("draggable", "true");
	itemImage1.ondragstart = onItemDragStart;
	invItemSlot1.appendChild(itemImage1);
	invItemSlot1.ondrop = createOnBoxDropFunction(invItemSlot1);
	invItemSlot1.ondragover = allowDrop;
	
	var itemImage2 = createImg("images/item2.png");
	itemImage2.id = ("item2");
	itemImage2.mySlot = ("2");
	itemImage2.classList.add("item");
	itemImage2.setAttribute("draggable", "true");
	itemImage2.ondragstart = onItemDragStart;
	invItemSlot2.appendChild(itemImage2);
	invItemSlot2.ondrop = createOnBoxDropFunction(invItemSlot2);
	invItemSlot2.ondragover = allowDrop;
	
	var itemImage3 = createImg("images/item3.png");
	itemImage3.id = ("item3");
	itemImage3.mySlot = ("3");
	itemImage3.classList.add("item");
	itemImage3.setAttribute("draggable", "true");
	itemImage3.ondragstart = onItemDragStart;
	invItemSlot3.appendChild(itemImage3);
	invItemSlot3.ondrop = createOnBoxDropFunction(invItemSlot3);
	invItemSlot3.ondragover = allowDrop;
	
	var itemImage4 = createImg("images/item4.png");
	itemImage4.id = ("item4");
	itemImage4.mySlot = ("4");
	itemImage4.classList.add("item");
	itemImage4.setAttribute("draggable", "true");
	itemImage4.ondragstart = onItemDragStart;
	invItemSlot4.appendChild(itemImage4);
	invItemSlot4.ondrop = createOnBoxDropFunction(invItemSlot4);
	invItemSlot4.ondragover = allowDrop;
	
	var itemImage5 = createImg("images/item5.png");
	itemImage5.id = ("item5");
	itemImage5.mySlot = ("5");
	itemImage5.classList.add("item");
	itemImage5.setAttribute("draggable", "true");
	itemImage5.ondragstart = onItemDragStart;
	invItemSlot5.appendChild(itemImage5);
	invItemSlot5.ondrop = createOnBoxDropFunction(invItemSlot5);
	invItemSlot5.ondragover = allowDrop;
	
	var itemImage6 = createImg("images/item6.png");
	itemImage6.id = ("item6");
	itemImage6.mySlot = ("6");
	itemImage6.classList.add("item");
	itemImage6.setAttribute("draggable", "true");
	itemImage6.ondragstart = onItemDragStart;
	invItemSlot6.appendChild(itemImage6);
	invItemSlot6.ondrop = createOnBoxDropFunction(invItemSlot6);
	invItemSlot6.ondragover = allowDrop;
		
	//Start and End Slots
	var orangeImage = src="images/end.png";
	var startImage = createImg("images/start.png");
	var endImage = createImg(orangeImage);
		
	startImage.classList.add("item");
	endImage.classList.add("item");
	startImage.setAttribute("draggable", "false");
	endImage.setAttribute("draggable", "false");
	itemSlot8.appendChild(startImage);
	itemSlot8.ondragover = null;
	startImage.classList.add("item");
	itemSlot3.appendChild(endImage);
	itemSlot3.ondragover = null;
		
	//Hide and unhide Slots
	itemSlot3.classList.remove("itemSlot");
	itemSlot3.classList.add("itemSlotHidden");
	itemSlot8.classList.remove("itemSlot");
	itemSlot8.classList.add("itemSlotHidden");

	//Create numbers for the voltage (these are just for looks and to guide the playing to the correct path)
	var number = createDiv("+13V");
	number.id = "number2";
	itemSlot2.appendChild(number);
	number.classList.add("itemSlotNumberPlus");
		
	var number = createDiv("+5V");
	number.id = "number3";
	itemSlot7.appendChild(number);
	number.classList.add("itemSlotNumberPlus");
		
	var number = createDiv("+2V");
	number.id = "number7";
	itemSlot6.appendChild(number);
	number.classList.add("itemSlotNumberPlus");
		
	var number = createDiv("-11V");
	number.id = "number10";
	itemSlot14.appendChild(number);
	number.classList.add("itemSlotNumberMinus");
		
	var number = createDiv("+48V");
	number.id = "number10";
	itemSlot9.appendChild(number);
	number.classList.add("itemSlotNumberPlus");
	
	//Change Target Voltage
	document.getElementById("targetVoltage").innerHTML = "";
	createHeading2("42V", "targetVoltage")
		
	//Change Level Name
	document.getElementById("levelBox").innerHTML = "";
	createHeading1("Level 5", "levelBox")
}
function checkIfWon5(){
	if (itemSlot7.contains(item1) && itemSlot12.contains(item3) && itemSlot13.contains(item6) && itemSlot14.contains(item4) && itemSlot9.contains(item5)&& itemSlot4.contains(item2)
	){ 
		console.log("LEVEL WON");
		//change top battery green
		battery.classList.add("batteryGreen");
		//change end battery to green
		itemSlot3.innerHTML = "";
		var startImage = createImg("images/start.png");
		startImage.classList.add("item");
		itemSlot3.appendChild(startImage);
			var delayInMilliseconds = 3000; //1 second
			setTimeout(function() {
			battery.classList.remove("batteryGreen");
			Initialise();
			startLevel6();
			}, delayInMilliseconds);
	}else{
		console.log("Level 5 not finished")
	}
}

//LEVEL 6//
	function startLevel6() {
		window.level = "level6";
	console.log("level 6 started")
	//Inventory 
	var itemImage1 = createImg("images/item1.png");
	itemImage1.id = ("item1");
	itemImage1.mySlot = ("1");
	itemImage1.classList.add("item");
	itemImage1.setAttribute("draggable", "true");
	itemImage1.ondragstart = onItemDragStart;
	invItemSlot1.appendChild(itemImage1);
	invItemSlot1.ondrop = createOnBoxDropFunction(invItemSlot1);
	invItemSlot1.ondragover = allowDrop;
	
	var itemImage2 = createImg("images/item2.png");
	itemImage2.id = ("item2");
	itemImage2.mySlot = ("2");
	itemImage2.classList.add("item");
	itemImage2.setAttribute("draggable", "true");
	itemImage2.ondragstart = onItemDragStart;
	invItemSlot2.appendChild(itemImage2);
	invItemSlot2.ondrop = createOnBoxDropFunction(invItemSlot2);
	invItemSlot2.ondragover = allowDrop;
	
	var itemImage3 = createImg("images/item3.png");
	itemImage3.id = ("item3");
	itemImage3.mySlot = ("3");
	itemImage3.classList.add("item");
	itemImage3.setAttribute("draggable", "true");
	itemImage3.ondragstart = onItemDragStart;
	invItemSlot3.appendChild(itemImage3);
	invItemSlot3.ondrop = createOnBoxDropFunction(invItemSlot3);
	invItemSlot3.ondragover = allowDrop;
	
	var itemImage4 = createImg("images/item4.png");
	itemImage4.id = ("item4");
	itemImage4.mySlot = ("4");
	itemImage4.classList.add("item");
	itemImage4.setAttribute("draggable", "true");
	itemImage4.ondragstart = onItemDragStart;
	invItemSlot4.appendChild(itemImage4);
	invItemSlot4.ondrop = createOnBoxDropFunction(invItemSlot4);
	invItemSlot4.ondragover = allowDrop;
	
	var itemImage5 = createImg("images/item5.png");
	itemImage5.id = ("item5");
	itemImage5.mySlot = ("5");
	itemImage5.classList.add("item");
	itemImage5.setAttribute("draggable", "true");
	itemImage5.ondragstart = onItemDragStart;
	invItemSlot5.appendChild(itemImage5);
	invItemSlot5.ondrop = createOnBoxDropFunction(invItemSlot5);
	invItemSlot5.ondragover = allowDrop;
	
	var itemImage6 = createImg("images/item6.png");
	itemImage6.id = ("item6");
	itemImage6.mySlot = ("6");
	itemImage6.classList.add("item");
	itemImage6.setAttribute("draggable", "true");
	itemImage6.ondragstart = onItemDragStart;
	invItemSlot6.appendChild(itemImage6);
	invItemSlot6.ondrop = createOnBoxDropFunction(invItemSlot6);
	invItemSlot6.ondragover = allowDrop;
		
	//Start and End Slots
	var orangeImage = src="images/end.png";
	var startImage = createImg("images/start.png");
	var endImage = createImg(orangeImage);
		
	startImage.classList.add("item");
	endImage.classList.add("item");
	startImage.setAttribute("draggable", "false");
	endImage.setAttribute("draggable", "false");
	itemSlot1.appendChild(startImage);
	itemSlot1.ondragover = null;
	startImage.classList.add("item");
	itemSlot14.appendChild(endImage);
	itemSlot14.ondragover = null;
		
	//Hide and unhide Slots
	itemSlot1.classList.remove("itemSlot");
	itemSlot1.classList.add("itemSlotHidden");
	itemSlot14.classList.remove("itemSlot");
	itemSlot14.classList.add("itemSlotHidden");

	//Create numbers for the voltage (these are just for looks and to guide the playing to the correct path)
	var number = createDiv("+11V");
	number.id = "number2";
	itemSlot2.appendChild(number);
	number.classList.add("itemSlotNumberPlus");
	
	var number = createDiv("+50V");
	number.id = "number2";
	itemSlot6.appendChild(number);
	number.classList.add("itemSlotNumberPlus");
		
	var number = createDiv("+50V");
	number.id = "number2";
	itemSlot4.appendChild(number);
	number.classList.add("itemSlotNumberPlus");
		
	var number = createDiv("+89V");
	number.id = "number2";
	itemSlot9.appendChild(number);
	number.classList.add("itemSlotNumberPlus");
		
	var number = createDiv("-10V");
	number.id = "number2";
	itemSlot7.appendChild(number);
	number.classList.add("itemSlotNumberMinus");
		
	var number = createDiv("-50V");
	number.id = "number2";
	itemSlot12.appendChild(number);
	number.classList.add("itemSlotNumberMinus");
		
		
	
	
	//Change Target Voltage
	document.getElementById("targetVoltage").innerHTML = "";
	createHeading2("190V", "targetVoltage")
		
	//Change Level Name
	document.getElementById("levelBox").innerHTML = "";
	createHeading1("Level 6", "levelBox")
}
function checkIfWon6(){
	if (itemSlot6.contains(item3) && itemSlot7.contains(item4) && itemSlot2.contains(item1) && itemSlot3.contains(item6) && itemSlot4.contains(item2)&& itemSlot9.contains(item5)
	){ 
		console.log("LEVEL WON");
		//change top battery green
		battery.classList.add("batteryGreen");
		//change end battery to green
		itemSlot14.innerHTML = "";
		var startImage = createImg("images/start.png");
		startImage.classList.add("item");
		itemSlot14.appendChild(startImage);
			var delayInMilliseconds = 3000; //1 second
			setTimeout(function() {
			battery.classList.remove("batteryGreen");
			Initialise();
			startLevel7();
			}, delayInMilliseconds);
	}else{
		console.log("Level 6 not finished")
	}
}

//LEVEL 7//
	function startLevel7() {
		window.level = "level7";
	console.log("level 7 started")
	//Inventory 
	var itemImage1 = createImg("images/item1.png");
	itemImage1.id = ("item1");
	itemImage1.mySlot = ("1");
	itemImage1.classList.add("item");
	itemImage1.setAttribute("draggable", "true");
	itemImage1.ondragstart = onItemDragStart;
	invItemSlot1.appendChild(itemImage1);
	invItemSlot1.ondrop = createOnBoxDropFunction(invItemSlot1);
	invItemSlot1.ondragover = allowDrop;
	
	var itemImage2 = createImg("images/item2.png");
	itemImage2.id = ("item2");
	itemImage2.mySlot = ("2");
	itemImage2.classList.add("item");
	itemImage2.setAttribute("draggable", "true");
	itemImage2.ondragstart = onItemDragStart;
	invItemSlot2.appendChild(itemImage2);
	invItemSlot2.ondrop = createOnBoxDropFunction(invItemSlot2);
	invItemSlot2.ondragover = allowDrop;
	
	var itemImage3 = createImg("images/item3.png");
	itemImage3.id = ("item3");
	itemImage3.mySlot = ("3");
	itemImage3.classList.add("item");
	itemImage3.setAttribute("draggable", "true");
	itemImage3.ondragstart = onItemDragStart;
	invItemSlot3.appendChild(itemImage3);
	invItemSlot3.ondrop = createOnBoxDropFunction(invItemSlot3);
	invItemSlot3.ondragover = allowDrop;
	
	var itemImage4 = createImg("images/item4.png");
	itemImage4.id = ("item4");
	itemImage4.mySlot = ("4");
	itemImage4.classList.add("item");
	itemImage4.setAttribute("draggable", "true");
	itemImage4.ondragstart = onItemDragStart;
	invItemSlot4.appendChild(itemImage4);
	invItemSlot4.ondrop = createOnBoxDropFunction(invItemSlot4);
	invItemSlot4.ondragover = allowDrop;
	
	var itemImage5 = createImg("images/item5.png");
	itemImage5.id = ("item5");
	itemImage5.mySlot = ("5");
	itemImage5.classList.add("item");
	itemImage5.setAttribute("draggable", "true");
	itemImage5.ondragstart = onItemDragStart;
	invItemSlot5.appendChild(itemImage5);
	invItemSlot5.ondrop = createOnBoxDropFunction(invItemSlot5);
	invItemSlot5.ondragover = allowDrop;
	
	var itemImage6 = createImg("images/item6.png");
	itemImage6.id = ("item6");
	itemImage6.mySlot = ("6");
	itemImage6.classList.add("item");
	itemImage6.setAttribute("draggable", "true");
	itemImage6.ondragstart = onItemDragStart;
	invItemSlot6.appendChild(itemImage6);
	invItemSlot6.ondrop = createOnBoxDropFunction(invItemSlot6);
	invItemSlot6.ondragover = allowDrop;
		
	//Start and End Slots
	var orangeImage = src="images/end.png";
	var startImage = createImg("images/start.png");
	var endImage = createImg(orangeImage);
		
	startImage.classList.add("item");
	endImage.classList.add("item");
	startImage.setAttribute("draggable", "false");
	endImage.setAttribute("draggable", "false");
	itemSlot5.appendChild(startImage);
	itemSlot5.ondragover = null;
	startImage.classList.add("item");
	itemSlot12.appendChild(endImage);
	itemSlot12.ondragover = null;
		
	//Hide and unhide Slots
	itemSlot5.classList.remove("itemSlot");
	itemSlot5.classList.add("itemSlotHidden");
	itemSlot12.classList.remove("itemSlot");
	itemSlot12.classList.add("itemSlotHidden");

	//Create numbers for the voltage (these are just for looks and to guide the playing to the correct path)
	var number = createDiv("-80V");
	number.id = "number2";
	itemSlot2.appendChild(number);
	number.classList.add("itemSlotNumberMinus");
		
	var number = createDiv("+43V");
	number.id = "number2";
	itemSlot10.appendChild(number);
	number.classList.add("itemSlotNumberPlus");
		
	var number = createDiv("+17V");
	number.id = "number2";
	itemSlot9.appendChild(number);
	number.classList.add("itemSlotNumberPlus");
	
	var number = createDiv("+20V");
	number.id = "number2";
	itemSlot4.appendChild(number);
	number.classList.add("itemSlotNumberPlus");
	
	var number = createDiv("+80V");
	number.id = "number2";
	itemSlot7.appendChild(number);
	number.classList.add("itemSlotNumberPlus");
	
	
	
	//Change Target Voltage
	document.getElementById("targetVoltage").innerHTML = "";
	createHeading2("190V", "targetVoltage")
		
	//Change Level Name
	document.getElementById("levelBox").innerHTML = "";
	createHeading1("Level 7", "levelBox")
}
function checkIfWon7(){
	if (itemSlot10.contains(item4) && itemSlot9.contains(item3) && itemSlot4.contains(item2) && itemSlot3.contains(item6) && itemSlot2.contains(item1)&& itemSlot7.contains(item5)
	){ 
		console.log("LEVEL WON");
		//change top battery green
		battery.classList.add("batteryGreen");
		//change end battery to green
		itemSlot12.innerHTML = "";
		var startImage = createImg("images/start.png");
		startImage.classList.add("item");
		itemSlot12.appendChild(startImage);
			var delayInMilliseconds = 3000; //1 second
			setTimeout(function() {
			battery.classList.remove("batteryGreen");
			Initialise();
			startLevel8();
			}, delayInMilliseconds);
	}else{
		console.log("Level 7 not finished")
	}
}

//LEVEL 8//
	function startLevel8() {
		window.level = "level8";
	console.log("level 8 started")
	//Inventory 
	var itemImage1 = createImg("images/item1.png");
	itemImage1.id = ("item1");
	itemImage1.mySlot = ("1");
	itemImage1.classList.add("item");
	itemImage1.setAttribute("draggable", "true");
	itemImage1.ondragstart = onItemDragStart;
	invItemSlot1.appendChild(itemImage1);
	invItemSlot1.ondrop = createOnBoxDropFunction(invItemSlot1);
	invItemSlot1.ondragover = allowDrop;
	
	var itemImage2 = createImg("images/item2.png");
	itemImage2.id = ("item2");
	itemImage2.mySlot = ("2");
	itemImage2.classList.add("item");
	itemImage2.setAttribute("draggable", "true");
	itemImage2.ondragstart = onItemDragStart;
	invItemSlot2.appendChild(itemImage2);
	invItemSlot2.ondrop = createOnBoxDropFunction(invItemSlot2);
	invItemSlot2.ondragover = allowDrop;
	
	var itemImage3 = createImg("images/item3.png");
	itemImage3.id = ("item3");
	itemImage3.mySlot = ("3");
	itemImage3.classList.add("item");
	itemImage3.setAttribute("draggable", "true");
	itemImage3.ondragstart = onItemDragStart;
	invItemSlot3.appendChild(itemImage3);
	invItemSlot3.ondrop = createOnBoxDropFunction(invItemSlot3);
	invItemSlot3.ondragover = allowDrop;
	
	var itemImage4 = createImg("images/item4.png");
	itemImage4.id = ("item4");
	itemImage4.mySlot = ("4");
	itemImage4.classList.add("item");
	itemImage4.setAttribute("draggable", "true");
	itemImage4.ondragstart = onItemDragStart;
	invItemSlot4.appendChild(itemImage4);
	invItemSlot4.ondrop = createOnBoxDropFunction(invItemSlot4);
	invItemSlot4.ondragover = allowDrop;
	
	var itemImage5 = createImg("images/item5.png");
	itemImage5.id = ("item5");
	itemImage5.mySlot = ("5");
	itemImage5.classList.add("item");
	itemImage5.setAttribute("draggable", "true");
	itemImage5.ondragstart = onItemDragStart;
	invItemSlot5.appendChild(itemImage5);
	invItemSlot5.ondrop = createOnBoxDropFunction(invItemSlot5);
	invItemSlot5.ondragover = allowDrop;
	
	var itemImage6 = createImg("images/item6.png");
	itemImage6.id = ("item6");
	itemImage6.mySlot = ("6");
	itemImage6.classList.add("item");
	itemImage6.setAttribute("draggable", "true");
	itemImage6.ondragstart = onItemDragStart;
	invItemSlot6.appendChild(itemImage6);
	invItemSlot6.ondrop = createOnBoxDropFunction(invItemSlot6);
	invItemSlot6.ondragover = allowDrop;
		
	//Start and End Slots
	var orangeImage = src="images/end.png";
	var startImage = createImg("images/start.png");
	var endImage = createImg(orangeImage);
		
	startImage.classList.add("item");
	endImage.classList.add("item");
	startImage.setAttribute("draggable", "false");
	endImage.setAttribute("draggable", "false");
	itemSlot6.appendChild(startImage);
	itemSlot6.ondragover = null;
	startImage.classList.add("item");
	itemSlot15.appendChild(endImage);
	itemSlot15.ondragover = null;
		
	//Hide and unhide Slots
	itemSlot6.classList.remove("itemSlot");
	itemSlot6.classList.add("itemSlotHidden");
	itemSlot15.classList.remove("itemSlot");
	itemSlot15.classList.add("itemSlotHidden");

	//Create numbers for the voltage (these are just for looks and to guide the playing to the correct path)
	var number = createDiv("-65V");
	number.id = "number2";
	itemSlot2.appendChild(number);
	number.classList.add("itemSlotNumberMinus");
	
	var number = createDiv("+45V");
	number.id = "number2";
	itemSlot7.appendChild(number);
	number.classList.add("itemSlotNumberPlus");
		
	var number = createDiv("+55V");
	number.id = "number2";
	itemSlot3.appendChild(number);
	number.classList.add("itemSlotNumberPlus");
		
	var number = createDiv("+99V");
	number.id = "number2";
	itemSlot4.appendChild(number);
	number.classList.add("itemSlotNumberPlus");
	
	var number = createDiv("+14V");
	number.id = "number2";
	itemSlot14.appendChild(number);
	number.classList.add("itemSlotNumberPlus");
	
	var number = createDiv("+26V");
	number.id = "number2";
	itemSlot14.appendChild(number);
	number.classList.add("itemSlotNumberPlus");
	
	var number = createDiv("+160V");
	number.id = "number2";
	itemSlot12.appendChild(number);
	number.classList.add("itemSlotNumberPlus");
	
	//Change Target Voltage
	document.getElementById("targetVoltage").innerHTML = "";
	createHeading2("160V", "targetVoltage")
		
	//Change Level Name
	document.getElementById("levelBox").innerHTML = "";
	createHeading1("Level 8", "levelBox")
}
function checkIfWon8(){
	if (itemSlot7.contains(item4) && itemSlot2.contains(item1) && itemSlot3.contains(item6) && itemSlot4.contains(item2) && itemSlot9.contains(item5)&& itemSlot14.contains(item3)
	){ 
		console.log("LEVEL WON");
		//change top battery green
		battery.classList.add("batteryGreen");
		//change end battery to green
		itemSlot15.innerHTML = "";
		var startImage = createImg("images/start.png");
		startImage.classList.add("item");
		itemSlot15.appendChild(startImage);
			var delayInMilliseconds = 3000; //1 second
			setTimeout(function() {
			battery.classList.remove("batteryGreen");
			Initialise();
			startLevel9();
			}, delayInMilliseconds);
	}else{
		console.log("Level 8 not finished")
	}
}

//LEVEL 9//
	function startLevel9() {
		window.level = "level9";
	console.log("level 9 started")
	//Inventory 
	var itemImage1 = createImg("images/item1.png");
	itemImage1.id = ("item1");
	itemImage1.mySlot = ("1");
	itemImage1.classList.add("item");
	itemImage1.setAttribute("draggable", "true");
	itemImage1.ondragstart = onItemDragStart;
	invItemSlot1.appendChild(itemImage1);
	invItemSlot1.ondrop = createOnBoxDropFunction(invItemSlot1);
	invItemSlot1.ondragover = allowDrop;
	
	var itemImage2 = createImg("images/item2.png");
	itemImage2.id = ("item2");
	itemImage2.mySlot = ("2");
	itemImage2.classList.add("item");
	itemImage2.setAttribute("draggable", "true");
	itemImage2.ondragstart = onItemDragStart;
	invItemSlot2.appendChild(itemImage2);
	invItemSlot2.ondrop = createOnBoxDropFunction(invItemSlot2);
	invItemSlot2.ondragover = allowDrop;
	
	var itemImage3 = createImg("images/item3.png");
	itemImage3.id = ("item3");
	itemImage3.mySlot = ("3");
	itemImage3.classList.add("item");
	itemImage3.setAttribute("draggable", "true");
	itemImage3.ondragstart = onItemDragStart;
	invItemSlot3.appendChild(itemImage3);
	invItemSlot3.ondrop = createOnBoxDropFunction(invItemSlot3);
	invItemSlot3.ondragover = allowDrop;
	
	var itemImage4 = createImg("images/item4.png");
	itemImage4.id = ("item4");
	itemImage4.mySlot = ("4");
	itemImage4.classList.add("item");
	itemImage4.setAttribute("draggable", "true");
	itemImage4.ondragstart = onItemDragStart;
	invItemSlot4.appendChild(itemImage4);
	invItemSlot4.ondrop = createOnBoxDropFunction(invItemSlot4);
	invItemSlot4.ondragover = allowDrop;
	
	var itemImage5 = createImg("images/item5.png");
	itemImage5.id = ("item5");
	itemImage5.mySlot = ("5");
	itemImage5.classList.add("item");
	itemImage5.setAttribute("draggable", "true");
	itemImage5.ondragstart = onItemDragStart;
	invItemSlot5.appendChild(itemImage5);
	invItemSlot5.ondrop = createOnBoxDropFunction(invItemSlot5);
	invItemSlot5.ondragover = allowDrop;
	
	var itemImage6 = createImg("images/item6.png");
	itemImage6.id = ("item6");
	itemImage6.mySlot = ("6");
	itemImage6.classList.add("item");
	itemImage6.setAttribute("draggable", "true");
	itemImage6.ondragstart = onItemDragStart;
	invItemSlot6.appendChild(itemImage6);
	invItemSlot6.ondrop = createOnBoxDropFunction(invItemSlot6);
	invItemSlot6.ondragover = allowDrop;
		
	//Start and End Slots
	var orangeImage = src="images/end.png";
	var startImage = createImg("images/start.png");
	var endImage = createImg(orangeImage);
	
	startImage.classList.add("item");
	endImage.classList.add("item");
	startImage.setAttribute("draggable", "false");
	endImage.setAttribute("draggable", "false");
	itemSlot7.appendChild(startImage);
	itemSlot7.ondragover = null;
	startImage.classList.add("item");
	itemSlot10.appendChild(endImage);
	itemSlot10.ondragover = null;
		
	//Hide and unhide Slots
	itemSlot7.classList.remove("itemSlot");
	itemSlot7.classList.add("itemSlotHidden");
	itemSlot10.classList.remove("itemSlot");
	itemSlot10.classList.add("itemSlotHidden");

	//Create numbers for the voltage (these are just for looks and to guide the playing to the correct path)
	var number = createDiv("-65V");
	number.id = "number2";
	itemSlot2.appendChild(number);
	number.classList.add("itemSlotNumberMinus");
		
	var number = createDiv("+32V");
	number.id = "number2";
	itemSlot12.appendChild(number);
	number.classList.add("itemSlotNumberPlus");
	
	var number = createDiv("-78V");
	number.id = "number2";
	itemSlot13.appendChild(number);
	number.classList.add("itemSlotNumberMinus");
		
	var number = createDiv("+56V");
	number.id = "number2";
	itemSlot14.appendChild(number);
	number.classList.add("itemSlotNumberPlus");
		
	var number = createDiv("+22V");
	number.id = "number2";
	itemSlot4.appendChild(number);
	number.classList.add("itemSlotNumberPlus");
		
	var number = createDiv("+32V");
	number.id = "number2";
	itemSlot15.appendChild(number);
	number.classList.add("itemSlotNumberPlus");

	
	//Change Target Voltage
	document.getElementById("targetVoltage").innerHTML = "";
	createHeading2("32V", "targetVoltage")
		
	//Change Level Name
	document.getElementById("levelBox").innerHTML = "";
	createHeading1("Level 9", "levelBox")
}
function checkIfWon9(){
	if (itemSlot12.contains(item3) && itemSlot13.contains(item6) && itemSlot14.contains(item4) && itemSlot9.contains(item5) && itemSlot4.contains(item1)&& itemSlot5.contains(item2)
	){ 
		console.log("LEVEL WON");
		//change top battery green
		battery.classList.add("batteryGreen");
		//change end battery to green
		itemSlot10.innerHTML = "";
		var startImage = createImg("images/start.png");
		startImage.classList.add("item");
		itemSlot10.appendChild(startImage);
			var delayInMilliseconds = 3000; //1 second
			setTimeout(function() {
			battery.classList.remove("batteryGreen");
			Initialise();
			startLevel10();
			}, delayInMilliseconds);
	}else{
		console.log("Level 9 not finished")
	}
}
//LEVEL 10//
	function startLevel10() {
		window.level = "level10";
	console.log("level 10 started")
	//Inventory 
	var itemImage1 = createImg("images/item1.png");
	itemImage1.id = ("item1");
	itemImage1.mySlot = ("1");
	itemImage1.classList.add("item");
	itemImage1.setAttribute("draggable", "true");
	itemImage1.ondragstart = onItemDragStart;
	invItemSlot1.appendChild(itemImage1);
	invItemSlot1.ondrop = createOnBoxDropFunction(invItemSlot1);
	invItemSlot1.ondragover = allowDrop;
	
	var itemImage2 = createImg("images/item2.png");
	itemImage2.id = ("item2");
	itemImage2.mySlot = ("2");
	itemImage2.classList.add("item");
	itemImage2.setAttribute("draggable", "true");
	itemImage2.ondragstart = onItemDragStart;
	invItemSlot2.appendChild(itemImage2);
	invItemSlot2.ondrop = createOnBoxDropFunction(invItemSlot2);
	invItemSlot2.ondragover = allowDrop;
	
	var itemImage3 = createImg("images/item3.png");
	itemImage3.id = ("item3");
	itemImage3.mySlot = ("3");
	itemImage3.classList.add("item");
	itemImage3.setAttribute("draggable", "true");
	itemImage3.ondragstart = onItemDragStart;
	invItemSlot3.appendChild(itemImage3);
	invItemSlot3.ondrop = createOnBoxDropFunction(invItemSlot3);
	invItemSlot3.ondragover = allowDrop;
	
	var itemImage4 = createImg("images/item4.png");
	itemImage4.id = ("item4");
	itemImage4.mySlot = ("4");
	itemImage4.classList.add("item");
	itemImage4.setAttribute("draggable", "true");
	itemImage4.ondragstart = onItemDragStart;
	invItemSlot4.appendChild(itemImage4);
	invItemSlot4.ondrop = createOnBoxDropFunction(invItemSlot4);
	invItemSlot4.ondragover = allowDrop;
	
	var itemImage5 = createImg("images/item5.png");
	itemImage5.id = ("item5");
	itemImage5.mySlot = ("5");
	itemImage5.classList.add("item");
	itemImage5.setAttribute("draggable", "true");
	itemImage5.ondragstart = onItemDragStart;
	invItemSlot5.appendChild(itemImage5);
	invItemSlot5.ondrop = createOnBoxDropFunction(invItemSlot5);
	invItemSlot5.ondragover = allowDrop;
	
	var itemImage6 = createImg("images/item6.png");
	itemImage6.id = ("item6");
	itemImage6.mySlot = ("6");
	itemImage6.classList.add("item");
	itemImage6.setAttribute("draggable", "true");
	itemImage6.ondragstart = onItemDragStart;
	invItemSlot6.appendChild(itemImage6);
	invItemSlot6.ondrop = createOnBoxDropFunction(invItemSlot6);
	invItemSlot6.ondragover = allowDrop;
		
	//Start and End Slots
	var orangeImage = src="images/end.png";
	var startImage = createImg("images/start.png");
	var endImage = createImg(orangeImage);
	
	startImage.classList.add("item");
	endImage.classList.add("item");
	startImage.setAttribute("draggable", "false");
	endImage.setAttribute("draggable", "false");
	itemSlot1.appendChild(startImage);
	itemSlot1.ondragover = null;
	startImage.classList.add("item");
	itemSlot8.appendChild(endImage);
	itemSlot8.ondragover = null;
		
		
	//Hide and unhide Slots
	itemSlot1.classList.remove("itemSlot");
	itemSlot1.classList.add("itemSlotHidden");
	itemSlot8.classList.remove("itemSlot");
	itemSlot8.classList.add("itemSlotHidden");

	//Create numbers for the voltage (these are just for looks and to guide the playing to the correct path)
	var number = createDiv("+99V");
	number.id = "number2";
	itemSlot2.appendChild(number);
	number.classList.add("itemSlotNumberPlus");
		
	var number = createDiv("+99V");
	number.id = "number2";
	itemSlot3.appendChild(number);
	number.classList.add("itemSlotNumberPlus");
		
	var number = createDiv("+99V");
	number.id = "number2";
	itemSlot6.appendChild(number);
	number.classList.add("itemSlotNumberPlus");
	
	var number = createDiv("+99V");
	number.id = "number2";
	itemSlot7.appendChild(number);
	number.classList.add("itemSlotNumberPlus");
		
	var number = createDiv("+99V");
	number.id = "number2";
	itemSlot11.appendChild(number);
	number.classList.add("itemSlotNumberPlus");
		
	var number = createDiv("+99V");
	number.id = "number2";
	itemSlot12.appendChild(number);
	number.classList.add("itemSlotNumberPlus");
		


	
	//Change Target Voltage
	document.getElementById("targetVoltage").innerHTML = "";
	createHeading2("594V", "targetVoltage")
		
	//Change Level Name
	document.getElementById("levelBox").innerHTML = "";
	createHeading1("Level 10", "levelBox")
}
function checkIfWon10(){
	if (itemSlot2.contains(item6) && itemSlot3.contains(item2) && itemSlot6.contains(item5) && itemSlot11.contains(item3) && itemSlot12.contains(item4)&& itemSlot7.contains(item1)
	){ 
		console.log("LEVEL WON");
		//change top battery green
		battery.classList.add("batteryGreen");
		//change end battery to green
		itemSlot8.innerHTML = "";
		var startImage = createImg("images/start.png");
		startImage.classList.add("item");
		itemSlot8.appendChild(startImage);
			var delayInMilliseconds = 3000; //1 second
			setTimeout(function() {
			battery.classList.remove("batteryGreen");
			Initialise();
			startLevel1();
			}, delayInMilliseconds);
	}else{
		console.log("Level 10 not finished")
	}
}


window.onload = loadApp();

function loadApp() {
	Initialise();
	startLevel1();
	console.log("App loaded");
}