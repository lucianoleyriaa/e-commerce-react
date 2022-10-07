import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';

import { onStartLoadingProducts } from "../../../store";

import { useSearch } from "../../../hooks";

import { Product } from "../../components";
import { SearchBar } from "../../components";
import { ShopLayout } from "../../";

import classes from "./ProductsPage.module.css";

export const ProductsPage = () => {

    const { products, isLoading } = useSelector( state => state.shop );
    const dispatch = useDispatch();
    const { isSearching, productsFound, onSearch } = useSearch(products, 'product');

    useEffect(() => {
        dispatch( onStartLoadingProducts() );
    }, []);
    

    return (
        <ShopLayout>

            <div className={classes["section-products"]}>
                <div className={classes["section-products__header"]}>
                <h2>Productos</h2>
                <SearchBar onSearch={ onSearch }/>
                </div>
                <div className={classes.products__container}>
                {isSearching && productsFound.length ? productsFound.map(product => {
                    return (
                        <Product
                            key={product.id}
                            product={product}
                        />
                    )
                }) :
                    null
                }

                {isSearching && !productsFound.length ? <p>No se encontraron resultados</p> : null}

                {!isSearching && products.map((product) => {
                    return (
                        <Product
                            key={product.id}
                            product={product}
                        />
                    );
                })}

                { (!isSearching && isLoading) && 
                    <>
                        <div className="spinner-loader__container">
                            <div className="spinner-border text-primary" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    </> 
                }

                </div>
            </div>

        </ShopLayout>
    );
};

