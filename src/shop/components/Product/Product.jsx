import { useDispatch} from "react-redux";
import { useHistory } from "react-router-dom";

import { onAddProductToCart, onToggleAlert } from "../../../store";

import classes from "./Product.module.css";

export const Product = (props) => {
    // TODO: Refactorizar los props
    const dispatch = useDispatch();

    const history = useHistory();

    const navigateTo = (id) => {
        history.push(`/productos/ver-detalle/${id}`)
    }

    const addProductToCart = () => {
        dispatch( onAddProductToCart(props.product.id) );
        dispatch( onToggleAlert() )
    }

    return (
        <div className={classes.product__card}>
            <div className={classes.product__img} onClick={() => navigateTo(props.product.id)}>
                <img src={`../images/${props.product.img}`} alt=""></img>
            </div>

            <div className={classes.product__description}>
                <h3 className={classes.product__name}>
                    {props.product.product}
                </h3>
                <span className={classes.product__price}>${props.product.price}</span>
            </div>

            <button className={classes.product__button} onClick={() => addProductToCart()} >Agregar al carrito</button>
        </div>
    );
};

