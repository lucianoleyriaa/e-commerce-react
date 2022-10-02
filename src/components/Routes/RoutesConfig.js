import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import { auth } from '../../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { AuthProvider } from '../../context/AuthProvider';

import GuardRoute from './GuardRoute';
import PrivateRoutes from './PrivateRoutes';

import { onLogin, onLogout } from '../../store';
import { CheckingAuth } from '../CheckingAuth';

import Dashboard from '../Dashboard/Dashboard';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';

const RoutesConfig = () => {

    const { authStatus } = useSelector( state => state.auth );
    const dispatch = useDispatch();

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (!user) return dispatch( onLogout() );

            if (user) {

                const { email, displayName, uid, photoURL } = user;

                const userData = { email, displayName, uid, photoURL };

                dispatch( onLogin(userData) );
            }
        });
    }, []);

    if (authStatus === 'checking') {
        return <CheckingAuth />
    }

    return (
        <>
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
        </>
    )
}

export default RoutesConfig
