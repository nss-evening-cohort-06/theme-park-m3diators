"use strict";

const domString = (themeParkArray) => {
	let parkString = '';
	console.log("theme park array",themeParkArray);
	for (let i= 0; i < themeParkArray.length; i++){
		let areaObj = themeParkArray[i];
				//parkString += `<div class="row">`;
				if (i > 6) {
				parkString += ` <div class="col-md-4 col-md-offset-4 areaCard">`;
				}
				parkString += `<div class="col-md-4 areaCard">`;
				//parkString += `<div class ="thumbnail">`;
				parkString += `<h1>${areaObj.name}</h1>`;
				parkString += `<p>${areaObj.description}</p>`;
		

		//parkString += ` <div class="col-md-4 col-md-offset-4"></div>`;
		parkString += `</div>`;	
	
	}
	printToDom(parkString);
};

const printToDom = (strang) => {
	$('#parkContainer').html(strang);
};

module.exports = {domString};
