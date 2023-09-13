import { initializeApp } from "firebase/app";

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut, 
   
} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAZ-vjhiTBkGqcp0OIdvMW483RbT8N0xVw",
  authDomain: "next-73a25.firebaseapp.com",
  projectId: "next-73a25",
  storageBucket: "next-73a25.appspot.com",
  messagingSenderId: "1041869012316",
  appId: "1:1041869012316:web:b66a277dc876226bc09599"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth();
// Authentication( Login/Register )

// Create Account
export const createAuthUserWithEmailAndPassword = async (email: string, password: string) => {
    if( !email || !password ) return;

    return await createUserWithEmailAndPassword(auth, email, password);
}

// Login Account
export const loginAuthUserWithEmailAndPassword = async (email: string, password: string) => {
    if( !email || !password ) return;

    return await signInWithEmailAndPassword(auth, email, password);
}

// Update the username name
export const updateAuthProfile = async (username: string) => {
    const user = auth.currentUser;
    if (user) {
        return await updateProfile(user, { displayName: username });
    } 
}

// Logout
export const signOutAuth = async () => {
    return signOut(auth)
}