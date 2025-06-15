import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/firebase.config';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import Loading from '../Component/Loading/Loading';
import Swal from 'sweetalert2';


export const authContextData = createContext();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [themeMode, setThemeMode] = useState(true);



    const handleUserSignUp = (name, email, photourl, password) => {
        if (!/[A-Z]/.test(password)) {
            Swal.fire({
                icon: "error",
                title: "Password must have at least one uppercase letter.",
                showConfirmButton: false,
                timer: 1500
            });
            return;
        } else if (!/[a-z]/.test(password)) {
            Swal.fire({
                icon: "error",
                title: "Password must have at least one lowercase letter.",
                showConfirmButton: false,
                timer: 1500
            });
            return;
        } else if (password.length < 6) {
            Swal.fire({
                icon: "error",
                title: "Password must be at least 6 characters long.",
                showConfirmButton: false,
                timer: 1500
            });
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
        setUser,
        themeMode,
        setThemeMode
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