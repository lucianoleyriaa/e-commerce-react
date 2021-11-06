import React, { Fragment, useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Modal from '../Modal/Modal'
import ProductDetail from '../Products/ProductDetail/ProductDetail'
import Products from '../Products/Products'

import classes from './Dashboard.module.css';

const Dashboard = () => {
   const [isOpen, changeModal] = useState(false);
   const [productsOnCarrito, addProduct] = useState([]);

   const closeModal = () => {
      changeModal(false);
   };

   console.log('Dashboard')

   return (
      <Fragment>
         <Header changeModalState={changeModal} modalState={isOpen} />
         {/* <Productos addProduct={addProduct} products={productsOnCarrito} /> */}
         <main className={classes.main}>
            <Switch>
               <Route path='/productos/ver-detalle/:id' exact component={ProductDetail} />
               <Route path='/' component={Products} />
            </Switch>
         </main>
         <Footer />
         {isOpen ? (
            <Modal
               closeModal={closeModal}
               products={productsOnCarrito}
               addProduct={addProduct}
            />
         ) : null}
      </Fragment>
   )
}

export default Dashboard
