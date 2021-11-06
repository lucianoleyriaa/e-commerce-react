import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';

import styles from './Login.module.css';

const Login = () => {
   return (
      <Fragment>
         <div className={styles.form__container}>
            <form className={styles.form}>
               <div className={styles.form__group}>
                  <label className={styles.form__label}>Usuario</label>
                  <input type='text' className={styles.form__input} />
               </div>
               <div className={styles.form__group}>
                  <label className={styles.form__label}>Contraseña</label>
                  <input type='password' className={styles.form__input} />
               </div>
               <div className='form__group'>
                  <button className={`${styles.button} ${styles["button--success"]}`}>Ingresar</button>
                  {/* <button className='button button--default'>Registrarse</button> */}
               </div>
            </form>
            <hr></hr>
            <div className={styles.signup__link}>
               <Link to='/signup'>¿No tienes una cuenta? Registrate</Link>
            </div>
         </div>
      </Fragment>
   )
}

export default Login;
