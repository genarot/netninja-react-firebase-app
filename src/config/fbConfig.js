import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCLnmXJ38LCFlXisbouCI_aomsppStC7gw",
    authDomain: "netninja-reactjs-marioplan.firebaseapp.com",
    databaseURL: "https://netninja-reactjs-marioplan.firebaseio.com",
    projectId: "netninja-reactjs-marioplan",
    storageBucket: "netninja-reactjs-marioplan.appspot.com",
    messagingSenderId: "801748613933"
  };


  firebase.initializeApp(config);
  firebase.firestore().settings({
      timestampsInSnapshots: true
  })

  export default firebase;