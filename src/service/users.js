const firebase = require('../config/firebase.config');

/* Save Data */
const database = firebase.firestore();

// Set the collection
const usersCollection = database.collection('users');

// Store user data without auto generated ID by using .set function
async function setUserData(firstName, lastName, age) {
    let ID;
    try {
        ID = await usersCollection.doc('user01').set({
            first_name: firstName,
            last_name: lastName,
            age: age
        }, {
            merge: true // Merge will only update data if the document exists already. Will not create a new one.
        });
    } catch (err) {
        if (err) console.log("Oops there was an error!\n", err);
        else(console.log(ID))
    }
    return ID;
}

// Store user data with auto generated ID by using the .add function
async function addUserData(firstName, lastName, age) {
    let ID;
    try {
        ID = await usersCollection.add({
            first_name: firstName,
            last_name: lastName,
            age: age,
            numbersArray: []
        });
    } catch (err) {
        if (err) console.log("Oops there was an error!\n", err);
        else(console.log(ID));
    }
    return ID;
}

/* 
Can create new docs to save later
without actually saving them at the time of creation
*/
async function setUserLater(firstName, lastName, age) {
    console.log("adding user later... creating a doc with id first...");
    const ID = usersCollection.doc();
    console.log("Setting the fields to the doc now...")
    await ID.set({
        first_name: firstName,
        last_name: lastName,
        age: Number(age)
    });
    return ID;
}
/* Updating Data */
async function updateDoc(userId, firstName, lastName, age) {
    let ID;
    console.log("updating this user id: ", userId);
    try {
        ID = await usersCollection.doc(userId).update({
            first_name: firstName,
            last_name: lastName,
            age: Number(age)
        });
    } catch (err) {
        if (err) console.log(err);
    }
    return ID;
}

/* Update Objects */
async function updateObject(userId) {
    let UPDATED;
    try {
        console.log("ATTEMPTING TO UPDATE...")
        UPDATED = await usersCollection.doc(userId).update({
            'favorite.food': 'Pizza'
        });
    } catch (err) {
        if (err) console.log(err);
    }
    return UPDATED;
}


/* Update Arrays */

const contactRef = firebase.firestore().collection('Contact');


async function createArray(one, two) {
    return contactRef.add({
        UserContactData: firebase.firestore.FieldValue.arrayUnion(one, two)
    });
}
/* Adding map data to an array */
async function updateArray(userId) {

    return contactRef.doc(userId.value).update({
        UserContactData: firebase.firestore.FieldValue.arrayUnion("First contact", "second contact")
    });
}

/* Adding values to an array */
async function addValueToArray(userId) {
    return usersCollection.doc(userId).update({
        favorite_color: firebase.firestore.FieldValue.arrayUnion('Yellow')
    });
}

/* Nesting arrays */
async function nestArrays(userId) {
    const values = ['Yellow', 'green', 'red'];

    return usersCollection.doc(userId.value).update({
        favorite_colors: firebase.firestore.FieldValue.arrayUnion.apply(null, values)
    });
}

/* Deleting data from an array */
async function deleteDataFromArray(userId) {
    return usersCollection.doc(userId.value).update({
        favorite_color: firebase.firestore.FieldValue.arrayRemove('Green')
    });
}

/* Query Data */

// async function getUsersByLastName(lastName) {
//     const query = usersCollection.where('last_name', '==', lastName);
//     return query.get().then(snapshot => {
//         console.log("got this snapshot:\n", snapshot);
//         snapshot.forEach(user => {
//             console.log(user.id, ' => ', user.data());
//         });
//     })
// }
async function getUsersByLastName(lastName) {
    const query = usersCollection.where('last_name', '==', lastName);
    return query.get();
}
/* Query based on array contents */
async function getUsersByLastName(lastName) {
    const query = usersCollection.where('last_name', '==', lastName);
    return query.get();
}

module.exports = {
    setUserData,
    addUserData,
    setUserLater,
    updateDoc,
    updateObject,
    createArray,
    updateArray,
    addValueToArray,
    nestArrays,
    deleteDataFromArray,
    getUsersByLastName
}