import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBpBKebh55jn9zENlcVE0_QGkmgMPOTCWM",
    authDomain: "disneyplus-clone-7269b.firebaseapp.com",
    projectId: "disneyplus-clone-7269b",
    storageBucket: "disneyplus-clone-7269b.appspot.com",
    messagingSenderId: "778338528150",
    appId: "1:778338528150:web:1b369c572ab184a6328bb7",
    measurementId: "G-F2NEWB9466"
  };
  

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();


  export { auth,provider,storage};
  export default db;
