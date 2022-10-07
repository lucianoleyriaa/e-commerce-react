import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import { auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';

import { GuardRoute } from './GuardRoute';
import { PrivateRoutes } from './PrivateRoutes';

import { ShopRoutes } from '../shop';

import { onLogin, onLogout } from '../store';

import { LoginPage } from '../auth/pages/LoginPage';
import { RegisterPage } from '../auth/pages/RegisterPage';
import { CheckingAuth } from '../auth/components/CheckingAuth';

export const RoutesConfig = () => {

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
            <Switch>
                <Route path='/' exact >
                    <Redirect to='/productos' />
                </Route>
                <GuardRoute path='/login' exact component={ LoginPage } />
                <Route path='/signup' exact component={ RegisterPage } />
                <PrivateRoutes path='/productos' Component={ ShopRoutes } />
            </Switch>
        </>
    )
}
