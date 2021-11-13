import { Fragment } from "react";
import { useAuth } from "../../context/AuthProvider";
import { auth } from "../../firebase";
import { onAuthStateChanged } from "@firebase/auth";

import classes from "./Header.module.css";
import { useHistory } from "react-router";

const Header = (props) => {
   const { logout } = useAuth();
   const history = useHistory();

   const clickHandler = () => {
      props.changeModalState(true);
   };

   const onLogoutHandler = () => {
      logout();
   }

   onAuthStateChanged(auth, user => {
      if (!user) {
         return history.push('/login');
      }
   })

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
