 
// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { 
    createUserWithEmailAndPassword, 
    getAuth, 
    signInWithEmailAndPassword, 
    signOut} from "firebase/auth";
import { 
    addDoc, 
    collection, 
    getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
  apiKey: "AIzaSyBFNCe7qyw5Y0KOr9ZHZcJvRP8wT4c-7LI",
  authDomain: "netflix-dupe-c484f.firebaseapp.com",
  projectId: "netflix-dupe-c484f",
  storageBucket: "netflix-dupe-c484f.appspot.app",
  messagingSenderId: "483117592135",
  appId: "1:483117592135:web:9ff7a8ae50785396824b62",
  measurementId: "G-WYKZ3313GP"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db= getFirestore(app);


const signup = async(name, email, password)=>{
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "user"),{
            uid :user.uid,
            authProvider: "local",
            email, 
        });
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}


const login = async (email ,password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);

    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}


const logout = async () => {
    signOut(auth);
}

export {auth, db, login, signup, logout}