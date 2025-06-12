import React, { useContext } from 'react';
import { Navigate } from 'react-router';
import { authContextData } from '../Provider/AuthProvider';



const PrivateRouter = ({ children }) => {

    const {user} = useContext(authContextData);

    if(!user){
        return <Navigate to={"/login"}></Navigate>
    }

    return children;
};

export default PrivateRouter;