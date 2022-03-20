import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Firebaseの初期化設定
const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyDq0V1YB-uBIAdCx0_wuvCWuEpCuZ_EYyM',
  authDomain: 'line-clone-7a4c6.firebaseapp.com',
  projectId: 'line-clone-7a4c6',
  storageBucket: 'line-clone-7a4c6.appspot.com',
  messagingSenderId: '941554062689',
  appId: '1:941554062689:web:5c8f6eddbe057af9122120',
  measurementId: 'G-7EQN1S0YKB',
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
