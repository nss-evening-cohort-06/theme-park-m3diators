"use strict";


const dataPage = require('./data');

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
    dataPage.setKey(results);
    firebase.initializeApp(results);
  }).catch((error) => {
    console.log("error in retrieve keys", error);
  });
};

module.exports = {retrieveKeys};