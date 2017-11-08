"use strict";

let firebaseKey;
const dom = require('./dom');

let areas = [];


const getParkAreas = (query) => {
  return new Promise((resolve, reject) => {
    $.ajax(`${firebaseKey.databaseURL}/areas.json`).done((data) => {
      areas = data;
      resolve(data);
    }).fail((error) => {
      reject(error);
    });
  });
};

const getParkAttractions = (areaId) => {
  let attractions = [];
  return new Promise((resolve, reject) => {
    $.ajax(`${firebaseKey.databaseURL}/attractions.json?orderBy="area_id"&equalTo=${areaId}`).done((data) => {
      Object.keys(data).forEach((key) => {
        attractions.push(data[key]);
      });
      resolve(attractions);
    }).fail((error) => {
      reject(error);
    });
  });
};

const searchAttractions = (areaId) => {
  getParkAttractions(areaId).then((data) => {
  dom.attractionDomString(data); 
  }).catch((error) => {
    console.log("error in searchAttractions", error);
  });
};

const getAreas = () => {
  return areas;
};

const showResults = () => {
  dom.domString(areas);
};

const setKey = (apiKey) => {
  firebaseKey = apiKey; 
  initializer();
};

const initializer = () => {
    getParkAreas().then((result)=>{
      dom.domString(areas); 
    }).catch((error)=>{
      console.log("error in initializer", error);
    });
};

module.exports = {searchAttractions, getParkAttractions, initializer, setKey, showResults, getAreas};
