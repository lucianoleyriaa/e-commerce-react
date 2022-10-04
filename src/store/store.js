import { configureStore } from '@reduxjs/toolkit';
import { authSlice, shopSlice } from './';

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        shop: shopSlice.reducer,
    }
});