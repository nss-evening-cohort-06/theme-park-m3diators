"use strict";

const data = require('./data');
const apiKeys = require('./apiKeys');

apiKeys.retrieveKeys();




const searchAttractions = (query) => {
	console.log("hello", query);
  data.getParkAttractions(query).then((data) => {
    data.showResults(data);
    console.log("searchAttractions", data);
  }).catch((error) => {
    console.log("error in searchAttractions", error);
  });
};
