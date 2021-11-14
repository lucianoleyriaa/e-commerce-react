import React, { useEffect, useState } from 'react'
import styles from './ProductDetail.module.css'
import { Link, useParams } from 'react-router-dom'
import { useAuth } from '../../../context/AuthProvider';
const ProductDetail = () => {
   // Hooks
   const params = useParams();
   const { addToCart } = useAuth();

   // States
   const [product, setProduct] = useState({});

   const productsList = [
      {
         id: 1,
         product: "Airiculares Hyperx",
         description:
            "Los auriculares inalámbricos para jugadores HyperX Cloud Flight son perfectos para las consolas PlayStation®5 y PlayStation®4. Disfruta de sesiones de juego más largas y sin interrupciones con una batería de hasta 30 horas de duración1. Regálale a tus orejas la comodidad y suavidad del cuero sintético de primera calidad y las cómodas almohadillas de espuma viscoelástica. Chatea con tus amigos y comunícate con tus compañeros de equipo con claridad gracias al micrófono con cancelación de ruido. Con controles integrados en los cascos, los Cloud Flight son una mejora intuitiva y esencial para tu PlayStation®5 y PlayStation®4.",
         img: "headphones-hyperx.jpg",
         price: 1200,
      },
      {
         id: 2,
         product: "Teclado Hyperx Origins",
         description:
            "El HyperX Alloy Origins™ Core es un teclado ultracompacto y resistente sin zona numérica con conmutadores mecánicos ",
         img: "keyboard-hyperx.jpg",
         price: 2500,
      },
      {
         id: 3,
         product: "Mouse Hyperx Pulsefire",
         description:
            "HyperX Cloud II fueron diseñados como audífonos ultra cómodos con un sonido majestuoso. ",
         img: "mouse-hyperx-pulsefire.jpg",
         price: 1200,
      },
      {
         id: 4,
         product: "Microfono Hyperx",
         description:
            "HyperX Cloud II fueron diseñados como audífonos ultra cómodos con un sonido majestuoso. ",
         img: "microphone-hyperx.jpg",
         price: 1200,
      },
   ];

   useEffect(() => {
      const product = productsList.find(el => el.id === +params.id);

      setProduct(product);

   }, []);

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
                     <li className={styles.feature__item}>
                        <i className={`bi bi-circle-fill ${styles.feature__icon}`}></i>
                        <span className={styles.feature__paragraph}>Función inalámbrica perfecta para juegos con una batería duradera</span>
                     </li>
                     <li className={styles.feature__item}>
                        <i className={`bi bi-circle-fill ${styles.feature__icon}`}></i>
                        <span className={styles.feature__paragraph}>Comodidad exclusiva</span>
                     </li>
                     <li className={styles.feature__item}>
                        <i className={`bi bi-circle-fill ${styles.feature__icon}`}></i>
                        <span className={styles.feature__paragraph}>Audio de juego envolvente</span>
                     </li>
                     <li className={styles.feature__item}>
                        <i className={`bi bi-circle-fill ${styles.feature__icon}`}></i>
                        <span className={styles.feature__paragraph}>Cascos que giran 90 grados con efectos de iluminación LED</span>
                     </li>
                     <li className={styles.feature__item}>
                        <i className={`bi bi-circle-fill ${styles.feature__icon}`}></i>
                        <span className={styles.feature__paragraph}>Micrófono desmontable con cancelación del ruido</span>
                     </li>
                  </ul>
               </div>

            </div>

         </div>

      </div>
   )
}

export default ProductDetail
