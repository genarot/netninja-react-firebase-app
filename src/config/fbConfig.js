import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCiSl933Ewz8KO-GkuZktJ6Ak-tqDXRBrM",
    authDomain: "netninja-marioapp.firebaseapp.com",
    databaseURL: "https://netninja-marioapp.firebaseio.com",
    projectId: "netninja-marioapp",
    storageBucket: "",
    messagingSenderId: "993018816431"
  };


  firebase.initializeApp(config);
  firebase.firestore().settings({
      timestampsInSnapshots: true
  })

  export default firebase;