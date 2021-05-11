import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyB5rIcRNXxa19cCb12UlJOqlsoO6SoAx_E",
    authDomain: "barter-system-8993a.firebaseapp.com",
    projectId: "barter-system-8993a",
    storageBucket: "barter-system-8993a.appspot.com",
    messagingSenderId: "551502433823",
    appId: "1:551502433823:web:c63106487c19d4b39ecf2a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.firestore();