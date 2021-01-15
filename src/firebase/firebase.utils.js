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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return
    //console.log(firestore.doc('users/ss'))
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()
    if(!snapShot.exists) {
        const { displayName, email} = userAuth
        const createdAt = new Date()

        try {
            await userRef.set({
                displayName, email, createdAt, ...additionalData
            })
        }
        catch (err) {
            console.log('error creating user', err.message)
        }
    }
    return userRef
}

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase