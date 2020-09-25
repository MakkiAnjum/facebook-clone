import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCC5wdhqgpdB5WCq9q0YJu9oMnVUqSlEdw",
    authDomain: "facebook-clone-e4281.firebaseapp.com",
    databaseURL: "https://facebook-clone-e4281.firebaseio.com",
    projectId: "facebook-clone-e4281",
    storageBucket: "facebook-clone-e4281.appspot.com",
    messagingSenderId: "509110405047",
    appId: "1:509110405047:web:3f9416d72677b5a87f4a32"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();  // Start a sign in process for an unauthenticated user.

export { auth, provider };
export default db;