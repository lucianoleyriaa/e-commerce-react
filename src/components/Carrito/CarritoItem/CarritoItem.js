import { Fragment } from "react";
import { useDispatch } from "react-redux";

import { onDeleteProductFromCart } from "../../../store";

import classes from "./CarritoItem.module.css";

const CarritoItem = (props) => {

    const dispatch = useDispatch();

    return (
        <Fragment>
            <div className={classes.item}>
                <li>{props.product.product}</li>
                <div className={classes.options__container}>
                <p className={classes.product__price}>{`$${props.product.price}`}</p>
                <span className={classes.product__delete} onClick={() => dispatch( onDeleteProductFromCart(props.product.id) )}><i className="fas fa-times"></i></span>
                </div>
            </div>
        </Fragment>
    );
};

export default CarritoItem;
