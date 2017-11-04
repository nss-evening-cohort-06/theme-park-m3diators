"use strict";

const dom = require('./dom');
const dataPage = require('./data');
const firebaseApi = require('./apiKeys');


firebaseApi.retrieveKeys();

const events = require('./events');

events.pressEnter();


$(document).ready(() => {
	dataPage.initializer();
});
