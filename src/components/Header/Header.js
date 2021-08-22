import { Fragment } from "react";

import classes from "./Header.module.css";

const Header = (props) => {
   const clickHandler = () => {
      props.changeModalState(true);
   };

   return (
      <Fragment>
         <div className={classes.header}>
            <h1 className={classes.header__logo}>E-Commerce</h1>
            <p className={classes.header__carrito} onClick={clickHandler}>
               Mi carrito
            </p>
         </div>
      </Fragment>
   );
};

export default Header;
