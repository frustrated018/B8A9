import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import PropTypes from "prop-types";
import { auth } from "../Firebase/firebase.config";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);


  const logInUser = (email, password) =>{
    return signInWithEmailAndPassword(auth, email, password)
  }

    const createUser = (email, password) =>{
       return createUserWithEmailAndPassword(auth, email, password);
    }

  const authInfo = { user, createUser, logInUser };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
