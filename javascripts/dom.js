"use strict";

const domString = (themeParkArray) => {
	let parkString = '';
	for( let i =0; i < themeParkArray.length; i++){
		parkString += `<div class = "themeBox">`;
		parkString += ``;
		parkString += ``;
		parkString += `</div>`;	
	}

	printToDom(parkString);
};

const printToDom = (strang) => {
	$('#parkContainer').html(strang);
};

module.exports = {domString};
