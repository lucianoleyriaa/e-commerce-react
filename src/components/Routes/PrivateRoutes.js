import React, { Fragment } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../../context/AuthProvider';


const PrivateRoutes = ({ route, Component }) => {
   const { currentUser } = useAuth();

   return (
      <Fragment>
         {currentUser &&
            <Route path={route} component={Component} />
         }
         {!currentUser &&
            <Redirect to='/login' />
         }
      </Fragment>
   )
}

export default PrivateRoutes
