import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

import { onToggleModal, startSignOut } from "../../../store";

import classes from "./Header.module.css";

export const Header = () => {

    const dispatch = useDispatch();

    const history = useHistory();

    const clickHandler = () => {
        dispatch( onToggleModal() );
    };

    const onLogoutHandler = () => {
        dispatch( startSignOut() );
        return history.push('/login');
    }

    return (
        <>
            <div className={classes.header}>
                <h1 className={classes.header__logo}>E-Commerce</h1>
                <div className={classes.header__actions}>
                <p className={classes.header__carrito} onClick={clickHandler}>
                    Mi carrito
                </p>
                <button className={classes.header__logout} onClick={onLogoutHandler}>Logout</button>
                </div>
            </div>
        </>
    );
};
