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



module.exports = {pressEnter};