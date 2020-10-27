/* https://medium.com/@sajid576/firebase-cloud-firestore-queries-using-javascript-nodejs-3bef2e105745 */
const dotenv = require('dotenv').config();
/* Dependencies for firebause authentication */
const firebase = require('firebase/app');
require('firebase/auth');

/* Firestore dependancies */
require('firebase/firestore');
require('firebase/analytics');


/* Web app configuration */
var firebaseConfig = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    databaseURL: process.env.databaseURL,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
    measurementId: process.env.measurementId
};

/* Initialize firebase */
firebase.initializeApp(firebaseConfig);

module.exports = firebase;