import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const provider = new firebase.auth.GoogleAuthProvider();

const firebaseConfig = {
  apiKey: "AIzaSyDTEdTswRJQCw3XzAFCjDVr7GlCoHHH57M",
  authDomain: "nexus-chat-app.firebaseapp.com",
  projectId: "nexus-chat-app",
  storageBucket: "nexus-chat-app.appspot.com",
  messagingSenderId: "528240143390",
  appId: "1:528240143390:web:650da3423acdcdbc3bd20f",
  measurementId: "G-4TR11QBYSB"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);


//firebase.firestore().settings({ experimentalForceLongPolling: true });

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, provider, storage };
