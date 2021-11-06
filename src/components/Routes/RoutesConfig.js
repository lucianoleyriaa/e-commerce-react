import React, { Fragment } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Dashboard from '../Dashboard/Dashboard'

const RoutesConfig = () => {
   return (
      <Fragment>
         <Switch>
            <Route path='/' exact >
               <Redirect to='/productos' />
            </Route>
            <Route path='/productos' component={Dashboard} />
         </Switch>
      </Fragment>
   )
}

export default RoutesConfig
