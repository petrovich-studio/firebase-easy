# firebase-easy
npm module.

RU: firebase-esay модуль для упрощения работы с кодом.
EN: firebase is an easy module to simplify working with code.

Пример/Example:

import { appInit, auth, rtdb, firestore, storage, msg } from 'firebase-easy';

const config={
...
};
appInit(config);
...
auth.onAuthStateChange()...
...
rtdb.ref()...
...
firestore.collection('users')...
...
storage.ref()...
...
msg.
