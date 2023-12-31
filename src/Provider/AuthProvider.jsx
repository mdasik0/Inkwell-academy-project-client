import { createContext, useEffect, useState } from "react";

import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/firebase.config";
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  //============================================================ States here ==========================================================================
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const auth = getAuth(app);
  // =========================== Auth State =========================
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser?.email) {
        fetch(`https://b7a12-summer-camp-server-side-mdasik0.vercel.app/jwt`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ email: currentUser?.email }),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("access-token", data?.token);
          });
      }
      setLoading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  // Authentication
  const GoogleLogin = () => {
    setLoading(true);
    const GoogleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, GoogleProvider);
  };

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUser = (name, photoUrl) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoUrl,
    });
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const authInfo = {
    user,
    loading,
    GoogleLogin,
    createUser,
    updateUser,
    signInUser,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
export default AuthProvider;
