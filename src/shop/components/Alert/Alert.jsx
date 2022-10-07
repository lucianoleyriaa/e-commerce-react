import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { onToggleAlert } from '../../../store';

import styles from './Alert.module.css';

export const Alert = () => {

    const { showAlert } = useSelector( state => state.ui );
    const dispatch = useDispatch();
    
    useEffect(() => {
        console.log("Cambio")
        if (showAlert) {
            setTimeout(() => {
                dispatch( onToggleAlert() );
            }, 2000);
        }
        
    }, [ showAlert ])
    

    if (!showAlert) return <></>;

    return (
        <div className={styles.alert}>
            <div className={styles.alert__content}>
                <i className="fas fa-check-circle"></i>
                <span className={styles.alert__message}>Articulo agregado al carrito correctamente</span>
            </div>
        </div>
    )
}