import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { useForm } from '../../hooks/useForm';
import { onStartSignUp } from '../../store/auth/thunks';

const registerFormData = {
   username: '',
   email: '',
   password: '',
   confirmPassword: ''
}

const registerFormValidations = {
    username: [( value ) => value.length >= 4, 'El nombre de usuario tiene que tener mas de 4 caracteres'],
    email: [( value ) => value.includes('@'), 'Ingresa un email valido'],
    password: [( value ) => value.length >= 6, 'La contraseña debe contener al menos 6 caracteres'],
    confirmPassword: [ ( value ) => true, 'Las contrasñas no coincides' ],
}

export const RegisterPage = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const { 
            username, 
            email, 
            password, 
            confirmPassword, 
            usernameValid, 
            emailValid, 
            passwordValid, 
            isFormValid,
            onInputChange 
        } = useForm(registerFormData, registerFormValidations);

    const [ formSubmitted, setFormSubmitted ] = useState(false);
    const [ confirmPasswordValid, setConfirmPasswordValid ] = useState(true);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        setFormSubmitted(true);
        
        if (password !== confirmPassword) return setConfirmPasswordValid(false);

        if (!isFormValid) return;

        dispatch( onStartSignUp(email, password, username) );

        history.push('/productos');
    }

    return (
        <div className='container'>
            <div className="form__container">
                <form className="form" onSubmit={onSubmitHandler}>
                    <div className="form__group">
                        <label className="form__label">Usuario</label>
                        <input
                            type='text'
                            className='form__input'
                            name='username'
                            value={ username }
                            onChange={ onInputChange } />
                        {(usernameValid && usernameValid.length > 0 && formSubmitted) && <small className="invalid__input--msg">{ usernameValid }</small>}
                    </div>
                    <div className="form__group">
                        <label className="form__label">Email</label>
                        <input
                            type='text'
                            className='form__input'
                            name='email'
                            value={ email }
                            onChange={ onInputChange } />
                        {(emailValid && emailValid.length > 0 && formSubmitted) && <small className="invalid__input--msg">{ emailValid }</small>}
                    </div>
                    <div className="form__group">
                        <label className="form__label">Contraseña</label>
                        <input
                            type='password'
                            className='form__input'
                            name='password'
                            value={ password }
                            onChange={ onInputChange } />
                        {(passwordValid && passwordValid.length > 0 && formSubmitted) && <small className="invalid__input--msg">{ passwordValid }</small>}
                    </div>
                    <div className="form__group">
                        <label className="form__label">Confirmar contraseña</label>
                        <input
                            type='password'
                            className='form__input'
                            name='confirmPassword'
                            value={ confirmPassword }
                            onChange={ onInputChange } />
                        {(!confirmPasswordValid && formSubmitted) && <small className="invalid__input--msg">Las contraseñas no coinciden</small>}
                    </div>
                    <div className='form__group'>
                        <button className="button button--success" type='submit'>Crear cuenta</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
