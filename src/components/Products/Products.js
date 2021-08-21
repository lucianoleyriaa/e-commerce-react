import { Fragment } from "react";
import Product from "./Product/Product";

import classes from "./Products.module.css";

const Productos = () => {
   const productsList = [
      {
         product: "Airiculares Hyperx",
         description:
            "HyperX Cloud II fueron diseñados como audífonos ultra cómodos con un sonido majestuoso. ",
         img: "headphones-hyperx.jpg",
         price: 1200,
      },
      {
         product: "Teclado Hyperx Alloy Origins",
         description:
            "El HyperX Alloy Origins™ Core es un teclado ultracompacto y resistente sin zona numérica con conmutadores mecánicos ",
         img: "keyboard-hyperx.jpg",
         price: 2500,
      },
      {
         product: "Mouse Hyperx Pulsefire",
         description:
            "HyperX Cloud II fueron diseñados como audífonos ultra cómodos con un sonido majestuoso. ",
         img: "mouse-hyperx-pulsefire.jpg",
         price: 1200,
      },
      {
         product: "Microfono Hyperx",
         description:
            "HyperX Cloud II fueron diseñados como audífonos ultra cómodos con un sonido majestuoso. ",
         img: "microphone-hyperx.jpg",
         price: 1200,
      },
   ];

   return (
      <Fragment>
         <div className={classes["section-products"]}>
            <h2>Productos</h2>
            <div className={classes.products__container}>
               {productsList.map((product) => {
                  return <Product product={product} />;
               })}
            </div>
         </div>
      </Fragment>
   );
};

export default Productos;
