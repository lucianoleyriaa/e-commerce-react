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

   return (
      <Fragment>
         <div className={classes.product__card} onClick={() => navigateTo(props.product.id)}>
            <div className={classes.product__img}>
               <img src={`../images/${props.product.img}`} alt=""></img>
            </div>

            <div className={classes.product__description}>
               <h3 className={classes.product__name}>
                  {props.product.product}
               </h3>
               <span className={classes.product__price}>$2500</span>
            </div>
         </div>
      </Fragment>
   );
};

export default Product;
