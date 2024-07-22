import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnnYzN5anRceI1B3b71tUhqdT1fq_dJEA",
  authDomain: "the-little-duke-theatre.firebaseapp.com",
  databaseURL: "https://the-little-duke-theatre-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "the-little-duke-theatre",
  storageBucket: "the-little-duke-theatre.appspot.com",
  messagingSenderId: "743495858107",
  appId: "1:743495858107:web:6a59cb5d9a35991038f69e",
  measurementId: "G-4250QM68KE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db, collection, getDocs };