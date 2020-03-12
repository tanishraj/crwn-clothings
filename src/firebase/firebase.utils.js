import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: "AIzaSyAKAwXg1nOr2TcJbGLz-FQrvOUeuTyfPek",
	authDomain: "crwn-db-75caf.firebaseapp.com",
	databaseURL: "https://crwn-db-75caf.firebaseio.com",
	projectId: "crwn-db-75caf",
	storageBucket: "crwn-db-75caf.appspot.com",
	messagingSenderId: "513984954251",
	appId: "1:513984954251:web:8bdbf55f916d9eb8d6f98e",
	measurementId: "G-JNYEWGGDML"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;