import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoutes = ({ route, Component }) => {

   const { authStatus } = useSelector( state => state.auth );

   return (
      <>
         { authStatus === 'authenticated' &&
            <Route path={ route } component={ Component } />
         }
         { authStatus !== 'authenticated' &&
            <Redirect to='/login' />
         }
      </>
   )
}

export default PrivateRoutes
