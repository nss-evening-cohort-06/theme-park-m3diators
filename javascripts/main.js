"use strict";


const dataPage = require('./data');
const firebaseApi = require('./apiKeys');

firebaseApi.retrieveKeys();

const events = require('./events');

events.pressEnter();

