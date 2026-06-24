import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBh1VFgDrVR-IVm0t-1QD8YAUT98tCHPNw",
  authDomain: "interviewiq-9629b.firebaseapp.com",
  projectId: "interviewiq-9629b",
  storageBucket: "interviewiq-9629b.firebasestorage.app",
  messagingSenderId: "317934675106",
  appId: "1:317934675106:web:8204644c1afe10521ae3fb"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider }