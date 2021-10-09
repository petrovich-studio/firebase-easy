# firebase-easy
npm module.

RU: firebase-esay модуль для упрощения работы с кодом.
EN: firebase is an easy module to simplify working with code.

# Пример/Example:

import { appInit, auth, rtdb, firestore, storage, msg } from 'firebase-easy';<br />
<br />
const config={<br />
...<br />
};<br />
appInit(config);<br />
...<br />
auth.onAuthStateChange()...<br />
...<br />
rtdb.ref()...<br />
...<br />
firestore.collection('users')...<br />
...<br />
storage.ref()...<br />
...<br />
msg.
<br />