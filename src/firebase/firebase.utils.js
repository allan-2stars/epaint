import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDgzb0A1hKOKCJHQiKda9pq-VdB_yEOyCI",
    //key:"AIzaSyBKj4-ZmyQUMcpgbNcc6pLcO5U6tGZhoNw",
    authDomain: "epaint-76064.firebaseapp.com",
    projectId: "epaint-76064",
    storageBucket: "epaint-76064.appspot.com",
    messagingSenderId: "456813720230",
    appId: "1:456813720230:web:3286aa0aa202d15542fa67",
    measurementId: "G-2T0JK5YC7Z"
};

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase