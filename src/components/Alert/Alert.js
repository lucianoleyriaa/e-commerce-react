import React, { Fragment } from 'react'

import styles from './Alert.module.css';

const Alert = () => {
   return (
      <Fragment>
         <div className={styles.alert}>
            <div className={styles.alert__content}>
               <i className="fas fa-check-circle"></i>
               <span className={styles.alert__message}>Articulo agregado al carrito correctamente</span>
            </div>
         </div>
      </Fragment>
   )
}

export default Alert
