import { Fragment } from "react";
import Header from "./components/Header/Header";
import Productos from "./components/Products/Products";
import Footer from "./components/Footer/Footer";

import classes from "./App.module.css";

function App() {
   return (
      <Fragment>
         <Header />
         <main className={classes.main}>
            <Productos />
         </main>
         <Footer />
      </Fragment>
   );
}

export default App;
