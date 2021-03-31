import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAY7QVMZPbBVhvBNxpI9qKrd5ZrlTcnPuY",
    authDomain: "lias2016.firebaseapp.com",
    projectId: "lias2016",
    storageBucket: "lias2016.appspot.com",
    messagingSenderId: "823589233561",
    appId: "1:823589233561:web:ede7fc2bd930e6b52ca908"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  


const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };