import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/firebase.config';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { toast } from 'react-toastify';
import Loading from '../Component/Loading/Loading';


export const authContextData = createContext();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);



    const handleUserSignUp = (name, email, photourl, password) => {

        // console.log(name, email, photourl, password);

        if (!/[A-Z]/.test(password)) {
            toast.error("Password must have at least one uppercase letter.");
            return;
        } else if (!/[a-z]/.test(password)) {
            toast.error("Password must have at least one lowercase letter.");
            return;
        } else if (password.length < 6) {
            toast.error("Password must be at least 6 characters long.");
            return;
        }

        return createUserWithEmailAndPassword(auth, email, password)

    }


    const handleSignIn = (email, password) => {

        return signInWithEmailAndPassword(auth, email, password);

    }

    const handleSignInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider);
    }


    const handleSignOut = () => {

        return signOut(auth);

    }



    const contextValue = {
        handleUserSignUp,
        handleSignIn,
        handleSignInWithGoogle,
        handleSignOut,
        user,
        setUser
    }

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => {
            unsubscribe();
        }

    }, [])

    if (loading) {
        return <Loading></Loading>;
    }


    return <authContextData.Provider value={contextValue}>{children}</authContextData.Provider>;
};

export default AuthProvider;