# Usage

```javascript
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
```

# Links
[Cloud Firestore Docs](https://firebase.google.com/docs/firestore)

[Start Here To Use The API to read/write data](https://firebase.google.com/docs/database/admin/start)

[Node.js Firestore Tutorial](https://medium.com/@sajid576/firebase-cloud-firestore-queries-using-javascript-nodejs-3bef2e105745)

[Getting started with Node.js admin sdk](https://firebase.google.com/docs/database/admin/start)

[Introduction to the Firebase Admin API](https://firebase.google.com/docs/admin/setup?authuser=0)

[Firestore Docs](https://firebase.google.com/docs/firestore?authuser=0)

[Firebase npm repo](https://www.npmjs.com/package/firebase)

[Getting started with Firebase and Node.js Web App](https://firebase.google.com/docs/web/setup)

[Set up hosting](https://firebase.google.com/docs/hosting/?authuser=0)

[Video Tutorial Set Up Admin SDK Node.js](https://www.youtube.com/watch?v=Z87OZtIYC_0)


# Steps to set up a firebase app:

1. Go to https://console.firebase.google.com/ and `Create a project`.

<img src="https://imgur.com/Jb0UvJ5.png">

2. Give it a name or choose an existing google app.

<img src="https://imgur.com/U4xaQoR.png">

# Steps to enable firestore and use it in a Node application

1. Go into your firebase application from the [Firebase Console](https://console.firebase.google.com/) and select your application.

<img src="https://imgur.com/WaJvVB8.png">


2. Click the cogwheel to go into your project settings.

<img src="https://imgur.com/hLeLjy6.png">

3. Navigate to the __Service accounts__ pane and `Generate new private key`. Click `Generate key` to download the json file and include it in your project.

<img src="https://imgur.com/RYEqjrv.png">

5. Now in the __Project Overview__ section of the console, navigate to the __Cloud Firestore__ panel and click `Create database`

<img src="https://imgur.com/HwE28hJ.png">

6. You may choose to start in test mode or production.

<img src="https://imgur.com/zanTldj.png">

## Now you may start using the database within your code.

# Steps to set up Firebase Authentication

https://dev.to/betiol/how-to-handle-authentication-on-node-js-using-firebase-5ajn

1. Navigate to the __Authentication__ pane in the __Project Overview__ pane of the Firebase Console.

