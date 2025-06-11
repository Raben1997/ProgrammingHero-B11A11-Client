import React, { createContext } from 'react';


export const authContext = createContext();

const AuthProvider = ({ children }) => {

    const a = 10;

    const contextValue = {
        a
    }


    return (
        <authContext.Provider value={contextValue}>{children}</authContext.Provider>
    );
};

export default AuthProvider;