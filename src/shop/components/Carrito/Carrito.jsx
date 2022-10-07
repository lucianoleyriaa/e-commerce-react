import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { CarritoItem } from "../";

import classes from "./Carrito.module.css";

export const Carrito = () => {

    const { cart } = useSelector( state => state.shop );

    const [totalCart, setTotalCart] = useState(0);

    const calcTotal = () => {
        let total = 0;
        if (cart) {
            total = cart.reduce((accum, curr) => {
                return accum + curr.price
            }, 0);
        }
        setTotalCart(total);
    }

    useEffect(() => { calcTotal() }, [ cart ]);

    return (
        <>
            <div className={classes.carrito__container}>
                <div className={classes.carrito}>
                <div className={classes.carrito__heading}>
                    <h3>Tu carrito</h3>
                </div>

                <ul className={classes.carrito__list}>
                    {cart.length > 0 ? (
                        cart.map((product) => {
                            return <CarritoItem key={ product.id } product={ product } />;
                        })
                    ) : (
                        <div className={classes.carrito__message}>
                            <p>Aun no hay productos en tu carrito!</p>
                        </div>
                    )}
                </ul>
                </div>

                {cart.length > 0 ?
                <div className={classes.carrito__footer}>
                    <h3>Su compra: <span>${ totalCart }</span> </h3>
                    <button className={classes.btn__buy}>Comprar</button>
                </div>
                : null}

            </div>
        </>
   );
};
