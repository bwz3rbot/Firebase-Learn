/* Require the JSON key you downloaded */
const configkey = require('../firebaseadmin.env.json');

/* Require firebase-admin library */
const admin = require('firebase-admin');

/* Initialize the application with the JSON file */
admin.initializeApp({
    credential: admin.credential.cert(configkey)
});

/* Now you have access to the database. */
const db = admin.firestore();

/* Storing data couldn't be easier! */


/* Just create the object to store */
const quoteData = {
    quote: 'This is the quote!',
    author: 'Author here!'
};

/* Save the quote in the samepleData collection. */
db.collection('sampleData').doc('inspiration').set(quoteData);

/* 
Now check your Cloud Firestore in the console
You will see the data has been persisted!
 */