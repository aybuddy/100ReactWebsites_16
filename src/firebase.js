import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyD4zlVNF9zuScQKyjo1AehmGHrWj5s6bMM',
  authDomain: 'netflix-build-ss.firebaseapp.com',
  projectId: 'netflix-build-ss',
  storageBucket: 'netflix-build-ss.appspot.com',
  messagingSenderId: '977576782768',
  appId: '1:977576782768:web:9cb44b29930d13a8cb0475',
  measurementId: 'G-WHW6KRZ6NF',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
