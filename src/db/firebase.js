import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
//import { getAuth } from 'firebase/auth';



const firebaseConfig = {
  apiKey: "AIzaSyDnnYzN5anRceI1B3b71tUhqdT1fq_dJEA",
  authDomain: "the-little-duke-theatre.firebaseapp.com",
  databaseURL: "https://the-little-duke-theatre-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "the-little-duke-theatre",
  storageBucket: "the-little-duke-theatre.appspot.com",
  messagingSenderId: "743495858107",
  appId: "1:743495858107:web:6a59cb5d9a35991038f69e",

};

// Initialize Firebase
const app = getApps().length? getApp() : initializeApp(firebaseConfig);
export { app }
//const app = initializeApp(firebaseConfig);

const db = getFirestore();
//const auth = getAuth(app);
export { db, collection, getDocs };