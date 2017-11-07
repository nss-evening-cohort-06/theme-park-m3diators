"use strict";

let firebaseKey;
const dom = require('./dom');

let areas = [];
let attractions = [];



const getParkAreas = (query) => {
  return new Promise((resolve, reject) => {
    $.ajax(`${firebaseKey.databaseURL}/areas.json`).done((data) => {
      resolve(data);
      areas = data;
      console.log("area", areas);
    }).fail((error) => {
      reject(error);
    });
  });
};

const getParkAttractions = (query) => {
  return new Promise((resolve, reject) => {
    $.ajax(`${firebaseKey.databaseURL}/attractions.json`).done((data) => {
      resolve(data);
      attractions = data;
      console.log("attractions", attractions);
    }).fail((error) => {
      reject(error);
    });
  });
};





const searchAttractions = (query) => {
 console.log("hello", query);
  getParkAttractions(query).then((data) => {
  showAttractions(data); //will need to define new domFunction to print attractions;
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

const showAttractions = () => {
  dom.attractionDomString(attractions);
};

const setKey = (apiKey) => {
  firebaseKey = apiKey; 
  initializer();
};

const initializer = () => {
    getParkAreas().then((result)=>{
      dom.domString(areas); 
      console.log("results in initializer",result);
    }).catch((error)=>{
      console.log("error in initializer", error);
    });
};


module.exports = {searchAttractions, getParkAttractions, initializer, setKey, showResults, getAreas, showAttractions};
