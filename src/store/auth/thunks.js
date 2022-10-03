import { signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../../firebase';

import { onChecking, onLogin } from './authSlice';

export const onStartSignUp = (email, password, username) => {
    return async ( dispatch ) => {

        dispatch( onChecking() );

        try {

            const result = await createUserWithEmailAndPassword(auth, email, password);
            await updateProfile( auth.currentUser, username )

            const { uid, photoURL } = result.user;

            const user = {
                username,
                email,
                uid,
                photoURL
            }

            dispatch( onLogin(user) );

        } catch (e) {
            // TODO: Manejar error
        }
    }
}

export const onStartLogin = (email, password) => {
    return async ( dispatch ) => {

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

