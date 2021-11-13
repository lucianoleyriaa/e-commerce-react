import React, { Fragment, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../context/AuthProvider';

import styles from './Login.module.css';

const Login = () => {
   // Hooks
   const { login, currentUser } = useAuth();
   const history = useHistory();

   // Initial state
   const initialState = {
      email: '',
      password: '',
   }

   // States
   const [userData, setUserData] = useState(initialState);
   const [errors, setErrors] = useState({});

   const onInputChange = (e) => {
      setUserData(prevState => {
         return { ...prevState, [e.target.name]: e.target.value }
      });
   }

   const onSubmitHandler = (e) => {
      e.preventDefault();

      if (Object.keys(validateInputs(userData, ["email", "password"])).length) {
         return setErrors(validateInputs(userData, ["email", "password"]));
      }

      setErrors({});

      const { email, password } = userData;
      login(email, password);

      if (currentUser) {
         return history.push('/productos');
      }

   }

   // Validate inputs 
   const validateInputs = (inputs, requiredFields) => {
      const keyInputs = Object.keys(inputs);
      const errors = {};

      keyInputs.forEach((input) => {
         if (!inputs[input] && requiredFields.includes(input)) {
            errors[input] = `${input}__error`;
         }
      });

      return errors;
   };

   // Check invalid inputs to show error messages
   const checkValid = (field) => {
      const value = Object.values(errors);
      if (value.indexOf(field) !== -1) return true;
      return false;
   };

   return (
      <div className='container'>
         <div className="form__container">
            <form className="form" onSubmit={onSubmitHandler}>
               <div className="form__group">
                  <label className="form__label">Email</label>
                  <input
                     type='text'
                     className={`form__input ${checkValid(errors["email"]) ? "is-invalid" : ""}`}
                     name='email'
                     onChange={onInputChange} />
                  {checkValid(errors["email"]) && <small>Debes ingresar un email</small>}
               </div>
               <div className="form__group">
                  <label className="form__label">Contraseña</label>
                  <input
                     type='password'
                     className={`form__input ${checkValid(errors["password"]) ? "is-invalid" : ""}`}
                     name='password'
                     onChange={onInputChange} />
                  {checkValid(errors["password"]) && <small>Debes ingresar una contraseña</small>}
               </div>
               <div className='form__group'>
                  <button
                     className={`${styles.button} ${styles["button--success"]}`}
                  >Ingresar</button>
               </div>
            </form>
            <div className={styles.signup__link}>
               <Link to='/signup'>¿No tienes una cuenta? Registrate</Link>
            </div>
         </div>
      </div>
   )
}

export default Login;
