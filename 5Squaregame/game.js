window.onload = pageLoad;

function pageLoad(){
	var form = document.getElementById("start")
	form.onclick = startGame

}

function startGame(){
	if (document.getElementById("numbox").value == "") 
        {
        alert("Number of box is required.");
        return false;
    }
	alert("Ready");
	addBox();
	timeStart();
}
var timer = null;

function timeStart(){
	var TIMER_TICK = 1000;
	var min = 0.1; 
	var second = min*60;
	var x = document.getElementById('clock');
	
	timer = setInterval(timeCount,TIMER_TICK);
	
	function timeCount(){
		var allbox = document.querySelectorAll("#layer div");

		if(allbox.length <= 0) {
			alert("You Win!!");
			clearInterval(timer);
			timer = null;
			clearScreen();
			}

		if(second <= 0) {
			alert("Time up");
			clearInterval(timer);
			timer = null;
			clearScreen();
		}

		x.innerHTML = second;
		second--;
		// จัดการเกี่ยวกับเวลา เช่น ถ้ายังมีกล่องเหลืออยู่ เวลาจะลดลงเรื่อยๆ 
		// ถ้าไม่มีกล่องเหลือแล้ว และเวลายังเหลืออยู่จะขึ้นว่า You win!
		// ถ้าเวลาหมด แต่ยังมีกล่องเหลืออยู่ จะบอกว่า Game over และทำการ clear screen
	}
}

function addBox(){
    var numbox = document.getElementById("numbox").value;
    var gameLayer = document.getElementById("layer");
    var colorDrop = document.getElementById("color").value;

    for (var i = 0; i < numbox; i++){
        var tempbox = document.createElement("div");
        tempbox.className = "square " + colorDrop;
        tempbox.id = "box" + i;
        tempbox.style.left = Math.random() * (500 - 25) + "px";
        tempbox.style.top = Math.random() * (500 - 25) + "px";
        
        gameLayer.appendChild(tempbox);
        bindBox(tempbox);
    }
}


function bindBox(box){
	box.onclick = function(){
		box.parentNode.removeChild(box);
	}
}

function clearScreen(){
	var allbox = document.querySelectorAll("#layer div");

	for (var i=0;i<allbox.length;i++){
		allbox[i].parentNode.removeChild(allbox[i]);
	}
}
