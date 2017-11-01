"use strict";


const data = require('./data');
// const firebaseApi = require('./firebaseApi');

const apiKeys = () => {
  return new Promise((resolve, reject) => {
    $.ajax('./db/firebaseApi.json').done((data) => {
      resolve(data.firebaseKeys);
    }).fail((error) => {
      reject(error);
    });
  });
};

const retrieveKeys = () => {
  apiKeys().then((results) => {
    console.log("apikeys", results);
    data.setKey(results);
    firebase.initializeApp(results);
  }).catch((error) => {
    console.log("error in retrieve keys", error);
  });
};

module.exports = {retrieveKeys};