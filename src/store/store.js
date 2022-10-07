import { configureStore } from '@reduxjs/toolkit';
import { authSlice, shopSlice, uiSlice } from './';

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        shop: shopSlice.reducer,
        ui: uiSlice.reducer,
    }
});