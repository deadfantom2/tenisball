import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCz3V3kRYGSmvK0Y75SlvIOk5SHlvGPaEI',
  authDomain: 'coins-cdc5e.firebaseapp.com',
  projectId: 'coins-cdc5e',
  storageBucket: 'coins-cdc5e.appspot.com',
  messagingSenderId: '723917946127',
  appId: '1:723917946127:web:c55e65bad812bc6fe7927a',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
