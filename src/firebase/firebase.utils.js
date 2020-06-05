import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyD570SfLxPy08l2byBgj1xMQDxD32hIkLk',
	authDomain: 'crwn-db-e4cbb.firebaseapp.com',
	databaseURL: 'https://crwn-db-e4cbb.firebaseio.com',
	projectId: 'crwn-db-e4cbb',
	storageBucket: 'crwn-db-e4cbb.appspot.com',
	messagingSenderId: '768719786373',
	appId: '1:768719786373:web:4c449cfba6c3174925f4ec',
	measurementId: 'G-8KTYBG585Z',
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
