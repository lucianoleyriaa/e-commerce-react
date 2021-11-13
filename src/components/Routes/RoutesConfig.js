import React, { Fragment } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import { AuthProvider } from '../../context/AuthProvider';
import Dashboard from '../Dashboard/Dashboard';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';

const RoutesConfig = () => {
   return (
      <Fragment>
         <AuthProvider>
            <Switch>
               <Route path='/' exact >
                  <Redirect to='/productos' />
               </Route>
               <Route path='/login' exact component={Login} />
               <Route path='/signup' exact component={Signup} />
               <Route path='/productos' component={Dashboard} />
            </Switch>
         </AuthProvider>
      </Fragment>
   )
}

export default RoutesConfig
