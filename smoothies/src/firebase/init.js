import firebase from 'firebase'
import firestore from 'firebase/firestore';
import firebaseui from 'firebaseui';

    // Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDQiZMsLU8ecGzxMrfyQx7k7AhiZSSxwJU",
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