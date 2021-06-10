// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAUt2bYSPcRTPJea5aqwjvV8d_5boJ-rMA",
    authDomain: "facebook-clone-b0f61.firebaseapp.com",
    projectId: "facebook-clone-b0f61",
    storageBucket: "facebook-clone-b0f61.appspot.com",
    messagingSenderId: "258722595070",
    appId: "1:258722595070:web:67329e2f35cc6f89e9a5af",
    measurementId: "G-84RSJG6MZV"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;