import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

import { getStorage } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyAZ3Rm_gyY8RgUJUI_AqxeCFpYJIAaWGsk",
  authDomain: "hbml-capital.firebaseapp.com",
  projectId: "hbml-capital",
  storageBucket: "hbml-capital.firebasestorage.app",
  messagingSenderId: "893969951538",
  appId: "1:893969951538:web:ba028463a6adcfb417c52b"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
