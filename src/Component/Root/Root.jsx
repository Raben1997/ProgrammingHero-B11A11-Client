import React, { useContext } from 'react';
import { Outlet } from 'react-router';
import { authContextData } from '../../Provider/AuthProvider';



const Root = () => {

    const { themeMode } = useContext(authContextData);

    return (
        <div className='rootDiv' data-theme={themeMode ? "light" : "dark"}>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;