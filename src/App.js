import { Fragment } from "react";
import Header from "./components/Header/Header";
import Productos from "./components/Products/Products";
import Footer from "./components/Footer/Footer";

import classes from "./App.module.css";
import Modal from "./components/Modal/Modal";
import { useState } from "react";

function App() {
   const [isOpen, changeModal] = useState(false);
   const [productsOnCarrito, addProduct] = useState([]);

   const closeModal = () => {
      changeModal(false);
   };

   return (
      <Fragment>
         <Header changeModalState={changeModal} modalState={isOpen} />
         <main className={classes.main}>
            <Productos addProduct={addProduct} products={productsOnCarrito} />
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
   );
}

export default App;
