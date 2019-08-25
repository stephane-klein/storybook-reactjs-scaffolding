import React from 'react';

import { Route, Switch } from 'react-router-dom';
import List from './list';
import Edit from './edit';
import View from './view';
import New from './new';

const ProductsRouter = ({ match }) => (
    <Switch>
        <Route path={`${ match.url }/`} exact component={List} />
        <Route path={`${ match.url }/new/`} exact component={New} />
        <Route path={`${ match.url }/:productId/`} exact component={View} />
        <Route path={`${ match.url }/:productId/edit/`} exact component={Edit} />
    </Switch>
);

export default ProductsRouter;