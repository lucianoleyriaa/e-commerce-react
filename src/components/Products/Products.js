import { Fragment, useEffect } from "react";
import Product from "./Product/Product";
import { useAuth } from "../../context/AuthProvider";

import classes from "./Products.module.css";
import SearchBar from "../SearchBar/SearchBar";

const Products = (props) => {
   // Hooks
   const { addProducts, products, filterProducts, isSearching } = useAuth();

   useEffect(() => {
      fetchProducts();
   }, []);

   const fetchProducts = async () => {
      try {
         const response = await (await fetch(`https://e-commerce-a61d6-default-rtdb.firebaseio.com/productos.json`)).json();

         const products = Object.values(response);

         addProducts(products)

      } catch (e) {
         console.log(e);
      }
   }

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

            </div>
         </div>
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
