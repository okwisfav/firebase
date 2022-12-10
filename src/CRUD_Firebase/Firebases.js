
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

const firebaseConfig = {
    apiKey: "...",
    authDomain: "uneleap-9b858.firebaseapp.com",
    databaseURL: ".......",
    projectId: "uneleap-9b858",
    storageBucket: "uneleap-9b858.appspot.com",
    messagingSenderId: "399698159769",
    appId: "......",
    measurementId: "G-M0DL0DJRJG"
  };

  firebase.initializeApp(firebaseConfig);
  export const dataRef=firebase.database();
  export default firebase;