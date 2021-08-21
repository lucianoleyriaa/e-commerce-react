import { Fragment } from "react";

import classes from "./Footer.module.css";

const Footer = () => {
   const date = new Date().getFullYear();

   return (
      <Fragment>
         <div className={classes.footer__container}>
            <p>This site was developed by Luciano Leyria - {date} </p>
         </div>
      </Fragment>
   );
};

export default Footer;
