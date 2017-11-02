"use strict";

const data = require('./data');
const dom = require('./dom');


const pressEnter = (press) => {
	$(document).keypress((event) => {
		if(event.key === 'Enter'){
		let userInput = $('#searchBar').val();
	}
	console.log("keypress event", event);
	});
};

const searchAttractions = (query) => {
	console.log("hello", query);
  data.getParkAttractions(query).then((data) => {
    data.showResults(data);
    console.log("searchAttractions", data.results);
  }).catch((error) => {
    console.log("error in searchAttractions", error);
  });
};




module.exports = {pressEnter, searchAttractions};