"use strict";

let firebaseKey;
const dom = require('./dom');

let areas = [];



const getParkAttractions = (query) => {
  return new Promise((resolve, reject) => {
    $.ajax(`${firebaseKey.databaseURL}/areas.json`).done((data) => {
      resolve(data);
      areas = data;
    }).fail((error) => {
      reject(error);
    });
  });
};

const getAreas = () => {
  return areas;
};

const showResults = (themeParkArray) => {
  // dom.domString();
  // clickevents 
  // search event
};

const setKey = (apiKey) => {
  firebaseKey = apiKey;
};






module.exports = {getParkAttractions, setKey, showResults, getAreas};
