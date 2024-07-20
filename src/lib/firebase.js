import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDnnYzN5anRceI1B3b71tUhqdT1fq_dJEA",
    authDomain: "the-little-duke-theatre.firebaseapp.com",
    projectId: "the-little-duke-theatre",
    storageBucket: "the-little-duke-theatre.appspot.com",
    messagingSenderId: "743495858107",
    appId: "1:743495858107:web:6a59cb5d9a35991038f69e",
    measurementId: "G-4250QM68KE"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
  