import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = { timestampsInSnapshots: true };

const config = {
  apiKey: "AIzaSyAvfA1FNzBilYcTvViQW71EGtNqhNtbuxU",
  authDomain: "pbfuas.firebaseapp.com",
  databaseURL: "https://pbfuas.firebaseio.com",
  projectId: "pbfuas",
  storageBucket: "pbfuas.appspot.com",
  messagingSenderId: "103451048966",
  appId: "1:103451048966:web:edf64a8495ec0eacda1787",
  measurementId: "G-9099JZ2Q2J"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;