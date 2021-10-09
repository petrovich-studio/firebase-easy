import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import 'firebase/compat/messaging';

function appInit(config) {
    firebase.initializeApp(config);
}

const auth = firebase.auth();
const rtdb = firebase.database();
const firestore = firebase.firestore();
const storage = firebase.storage();
const msg = firebase.messaging();

export default { appInit, auth, rtdb, firestore, storage, msg };