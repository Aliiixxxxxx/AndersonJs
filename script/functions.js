'use strict'
	//Function for random
	function randomInteger(min, max) {
    	var rand = min - 0.5 + Math.random() * (max - min + 1)
    	rand = Math.round(rand);
    	return rand;
    }

	function dragOver (ev) {
		ev.preventDefault();
	}

	function allowDrop(ev) {
    	ev.preventDefault();

	}

	function drag(ev) {
    	ev.dataTransfer.setData("text", ev.target.id);
	}

	function drop(ev) {
    	ev.preventDefault();
    	var data = ev.dataTransfer.getData("text");
    	ev.target.appendChild(document.getElementById(data));
    	checkResult();
	}