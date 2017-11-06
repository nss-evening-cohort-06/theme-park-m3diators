"use strict";

const domString = (themeParkArray) => {
	let parkString = '';
	console.log("theme park array",themeParkArray);
	for (let i= 0; i < themeParkArray.length; i++){
		parkString += `<div class = "themeBox">`;
		parkString += `<div class="col-xs-6 col-sm-4.col-xs-6 .col-sm-4"></div>`;
		parkString += `<div class="col-xs-6 col-sm-4.col-xs-6 .col-sm-4"></div>`;
		parkString += `<h1>${themeParkArray[i].name}</h1>`;
		parkString += `<p>${themeParkArray[i].description}</p>`;
		//parkString += `<h3>Stix</h3>`;
		parkString += `<div class="clearfix visible-xs-block"></div>`;
		parkString += `<div class="col-xs-6 col-sm-4.col-xs-6 .col-sm-4"></div>`;
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
