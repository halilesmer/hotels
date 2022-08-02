import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../config/config";
import { async } from "@firebase/util";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = (props) => {
  const [user, setUser] = useState(null);
  const redirect = useNavigate();

  const register = async (email, password) => {
    console.log(email, password);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      // const user = userCredential.user;
      setUser(userCredential.user);
      console.log("userCredential: ", userCredential);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("Create User errorMessage: ", errorMessage, errorCode);
      // ..
    }
  };

  const login = async (email, password) => {
    console.log(email, password);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      //  const user = userCredential.user;
      setUser(userCredential.user);
    redirect("/cards/1");

    } catch (error) {
      setUser(null);
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("Login User errorMessage: ", errorMessage, errorCode);
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
  useEffect(() => checkIfUserLoggedIn, []);

  const value = {
    user,
    setUser,
    register,
    login,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
  };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};
export { AuthContext, AuthProvider };
