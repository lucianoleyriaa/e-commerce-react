import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

import { startSignOut } from "../../store";

import classes from "./Header.module.css";

const Header = (props) => {

    const dispatch = useDispatch();

    const history = useHistory();

    const clickHandler = () => {
        props.changeModalState(true);
    };

    const onLogoutHandler = () => {
        dispatch( startSignOut() );
        return history.push('/login');
    }

    return (
        <Fragment>
            <div className={classes.header}>
                <h1 className={classes.header__logo}>E-Commerce</h1>
                <div className={classes.header__actions}>
                <p className={classes.header__carrito} onClick={clickHandler}>
                    Mi carrito
                </p>
                <button className={classes.header__logout} onClick={onLogoutHandler}>Logout</button>
                </div>
            </div>
        </Fragment>
    );
};

export default Header;
