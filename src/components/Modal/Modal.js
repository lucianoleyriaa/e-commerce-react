import { Fragment } from "react";
import Backdrop from "../Backdrop/Backdrop";
import classes from "./Modal.module.css";

const Modal = (props) => {
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
         </div>
      </Fragment>
   );
};

export default Modal;
