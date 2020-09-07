import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBWotgCei3TB1yWgBF9YFymKmJVyA8sn6Q',
  authDomain: 'fb-clone-948d4.firebaseapp.com',
  databaseURL: 'https://fb-clone-948d4.firebaseio.com',
  projectId: 'fb-clone-948d4',
  storageBucket: 'fb-clone-948d4.appspot.com',
  messagingSenderId: '12741097146',
  appId: '1:12741097146:web:a331e4d98717a62f40f483',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
