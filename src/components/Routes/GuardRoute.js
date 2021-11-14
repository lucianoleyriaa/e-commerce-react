import React, { Fragment, useEffect, useState } from 'react'
import { Redirect, Route } from 'react-router-dom';
import { useAuth } from '../../context/AuthProvider';

const GuardRoute = ({ component: Component, ...rest }) => {
   const { currentUser } = useAuth();

   return (
      <Fragment>
         {currentUser && <Redirect to='/productos' />}
         {!currentUser && <Route {...rest} component={Component} />}
      </Fragment>
   )
}

export default GuardRoute
