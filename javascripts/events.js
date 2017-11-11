"use strict";

const dom = require('./dom');
const dataPage = require('./data');

const pressEnter = (press) => {
	$(document).keypress((event) => {
		if(event.key === 'Enter'){
		let txt = ($('#searchBar').val());
		dataPage.initializer(txt);
		let areaData = dataPage.getAreas();
		let results = areaData.filter(function(thing){
			return thing.name.indexOf(txt)>-1;
		});
		dom.domString(results);
	}
	});
};

const clickAreaToSeeAttractions = () => {
	$(document).on("click", '.card', (e) => {
		dataPage.searchAttractions(e.target.closest(".card").id);
	}); 	
};




//Copyright will display in copyright ID. 
const date = new Date();
const month = date.getMonth()+1;
const day = date.getDate();
const outputDate = '&copy ' + date.getFullYear() + '/' + (month < 10 ? '0': '') + month +
				'/' + (day < 10 ? '0' : '') + day + ', The Indecisive Park';				

$('#copyright').html(outputDate);				



module.exports = {pressEnter, clickAreaToSeeAttractions};