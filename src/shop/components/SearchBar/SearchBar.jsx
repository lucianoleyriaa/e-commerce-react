import styles from './SearchBar.module.css';

export const SearchBar = ({ onSearch }) => {

    return (
        <div className={styles["search-bar"]}>
            <div className={styles["search-bar__group"]}>
                <i className={`fas fa-search ${styles["search-bar__icon"]}`}></i>
                <input
                type='text'
                placeholder='Buscar producto'
                className={styles["search-bar__input"]}
                onChange={ onSearch }
                />
            </div>
        </div>
    )
}
