import { Fragment } from "react";

import classes from "./Product.module.css";

const Product = (props) => {
   const clickHandler = (e) => {
      props.addToCarrito(props.product);
   };

   return (
      <Fragment>
         <div className={classes.product__card}>
            <div className={classes.product__img}>
               <img src={`./images/${props.product.img}`} alt=""></img>
            </div>

            <div className={classes.product__description}>
               <h3 className={classes.product__name}>
                  {props.product.product}
               </h3>
               <p>{props.product.description}</p>
               <div className={classes.product__btn}>
                  <button onClick={clickHandler}>Agregar al Carrito</button>
               </div>
            </div>
         </div>
      </Fragment>
   );
};

export default Product;
