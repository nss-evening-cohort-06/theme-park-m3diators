"use strict";

const dom = require('./dom');
const data = require('./data');
const firebaseApi = require('./apiKeys');


firebaseApi.retrieveKeys();

const events = require('./events');

events.pressEnter();
