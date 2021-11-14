import { Fragment } from "react";
import { useAuth } from "../../../context/AuthProvider";
import classes from "./CarritoItem.module.css";

const CarritoItem = (props) => {
   const { deleteFromCart } = useAuth();

   return (
      <Fragment>
         <div className={classes.item}>
            <li>{props.product.product}</li>
            <div className={classes.options__container}>
               <p className={classes.product__price}>{`$${props.product.price}`}</p>
               <span className={classes.product__delete} onClick={() => deleteFromCart(props.product.id)}><i class="fas fa-times"></i></span>
            </div>
         </div>
      </Fragment>
   );
};

export default CarritoItem;
