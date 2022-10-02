import React, { useContext, useEffect, useState } from 'react'
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from 'firebase/auth';

// Create context
const AuthContext = React.createContext();

export const useAuth = () => {
   return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
   const [currentUser, setCurrentUser] = useState({});
   const [cartItems, setCartItems] = useState([]);
   const [products, setProducts] = useState([]);
   const [showAlert, setShowAlert] = useState(false);
   const [filterProducts, setFilterProducts] = useState([]);
   const [isSearching, setIsSearching] = useState(false);
   const [showAlertModal, setShowAlertModal] = useState(false);

   useEffect(() => {
      onAuthStateChanged(auth, user => {
         setCurrentUser(user);
      });
   });

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

   // Allow you to add items into the cart
   const addToCart = (id) => {
      const item = products.filter(product => product.id === id);
      setCartItems((prevState) => {
         return [...prevState, ...item]
      });
      setShowAlert(true);
      setTimeout(() => { setShowAlert(false) }, 3000)
   }

   // Allow you to delete a product from the cart
   const deleteFromCart = (id) => {
      const productsInCart = cartItems.filter(product => product.id !== id);
      setCartItems(productsInCart);
   }

   // Allow you to save the products
   const addProducts = (products) => {
      setProducts(products);
   }

   const value = {
      currentUser,
      signUp,
      login,
      logout,
      addToCart,
      deleteFromCart,
      cartItems,
      products,
      addProducts,
      showAlert,
      setFilterProducts,
      filterProducts,
      isSearching,
      setIsSearching,
      setShowAlertModal,
      showAlertModal
   }

   return (
      <AuthContext.Provider value={value}>
         {children}
      </AuthContext.Provider>
   )
}


