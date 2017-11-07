"use strict";

const domString = (themeParkArray) => {
	let parkString = '';
	console.log("theme park array",themeParkArray);
	for (let i= 0; i < themeParkArray.length; i++){
		let areaObj = themeParkArray[i];
				//parkString += `<div class="row">`;
				if (i >= 6) {
					parkString += ` <div class="col-md-4 col-md-offset-8 areaCard">`;
				} else {
					parkString += `<div class="col-md-4 areaCard">`;
				}	
				parkString += `<h1>${areaObj.name}</h1>`;
				parkString += `<p>${areaObj.description}</p>`;
				parkString += `</div>`;	
	}
	printToDom(parkString);
};

const printToDom = (strang) => {
	$('#parkContainer').html(strang);
};

const attractionDomString = (attractionArray) => {
	let attractionString = '';
	for (let j = 0; j < attractionArray.length; j++ ) {
		attractionString += `<div>`;
		attractionString += `<h4>${attractionArray[j].name}</h4>`;
		attractionString += `<p><${attractionArray[j].description}/p>`;
		attractionString += `</div>`;
	}
	printAttractions(attractionString);
};

const printAttractions = (strang) => {
	$("#attractionContainer").append(strang);
};


module.exports = {domString, attractionDomString};
