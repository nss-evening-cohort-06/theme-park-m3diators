"use strict";

const domString = (themeParkArray) => {
	let parkString = '';
	for(let i =0; i <themeParkArray.length; i++){
		parkString += `<div class = "themeBox">`;
		// parkString += `<div class="col-xs-6 col-sm-4">.col-xs-6 .col-sm-4</div>`;
		// parkString += `<div class="col-xs-6 col-sm-4">.col-xs-6 .col-sm-4</div>`;
		parkString += `<h3>${themeParkArray[i].areas.name}</h3>`;
		parkString += `<p>${themeParkArray[i].areas.description}</p>`;
		parkString += `<h3>Stix</h3>`;
		// parkString += `<div class="clearfix visible-xs-block"></div>`;
		// parkString += `<div class="col-xs-6 col-sm-4">.col-xs-6 .col-sm-4</div>`;
		parkString += `</div>`;	
	}

	printToDom(parkString);
};

const printToDom = (strang) => {
	$('#parkContainer').html(strang);
};

module.exports = {domString};
