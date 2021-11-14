import React, { Fragment } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import { AuthProvider } from '../../context/AuthProvider';
import Dashboard from '../Dashboard/Dashboard';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import GuardRoute from './GuardRoute';
import PrivateRoutes from './PrivateRoutes';

const RoutesConfig = () => {
   return (
      <Fragment>
         <AuthProvider>
            <Switch>
               <Route path='/' exact >
                  <Redirect to='/productos' />
               </Route>
               <GuardRoute path='/login' exact component={Login} />
               <Route path='/signup' exact component={Signup} />
               <PrivateRoutes path='/productos' Component={Dashboard} />
            </Switch>
         </AuthProvider>
      </Fragment>
   )
}

export default RoutesConfig
