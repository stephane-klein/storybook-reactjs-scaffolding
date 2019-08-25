import React from 'react';

import { Route, Switch } from 'react-router-dom';

import ProductsRouter from './pages/products/Router';
import UsersRouter from './pages/users/Router';

import SignUp from './pages/sign-up';
import SignIn from './pages/sign-in';

const AppRouter = () => (
    <Switch>
        <Route path='/sign-up/' exact component={SignUp} />
        <Route path='/sign-in/' exact component={SignIn} />

        <Route path="/products/" component={ProductsRouter} />
        <Route path="/users/" component={UsersRouter} />
    </Switch>
);

export default AppRouter;