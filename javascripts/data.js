"use strict";

let firebaseKey;
const dom = require('./dom');

let areas = [];



const getParkAttractions = (query) => {
  return new Promise((resolve, reject) => {
    $.ajax(`${firebaseKey.databaseURL}/areas.json`).done((data) => {
      resolve(data);
      areas = data;
      console.log("area",areas);
    }).fail((error) => {
      reject(error);
    });
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
    getParkAttractions().then((result)=>{
      dom.domString(areas); 
      console.log("results in initializer",result);
    }).catch((error)=>{
      console.log("error in initializer", error);
    });
};



module.exports = {initializer, setKey, showResults, getAreas};
