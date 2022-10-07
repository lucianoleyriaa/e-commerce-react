import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

export const GuardRoute = ({ component: Component, ...rest }) => {

   const { authStatus } = useSelector( state => state.auth );

   return (
      <>
         {authStatus === 'authenticated' && <Redirect to='/productos' />}
         {authStatus !== 'authenticated' && <Route {...rest} component={Component} />}
      </>
   )
}
