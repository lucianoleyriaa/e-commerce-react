import { Header, Footer, Modal } from '../components';
import { Alert } from '../components';

export const ShopLayout = ({ children }) => {
    return (
        <>

            <Header />

            { children }

            <Modal />

            <Alert />

            <Footer />

        </>
    )
}
