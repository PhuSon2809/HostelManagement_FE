// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnLq--LzzvIcrMVdOhbZGoVbv_g7esA5E",
  authDomain: "hostelmanagement-ae202.firebaseapp.com",
  projectId: "hostelmanagement-ae202",
  storageBucket: "hostelmanagement-ae202.appspot.com",
  messagingSenderId: "748441826484",
  appId: "1:748441826484:web:c136fb77c9855b4fe793e1",
  measurementId: "G-FPTCV5V12S",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app)
export { app, storage };

