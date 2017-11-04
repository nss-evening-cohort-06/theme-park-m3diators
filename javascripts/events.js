"use strict";

const dom = require('./dom');
const dataPage = require('./data');



const pressEnter = (press) => {
	$(document).keypress((event) => {
		if(event.key === 'Enter'){
		let txt = ($('#searchBar').val().toLowerCase());
		searchAttractions(txt);

		// let areaData = dataPage.getAttractions(); figure out if function is still needed
		// let results = areaData.filter(function(thing){
			// return thing.name.indexOf(txt)>-1; //figure out if still works after everything else is working;
		// });
		
		
	}
	});
};

const searchAttractions = (query) => {
	console.log("hello", query);
  dataPage.getParkAttractions(query).then((data) => {
    // dataPage.showResults(data); will need to define new domFunction to print attractions;
  }).catch((error) => {
    console.log("error in searchAttractions", error);
  });
  
};


module.exports = {pressEnter, searchAttractions};