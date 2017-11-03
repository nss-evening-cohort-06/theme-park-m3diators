"use strict";

const data = require('./data');
const dom = require('./dom');


const pressEnter = (press) => {
	$(document).keypress((event) => {
		if(event.key === 'Enter'){
		let txt = ($('#searchBar').val());
		let areaData = data.getAreas();
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
  data.getParkAttractions(query).then((data) => {
    data.showResults(data);
    data.getAreas();
    //dom.domString(data);
    console.log("searchAttractions", data);
  }).catch((error) => {
    console.log("error in searchAttractions", error);
  });
  dom.domString(query);
};


module.exports = {pressEnter, searchAttractions};