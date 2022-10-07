import { useDispatch, useSelector } from "react-redux";

import { onToggleModal } from "../../../store";

import { Carrito } from "../";
import { Backdrop } from "../";

import classes from "./Modal.module.css";

export const Modal = () => {

    const { modalOpen } = useSelector( state => state.ui );
    const dispatch = useDispatch();

    const closeModal = () => {
        dispatch( onToggleModal() );
    }

    if (!modalOpen) return <></>;

    return (
        <div>
            <Backdrop />

            <div className={classes.modal}>
                <p
                className={classes["modal__close-btn"]}
                onClick={ closeModal }
                >
                X
                </p>
                <Carrito />
            </div>
        </div>
    );
};
