import { Fragment } from "react";
import classes from "./CarritoItem.module.css";

const CarritoItem = (props) => {
   return (
      <Fragment>
         <div className={classes.item}>
            <li>{props.product.product}</li>
            <p>{`$${props.product.price}`}</p>
         </div>
      </Fragment>
   );
};

export default CarritoItem;
