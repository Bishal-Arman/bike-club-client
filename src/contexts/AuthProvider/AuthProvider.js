import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const provider = new GoogleAuthProvider();

  const handleEmailPassSignUp = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const varifyEmail = () => {
    setLoading(true);
    return sendEmailVerification(auth.currentUser);
  };
  const handleUpdateProfile = (profile) => {
    setLoading(true);
    return updateProfile(auth.currentUser, profile);
  };
  const handleEmailPassLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const handleGoogleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser === null || currentUser.emailVerified) {
        setUser(currentUser);
      }

      setUser(currentUser);
      setLoading(false);

      if (currentUser && currentUser.email) {
        const loggedUser = {
          email: currentUser.email,
        };
        fetch("https://bike-club-server.vercel.app/jwt", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(loggedUser),
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log("token", data);
            localStorage.setItem("bike-club-jwtToken", data.token);
          });
      } else {
        localStorage.removeItem("bike-club-jwtToken");
      }
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const authInfo = {
    user,
    loading,
    handleEmailPassSignUp,
    handleEmailPassLogin,
    varifyEmail,
    handleUpdateProfile,
    logOut,
    handleGoogleSignIn,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
