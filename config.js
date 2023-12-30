import {initializeApp} from "firebase/app"
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCk3pxRskWGeLx9niGslmK81_czfyQ37Jc",
  authDomain: "borrowingapp-a9b48.firebaseapp.com",
  projectId: "borrowingapp-a9b48",
  storageBucket: "borrowingapp-a9b48.appspot.com",
  messagingSenderId: "947474434361",
  appId: "1:947474434361:web:bf8586edb7c96670d200e8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const database = getFirestore(app)
 