import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';

import { useAuth } from "../../context/AuthProvider";
import { onStartLoadingProducts } from "../../store";

import Product from "./Product/Product";
import SearchBar from "../SearchBar/SearchBar";
import AlertModal from "../Modal/AlertModal/AlertModal";

import classes from "./Products.module.css";

const Products = (props) => {

    const { products, isLoading } = useSelector( state => state.shop );
    const dispatch = useDispatch();

   // Hooks
//    Todo: Crear hooks para filtrar productos
   const { filterProducts, isSearching, showAlertModal } = useAuth();

    useEffect(() => {
        dispatch( onStartLoadingProducts() );
    }, []);

   return (
      <Fragment>
         <div className={classes["section-products"]}>
            <div className={classes["section-products__header"]}>
               <h2>Productos</h2>
               <SearchBar />
            </div>
            <div className={classes.products__container}>
               {isSearching && filterProducts.length ? filterProducts.map(product => {
                  return (
                     <Product
                        key={product.id}
                        product={product}
                     />
                  )
               }) :
                  null
               }

               {isSearching && !filterProducts.length ? <p>No se encontraron resultados</p> : null}

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

         {showAlertModal && <AlertModal />}

      </Fragment>
   );
};

export default Products;

// const productsList = [
//    {
//       id: 1,
//       product: "Airiculares Hyperx",
//       description:
//          "HyperX Cloud II fueron diseñados como audífonos ultra cómodos con un sonido majestuoso. ",
//       img: "headphones-hyperx.jpg",
//       price: 1200,
//    },
//    {
//       id: 2,
//       product: "Teclado Hyperx Origins",
//       description:
//          "El HyperX Alloy Origins™ Core es un teclado ultracompacto y resistente sin zona numérica con conmutadores mecánicos ",
//       img: "keyboard-hyperx.jpg",
//       price: 2500,
//    },
//    {
//       id: 3,
//       product: "Mouse Hyperx Pulsefire",
//       description:
//          "HyperX Cloud II fueron diseñados como audífonos ultra cómodos con un sonido majestuoso. ",
//       img: "mouse-hyperx-pulsefire.jpg",
//       price: 1200,
//    },
//    {
//       id: 4,
//       product: "Microfono Hyperx",
//       description:
//          "HyperX Cloud II fueron diseñados como audífonos ultra cómodos con un sonido majestuoso. ",
//       img: "microphone-hyperx.jpg",
//       price: 1200,
//    },
//    {
//       id: 4,
//       product: "Microfono Hyperx",
//       description:
//          "HyperX Cloud II fueron diseñados como audífonos ultra cómodos con un sonido majestuoso. ",
//       img: "microphone-hyperx.jpg",
//       price: 1200,
//    },
//    {
//       id: 4,
//       product: "Microfono Hyperx",
//       description:
//          "HyperX Cloud II fueron diseñados como audífonos ultra cómodos con un sonido majestuoso. ",
//       img: "microphone-hyperx.jpg",
//       price: 1200,
//    },
//    {
//       id: 4,
//       product: "Microfono Hyperx",
//       description:
//          "HyperX Cloud II fueron diseñados como audífonos ultra cómodos con un sonido majestuoso. ",
//       img: "microphone-hyperx.jpg",
//       price: 1200,
//    },
//    {
//       id: 4,
//       product: "Microfono Hyperx",
//       description:
//          "HyperX Cloud II fueron diseñados como audífonos ultra cómodos con un sonido majestuoso. ",
//       img: "microphone-hyperx.jpg",
//       price: 1200,
//    },
// ];
