import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import { onAddProductToCart } from '../../../store';

import styles from './ProductDetailPage.module.css';

export const ProductDetailPage = () => {

    const { products } = useSelector( state => state.shop );
    const dispatch = useDispatch();

    const params = useParams();

    const [product, setProduct] = useState({});

    useEffect(() => {
        const product = products.find(product => product.id === +params.id);

        setProduct(product);

    }, []);

    const addToCart = () => {
        dispatch( onAddProductToCart(product) );
    }

    return (
        <div className={styles.section__detail}>

            <Link to='/productos' className={styles.button__back}>Volver</Link>

            <div className={styles.detail__container}>
                <div className={styles["detail__image-container"]}>
                    <img src={`../../images/${product.img}`} alt={product.product} className={styles.detail__image}></img>
                </div>

                <div className={styles["detail__description-container"]}>
                    <div className={styles["detail__heading"]}>
                        <h3>{product.product}</h3>
                        <span>${product.price}</span>
                    </div>

                    <div className={styles.detail__description}>
                        <p>{product.description}</p>
                    </div>

                    <div className={styles["detail__button-container"]}>
                        <button className={styles.detail__button} onClick={() => { addToCart(product.id) }} >Agregar al carrito</button>
                    </div>

                    <div className={styles.detail__features}>
                        <h3 className={styles.feature__heading}>Caracteristicas</h3>
                        <ul className={styles.feature__list}>
                            {product.features && product.features.map((feature, index) => {
                                return (
                                <li className={styles.feature__item} key={index}>
                                    <i className={`bi bi-circle-fill ${styles.feature__icon}`}></i>
                                    <span className={styles.feature__paragraph}>{feature}</span>
                                </li>)
                            })}
                        </ul>
                    </div>

                </div>

            </div>

        </div>
    )
}
