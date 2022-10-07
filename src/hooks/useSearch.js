import { useState } from "react";

export const useSearch = (searchIn = [], searchBy) => {

    const [ productsFound, setProductsFound ] = useState([]);
    const [ isSearching, setIsSearching ] = useState(false);

    const onSearch = ({ target }) => {

        if (target.value.length) {
            setIsSearching(() => true);
        }

        const finded = searchIn.filter( item => {
            const itemToLowerCase = item[searchBy]?.toLowerCase();

            if (itemToLowerCase.includes(target.value)) {
                return item;
            };

            return null;

        });
        
        setProductsFound(finded);

    }

    return {
        isSearching,
        productsFound,
        onSearch,
    }
}
