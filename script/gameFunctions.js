	'use strict'
	var items = Crafting.getItems();    //All items
	var recipe = Crafting.getRecipe();  //All recipes
	var idRecipe;						//ID for task recipe
	var uniqueIdItem = 0;				//
	var checkFreeSlot = 0;				//
	var itemArray;						//items for idRecipe
	var points = 0;						//Score for playr

	var craftTable = document.getElementById('craftTable');
	var tableItems = document.getElementById('tableItems');
	var craftItem = document.getElementById('craftItem');

	//main function for generate
	function generateGame(){	
		var clearItem = craftTable.childNodes;
		while(clearItem.length){
			craftTable.removeChild(clearItem[0]);
		}	

		clearItem = tableItems.childNodes;
		while(clearItem.length){
			tableItems.removeChild(clearItem[0]);
		}

		clearItem = craftItem.childNodes;
		while(clearItem.length){
			craftItem.removeChild(clearItem[0]);
		}

		viewRecipe();
		viewItems();
		itemArray = recipe[idRecipe].input.slice();
	}

	//View your items
	function viewItems(){	
		for (var i = 0; i < items.length; i++) {
			putItem(items[i]);	
		}	
	}

	//View your recipe and freeslots for it
	function viewRecipe(){
		recipe = Crafting.getRecipe();
		idRecipe = randomInteger(0, recipe.length - 1);
		putRecipe(recipe[idRecipe].output);
		putFreeSlot(recipe[idRecipe].input.length);	
	}	

	//Add free slots for recipe
	function putFreeSlot (numberOfFreeSlots) { 
		if(numberOfFreeSlots > 0){
			var freeslot = document.createElement('div'); 
			freeslot.ondrop = drop;
			freeslot.ondragover = drop;
			freeslot.id = "freeslot"; 
			craftTable.appendChild(freeslot);
			numberOfFreeSlots--;
			putFreeSlot(numberOfFreeSlots);
		}
	}

	//Add items for craft
	function putItem (itemName) {
			var empty = document.createElement('div'); 
			empty.id = "empty"; 
			empty.ondrop = drop;
			empty.ondragover = drop;
			tableItems.appendChild(empty); 
			var item = document.createElement('input'); 
			item.type = "image"; 
			item.src = "image/" + itemName + ".png"; 
			item.setAttribute('draggable', true);
			item.ondragstart = drag; 
			item.value = itemName;
			item.id = itemName + uniqueIdItem; 
			empty.appendChild(item);
			uniqueIdItem++; 
	}
	
	//Add recipe function
	function putRecipe(recipeName){
		var recipe = document.createElement('input');
		recipe.id = 'recipe';
		recipe.type = 'image'; 
		recipe.src = 'image/' + recipeName + '.png';
		craftItem.appendChild(recipe);
	}

	//function for check LOSE or WIN
	function checkResult(){
		checkFreeSlot = 0;
    	for (i = 0; i < craftTable.childNodes.length; i++){
    		if (craftTable.childNodes[i].childNodes.length != 0) {
    			checkFreeSlot++;
    		}
    		if (checkFreeSlot == craftTable.childNodes.length ) {
    			for (var i = 0; i < craftTable.childNodes.length; i++){
    				var crop = itemArray.indexOf(craftTable.childNodes[i].firstChild.value); // var for check item IN recipe
    				if (crop >= 0) {
    					itemArray.splice(crop, 1);
    				}
    			}		
    			if (itemArray.length == 0) {
    				setTimeout(alert('Nice'),200);
    				points += randomInteger(23,27);
    				setTimeout(alert('Score:' + points),250);
    				setTimeout(generateGame(),300);
    			}

    		else{ 
    			setTimeout(alert('Retard, try again'),250);
    			points -= randomInteger(23,27);
    			setTimeout(alert('Score:' + points), 250);
    		}
    		} 
    	}
	}