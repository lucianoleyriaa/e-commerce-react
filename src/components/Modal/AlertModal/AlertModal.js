import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import Backdrop from '../../Backdrop/Backdrop';

import styles from './AlertModal.module.css';

const AlertModal = () => {
   return (
      <Fragment>
         <Backdrop />

         <div className={styles["alert-modal"]}>
            <h3>Debes iniciar sesion para continuar</h3>
            <Link to='/login'>Iniciar sesion</Link>
            <Link to='/signup'>Crear cuenta</Link>
         </div>

      </Fragment>
   )
}

export default AlertModal;
