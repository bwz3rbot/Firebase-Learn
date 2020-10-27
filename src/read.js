/* https://firebase.google.com/docs/database/admin/retrieve-data#section-queries */

/* Require the JSON key you downloaded */
const configkey = require('../firebaseadmin.env.json');

/* Require firebase-admin library */
const admin = require('firebase-admin');

/* Initialize the application with the JSON file */
admin.initializeApp({
    credential: admin.credential.cert(configkey),
    databaseURL: "https://commanding-port-292806.firebaseio.com"

});

/* Now you have access to the database. */
const db = admin.database();

/* Make a query */

/* Make a reference to the collection */
const ref = db.ref('sampleData/inspiration');

// Attach an asynchronous callback to read the data at our posts reference
ref.orderByChild("quote").on('value', function(snapshot) {
    console.log("the snapshot: ", snapshot);
    console.log(snapshot.key + " was " + snapshot.val().quote + " meters tall");
  });
  