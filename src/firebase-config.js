import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore} from "firebase/firestore" ;
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkbPTa3_LnNWjIfyRBFp5flBVjow4R_6I",
  authDomain: "blog-project-3214b.firebaseapp.com",
  projectId: "blog-project-3214b",
  storageBucket: "blog-project-3214b.appspot.com",
  messagingSenderId: "335885555774",
  appId: "1:335885555774:web:1091e0ece4cc8d0f24996f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);