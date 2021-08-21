import { Fragment } from "react";

import classes from "./Header.module.css";

const Header = () => {
   return (
      <Fragment>
         <div className={classes.header}>
            <h1 className={classes.header__logo}>E-Commerce</h1>
            <p className={classes.header__carrito}>Mi carrito</p>
         </div>
      </Fragment>
   );
};

export default Header;
