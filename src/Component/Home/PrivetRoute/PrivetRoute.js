import React from 'react';
// import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../Hook/useAuth';
// import useFirebase from '../../../Hook/useFirebase';
// import useAuth from '../../hooks/useAuth';

const PrivetRoute = ({children, ...rest}) => {
    const {user,isLoading}=useAuth()
    // if (isLoading) {
    //     return  <span class="visually-hidden">Loading...</span>
    // }
    return (
        <Route
        {...rest}
        render={({location})=>
            user.email ? children
            : <Redirect
            to={{
                pathname:"/login",
                state:{from:location}
            }}
                       
            ></Redirect>}
        >
            
        </Route>
    );
};

export default PrivetRoute;