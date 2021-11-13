import { Fragment } from "react";
import { Link, useHistory } from "react-router-dom";

import classes from "./Product.module.css";

const Product = (props) => {
   const history = useHistory();

   const clickHandler = (e) => {
      props.addToCarrito(props.product);
   };

   const navigateTo = (id) => {
      history.push(`/productos/ver-detalle/${id}`)
   }

   const addToCart = (id) => {

   }

   return (
      <Fragment>
         <div className={classes.product__card}>
            <div className={classes.product__img} onClick={() => navigateTo(props.product.id)}>
               <img src={`../images/${props.product.img}`} alt=""></img>
            </div>

            <div className={classes.product__description}>
               <h3 className={classes.product__name}>
                  {props.product.product}
               </h3>
               <span className={classes.product__price}>$2500</span>
            </div>

            <button className={classes.product__button} onClick={() => addToCart(props.product.id)} >Agregar al carrito</button>
         </div>
      </Fragment>
   );
};

export default Product;
