import React, { useContext, useState } from 'react'
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from 'firebase/auth';

// Create context
const AuthContext = React.createContext();

export const useAuth = () => {
   return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
   const [currentUser, setCurrentUser] = useState();

   // Allow you to create an account and sign in at the same time
   const signUp = async (email, password) => {
      return await createUserWithEmailAndPassword(auth, email, password);
   }

   // Allow you to sign in
   const login = async (email, password) => {
      return await signInWithEmailAndPassword(auth, email, password);
   }

   // Allow you to close a session
   const logout = async () => {
      return await signOut(auth);
   }

   onAuthStateChanged(auth, user => {
      setCurrentUser(user);
   });

   const value = {
      currentUser,
      signUp,
      login,
      logout
   }

   return (
      <AuthContext.Provider value={value}>
         {children}
      </AuthContext.Provider>
   )
}


