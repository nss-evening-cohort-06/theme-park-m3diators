"use strict";

let firebaseKey;
const dom = require('./dom');





const getParkAttractions = (query) => {
  return new Promise((resolve, reject) => {
    $.ajax(`${firebaseKey.databaseURL}/areas.json`).done((data) => {
    	console.log("getParkAttractions", data);
      resolve(data);
    }).fail((error) => {
      reject(error);
    });
  });
};


const showResults = (themeParkArray) => {
  dom.domString();
};

const setKey = (apiKey) => {
  firebaseKey = apiKey;
};






module.exports = {getParkAttractions, setKey, showResults};
