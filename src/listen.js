/* https://firebase.google.com/docs/database/admin/retrieve-data */

/* Require the JSON key you downloaded */
const configkey = require('../firebaseadmin.env.json');

/* Require firebase-admin library */
const admin = require('firebase-admin');

/* Initialize the application with the JSON file */
/* Initialize the application with the JSON file */
admin.initializeApp({
    credential: admin.credential.cert(configkey),
    databaseURL: "https://commanding-port-292806.firebaseio.com"

});

/* Now you have access to the database. */
const db = admin.database();

/* Listening for updates: */

/*
Make a reference to the sampleData collection
we created in the previous step
 */
const ref = db.ref('/sampleData/inspiration');

/* Make an on value callback to listen for the data */
ref.on("value", function (snapshot) {
    console.log(snapshot.val());
}, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
});