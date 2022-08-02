import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../config/config";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = (props) => {
  const [user, setUser] = useState(null);
  const [pwError, setPwError] = useState(false);
  const redirect = useNavigate();

  /* --------- register --------------- */
  const register = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUser(userCredential.user);
      console.log("userCredential: ", userCredential);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("Create User errorMessage: ", errorMessage, errorCode);
      // ..
    }
  };

  /* --------- login --------------- */
  const login = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUser(userCredential.user);
      redirect("/");
    } catch (error) {
      setUser(null);
      const errorCode = error.code;
      const errorMessage = error.message;
      setPwError(true);
      console.log("errorCode: ", errorCode);
      console.log("Login User errorMessage: ", errorMessage);
      // ..
    }
  };
  const checkIfUserLoggedIn = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        setUser(user);
      } else {
        // User is signed out
        setUser(null);
      }
    });
  };

  /* ---------- check if user is logged in ----------- */
  useEffect(() => checkIfUserLoggedIn, []);

  const value = {
    user,
    setUser,
    register,
    login,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    pwError,
    setPwError,
  };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};
export { AuthContext, AuthProvider };
