"use strict";

const dom = require('./dom');
const dataPage = require('./data');
const firebaseApi = require('./apiKeys');
const events = require('./events');

$(document).ready(() => {
	firebaseApi.retrieveKeys();
	events.pressEnter();
	events.clickAreaToSeeAttractions();
});


