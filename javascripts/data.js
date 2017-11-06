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

const getAttractions = () => {
  return attractions;
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
      console.log("results in initializer",result);
    }).catch((error)=>{
      console.log("error in initializer", error);
    });
};



module.exports = {getParkAttractions, initializer, setKey, showResults, getAreas};
