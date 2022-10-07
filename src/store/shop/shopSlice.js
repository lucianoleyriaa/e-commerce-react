import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoading: false,
    cart: [],
    products: [],
}

export const shopSlice = createSlice({
    name: 'shop',
    initialState: initialState,
    reducers: {
        onSetProducts: ( state, action ) => {
            state.isLoading = false;
            state.products = action.payload;
        },
        onLoading: ( state, action ) => {
            state.isLoading = true;
        },
        onAddProductToCart: ( state, { payload } ) => {
            const productToAdd = state.products.find(el => el.id === payload) 
            state.cart.push(productToAdd);
        },
        onDeleteProductFromCart: ( state, { payload } ) => {
            state.cart = state.cart.filter( p => p.id !== payload );
        }
    }
});

export const { onSetProducts, onLoading, onAddProductToCart, onDeleteProductFromCart } = shopSlice.actions;