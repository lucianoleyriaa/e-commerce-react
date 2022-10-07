import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { ProductsPage, ProductDetailPage } from '..';

export const ShopRoutes = () => {
    return (
        <Switch>
            <Route path='/productos/ver-detalle/:id' exact component={ ProductDetailPage } />
            <Route path='/' component={ ProductsPage } />
        </Switch>
    )
}
