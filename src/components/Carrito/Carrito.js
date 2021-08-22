import { Fragment } from "react";

import classes from "./Carrito.module.css";
import CarritoItem from "./CarritoItem/CarritoItem";

const Carrito = (props) => {
   return (
      <Fragment>
         <div className={classes.carrito}>
            <div className={classes.carrito__heading}>
               <h3>Tu carrito</h3>
            </div>

            <ul className={classes.carrito__list}>
               {props.products.length > 0 ? (
                  props.products.map((product) => {
                     return <CarritoItem key={product.id} product={product} />;
                  })
               ) : (
                  <div className={classes.carrito__message}>
                     <p>Aun no hay productos en tu carrito!</p>
                  </div>
               )}
            </ul>
         </div>
      </Fragment>
   );
};

export default Carrito;
