"use strict";

const dom = require('./dom');
const dataPage = require('./data');



const pressEnter = (press) => {
	$(document).keypress((event) => {
		if(event.key === 'Enter'){
		let txt = ($('#searchBar').val().toLowerCase());
		let areaData = dataPage.getAreas();
		let results = areaData.filter(function(thing){
			return thing.name.indexOf(txt)>-1;
		});
		searchAttractions(txt);
		console.log("results", results);
	}
	});
};

const searchAttractions = (query) => {
	console.log("hello", query);
  dataPage.getParkAttractions(query).then((data) => {
    dataPage.showResults(data);
    console.log("searchAttractions", dataPage);
  }).catch((error) => {
    console.log("error in searchAttractions", error);
  });
};


module.exports = {pressEnter, searchAttractions};