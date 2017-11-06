"use strict";

const domString = (themeParkArray) => {
	let parkString = '';
	console.log("theme park array",themeParkArray);
	for (let i= 0; i < themeParkArray.length; i++){
		let areaObj = themeParkArray[i];
		parkString += `<div class="col-md-4">`;
		//parkString += `<div class="col-md-4"></div>`;
		//parkString += `<div class="col-md-4"></div>`;
		//parkString += `<div class="clearfix visible-md-block"></div>`;
		parkString += `<h1>${areaObj.name}</h1>`;
		parkString += `<p>${areaObj.description}</p>`;
		//parkString += `<p>${areaObj.description}</p>`;
		//parkString += `<div class="col-md-4"></div>`;

		//
		//parkString += ` <div class="col-md-4 col-md-offset-4"></div>`;
		parkString += `</div>`;	
	
	}
	printToDom(parkString);
};

const printToDom = (strang) => {
	$('#parkContainer').html(strang);
};

module.exports = {domString};
