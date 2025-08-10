import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import { authContextData } from '../Provider/AuthProvider';



const PrivateRouter = ({ children }) => {

    const {user} = useContext(authContextData);
    const location = useLocation();

    if(!user){
        return <Navigate to={"/login"} state={{ from: location }} replace ></Navigate>
    }

    return children;
};

export default PrivateRouter;