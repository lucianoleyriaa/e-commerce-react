import { Fragment } from "react";
import Backdrop from "../Backdrop/Backdrop";
import Carrito from "../Carrito/Carrito";
import classes from "./Modal.module.css";

const Modal = (props) => {
   console.log(props.products);

   return (
      <Fragment>
         <Backdrop />

         <div className={classes.modal}>
            <p
               className={classes["modal__close-btn"]}
               onClick={props.closeModal}
            >
               X
            </p>
            <Carrito products={props.products} />
         </div>
      </Fragment>
   );
};

export default Modal;
