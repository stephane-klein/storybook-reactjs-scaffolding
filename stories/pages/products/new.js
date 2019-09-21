import React from 'react';

import { storiesOf } from '@storybook/react';
import StoryRouter from '../../../.storybook/storybook-react-router';
import StoryRouterConfig from '../StoryRouterConfig';
import { Route } from 'react-router-dom';

import Layout from '../../../src/components/Layout';
import ProductsNewPage from '../../../src/pages/products/new';

storiesOf('Pages/Products', module)
    .addDecorator(
        StoryRouter(
            StoryRouterConfig,
            {
                initialEntries: ['/products/new']
            })
    )
    .add('New', () => (
        <Layout>
            <Route path='/products/new' component={ProductsNewPage} />
        </Layout>));