import { Fragment } from "react";
import Product from "./Product/Product";

import classes from "./Products.module.css";

const Productos = (props) => {
   const productsList = [
      {
         id: 1,
         product: "Airiculares Hyperx",
         description:
            "HyperX Cloud II fueron diseñados como audífonos ultra cómodos con un sonido majestuoso. ",
         img: "headphones-hyperx.jpg",
         price: 1200,
      },
      {
         id: 2,
         product: "Teclado Hyperx Origins",
         description:
            "El HyperX Alloy Origins™ Core es un teclado ultracompacto y resistente sin zona numérica con conmutadores mecánicos ",
         img: "keyboard-hyperx.jpg",
         price: 2500,
      },
      {
         id: 3,
         product: "Mouse Hyperx Pulsefire",
         description:
            "HyperX Cloud II fueron diseñados como audífonos ultra cómodos con un sonido majestuoso. ",
         img: "mouse-hyperx-pulsefire.jpg",
         price: 1200,
      },
      {
         id: 4,
         product: "Microfono Hyperx",
         description:
            "HyperX Cloud II fueron diseñados como audífonos ultra cómodos con un sonido majestuoso. ",
         img: "microphone-hyperx.jpg",
         price: 1200,
      },
   ];

   const addToCarrito = (product) => {
      props.addProduct([...props.products, product]);
   };

   return (
      <Fragment>
         <div className={classes["section-products"]}>
            <h2>Productos</h2>
            <div className={classes.products__container}>
               {productsList.map((product) => {
                  return (
                     <Product
                        key={product.id}
                        product={product}
                        addToCarrito={addToCarrito}
                     />
                  );
               })}
            </div>
         </div>
      </Fragment>
   );
};

export default Productos;
