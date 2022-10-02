import { signOut, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';

import { onChecking, onLogin } from './authSlice';

export const startingLogin = (email, password) => {
    return async ( dispatch, getState ) => {

        dispatch( onChecking() );

        try {
            const result = await signInWithEmailAndPassword(auth, email, password);
            console.log(result);

            const { displayName, uid, photoURL } = result.user;

            const user = { email, displayName, uid, photoURL };

            dispatch( onLogin(user) );

        } catch (e) {
            // TODO: Manejar error
        }

    }
}

export const startSignOut = () => {
    return async () => {
        await signOut(auth);
    }
}

