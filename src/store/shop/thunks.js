import { onLoading, onSetProducts } from "./shopSlice";

const apiUrl = process.env.REACT_APP_FIREBASE_DATABASE_URL;

export const onStartLoadingProducts = () => {
    return async ( dispatch, getState ) => {

        dispatch( onLoading() );

        try {
            const response = await (await fetch(`${ apiUrl }/productos.json`)).json();
            const products = Object.values(response);

            dispatch( onSetProducts(products) );
            
        } catch (e) {
            // Todo: Manejar error
        }

    }
}