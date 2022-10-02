import { Fragment, useEffect, useState } from "react";
import { useAuth } from "../../context/AuthProvider";

import classes from "./Carrito.module.css";
import CarritoItem from "./CarritoItem/CarritoItem";

const Carrito = (props) => {
   // Hooks
   const { cartItems } = useAuth();
   const [totalCart, setTotalCart] = useState(0);

   // This function calc the total amount of the cart
   const calcTotal = () => {
      let total = 0;
      if (cartItems) {
         total = cartItems.reduce((accum, curr) => {
            return accum + curr.price
         }, 0);
      }
      setTotalCart(total);
   }

   useEffect(() => { calcTotal() }, [cartItems]);

   return (
      <Fragment>
         <div className={classes.carrito__container}>
            <div className={classes.carrito}>
               <div className={classes.carrito__heading}>
                  <h3>Tu carrito</h3>
               </div>

               <ul className={classes.carrito__list}>
                  {cartItems.length > 0 ? (
                     cartItems.map((product) => {
                        return <CarritoItem key={product.id} product={product} />;
                     })
                  ) : (
                     <div className={classes.carrito__message}>
                        <p>Aun no hay productos en tu carrito!</p>
                     </div>
                  )}
               </ul>
            </div>

            {cartItems.length > 0 ?
               <div className={classes.carrito__footer}>
                  <h3>Su compra: <span>${totalCart}</span> </h3>
                  <button className={classes.btn__buy}>Comprar</button>
               </div>
               : null}

         </div>
      </Fragment>
   );
};

export default Carrito;
