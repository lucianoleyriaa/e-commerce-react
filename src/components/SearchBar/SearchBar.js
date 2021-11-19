import React from 'react'
import { useAuth } from '../../context/AuthProvider';

import styles from './SearchBar.module.css';

const SearchBar = () => {
   // Hooks
   const { products, setFilterProducts, setIsSearching } = useAuth();

   const onInputChange = (e) => {

      if (e.target.value) {
         setIsSearching(true);

         const filteredProducts = products.filter(product => {
            return product.product.toLowerCase().includes(e.target.value)
         });

         setFilterProducts(filteredProducts);
      } else {
         setIsSearching(false);
      }

   }

   return (
      <div className={styles["search-bar"]}>
         <div className={styles["search-bar__group"]}>
            <i className={`fas fa-search ${styles["search-bar__icon"]}`}></i>
            <input
               type='text'
               placeholder='Buscar producto'
               className={styles["search-bar__input"]}
               onChange={onInputChange}
            />
         </div>
      </div>
   )
}

export default SearchBar
