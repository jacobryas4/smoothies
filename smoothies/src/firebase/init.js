import firebase from 'firebase'
import firestore from 'firebase/firestore';
    // Your web app's Firebase configuration
var firebaseConfig = {
    authDomain: "smoothies-3b491.firebaseapp.com",
    databaseURL: "https://smoothies-3b491.firebaseio.com",
    projectId: "smoothies-3b491",
    storageBucket: "",
    messagingSenderId: "227171767960",
    appId: "1:227171767960:web:40f73f6f2dbd9572"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);


//   export firestore database
export default firebaseApp.firestore();