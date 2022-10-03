import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { onStartLogin } from '../../store/auth/thunks';

import { useForm } from '../../hooks';

import styles from './Login.module.css';

const loginFormData = {
    email: '',
    password: '',
}

const loginFormValidations = {
    'email': [ ( value ) => value.includes('@'), 'Ingresa un email valido' ],
    'password': [ ( value ) => value.length >= 6, 'La contraseña debe contener mas de 6 caracteres' ],
}

const Login = () => {

    const dispatch = useDispatch();
   
    const { email, password, emailValid, passwordValid, onInputChange, isFormValid } = useForm(loginFormData, loginFormValidations);
    const [ formSubmitted, setFormSubmitted ] = useState(false);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        setFormSubmitted(true);

        if (!isFormValid) return;

        dispatch( onStartLogin(email, password) );
    }

    return (
        <div className='container'>
            <div className="form__container">
                <form className="form" onSubmit={ onSubmitHandler }>
                    <div className="form__group">
                        <label className="form__label">Email</label>
                        <input
                            type='text'
                            className={`form__input`}
                            name='email'
                            value={ email }
                            onChange={ onInputChange }  
                            />
                        {(emailValid && emailValid.length > 0 && formSubmitted) && <small className='invalid__input--msg'>{ emailValid }</small>}
                    </div>
                    <div className="form__group">
                        <label className="form__label">Contraseña</label>
                        <input
                            type='password'
                            className={`form__input`}
                            name='password'
                            value={ password }
                            onChange={ onInputChange } />
                        {(passwordValid && passwordValid.length > 0 && formSubmitted) && <small className='invalid__input--msg'>{ passwordValid }</small>}
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
