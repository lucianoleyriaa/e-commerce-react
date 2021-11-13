import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../context/AuthProvider';

const Signup = () => {
   /* Accesing to the context */
   const { signUp } = useAuth();

   /* Initial state */
   const initialData = {
      user: '',
      email: '',
      password: '',
      confirmPassword: ''
   }

   /* States */
   const [userData, setUserData] = useState(initialData);
   const [errors, setErrors] = useState({});
   const history = useHistory()

   /* Inputs changes handler */
   const onInputChange = (e) => {
      setUserData(prevState => {
         return { ...prevState, [e.target.name]: e.target.value }
      });
   }

   /* Submit handler */
   const onSubmitHandler = (e) => {
      e.preventDefault();
      const requiredFields = [
         "user",
         "email",
         "password",
         "confirmPassword"
      ]

      if (Object.keys(validateInputs(userData, requiredFields)).length) {
         return setErrors(validateInputs(userData, requiredFields))
      }

      setErrors({});

      const { email, password } = userData;

      signUp(email, password);

      history.push('/productos');

   }

   /* Validate inputs */
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

   /* Check invalid inputs to show error messages */
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
                  <label className="form__label">Usuario</label>
                  <input
                     type='text'
                     className={`form__input ${checkValid(errors["user"]) ? "invalid__input" : ""}`}
                     name='user'
                     onChange={onInputChange} />
                  {checkValid(errors["user"]) && <small className="invalid__input--msg">Debes ingresar un nombre de usuario</small>}
               </div>
               <div className="form__group">
                  <label className="form__label">Email</label>
                  <input
                     type='text'
                     className={`form__input ${checkValid(errors["email"]) ? "invalid__input" : ""}`}
                     name='email'
                     onChange={onInputChange} />
                  {checkValid(errors["user"]) && <small className="invalid__input--msg">Debes ingresar un email</small>}
               </div>
               <div className="form__group">
                  <label className="form__label">Contraseña</label>
                  <input
                     type='password'
                     className={`form__input ${checkValid(errors["password"]) ? "invalid__input" : ""}`}
                     name='password'
                     onChange={onInputChange} />
                  {checkValid(errors["user"]) && <small className="invalid__input--msg">Debes ingresar una contraseña</small>}
               </div>
               <div className="form__group">
                  <label className="form__label">Confirmar contraseña</label>
                  <input
                     type='password'
                     className={`form__input ${checkValid(errors["confirmPassword"]) ? "invalid__input" : ""}`}
                     name='confirmPassword'
                     onChange={onInputChange} />
                  {checkValid(errors["user"]) && <small className="invalid__input--msg">Debes confirmar tu contraseña</small>}
               </div>
               <div className='form__group'>
                  <button className="button button--success" type='submit'>Crear cuenta</button>
               </div>
            </form>
         </div>
      </div>
   )
}

export default Signup
