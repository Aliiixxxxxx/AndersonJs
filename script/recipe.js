var Crafting = (function (){
	'use strict'
	var items = ['Boots', 'Blades of Attack', 'Energy Booster', 'Gloves of Haste', 'Belt of Strenght', 'Blades of Attack'];

	var recipes = [
		{
			input : ['Boots', 'Blades of Attack', 'Blades of Attack'],
			output : 'Phase Boots'
		},

		{
			input : ['Boots', 'Energy Booster'],
			output : 'Arcane Boots'
		},

		{
			input : ['Boots', 'Gloves of Haste', 'Belt of Strenght'],
			output : 'Power Treads'
		}
	];

	function getItems(){
		return items;
	}

	function getRecipe(){
		return recipes;
	}

	return {
		getItems : getItems,
		getRecipe : getRecipe,
	};
})();
