import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDWPeVPhz6vYqT7_KgDPUAAM8nY7ucGbVY",
  authDomain: "discord-redux-2cd43.firebaseapp.com",
  databaseURL: "https://discord-redux-2cd43.firebaseio.com",
  projectId: "discord-redux-2cd43",
  storageBucket: "discord-redux-2cd43.appspot.com",
  messagingSenderId: "228188259249",
  appId: "1:228188259249:web:2db21e12d21dafc651b390",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
