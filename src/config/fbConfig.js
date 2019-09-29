import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyBaJspq6LxMAs65Tf9SYF1yugR-Jy9LkaM",
    authDomain: "in-good-hands-ad.firebaseapp.com",
    databaseURL: "https://in-good-hands-ad.firebaseio.com",
    projectId: "in-good-hands-ad",
    storageBucket: "",
    messagingSenderId: "204719160864",
    appId: "1:204719160864:web:568bf5a4f0ac112f298645",
    measurementId: "G-XE492QJB8M"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // firebase.analytics();
  firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase;