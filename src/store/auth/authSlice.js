import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    authStatus: 'checking',
    user: {},
}

export const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        onChecking: ( state ) => {
            state.authStatus = 'checking'
        },
        onLogin: ( state, action ) => {
            state.authStatus = 'authenticated';
            state.user = action.payload;
        },
        onLogout: ( state ) => {
            state.authStatus = 'not-authenticated';
            state.user = {};
        }
    }
});

export const { onChecking, onLogin, onLogout } = authSlice.actions;