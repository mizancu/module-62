// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlqkATaPfzCyOJmvdYujpGi8hZK0ESU10",
  authDomain: "genius-car-services-f04c9.firebaseapp.com",
  projectId: "genius-car-services-f04c9",
  storageBucket: "genius-car-services-f04c9.appspot.com",
  messagingSenderId: "265641707609",
  appId: "1:265641707609:web:abe01b2d390d785a448948"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;