import React from 'react';

import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import StoryRouterConfig from '../StoryRouterConfig';
import { Route } from 'react-router-dom';

import Layout from '../../../src/components/Layout';
import ProductsEditPage from '../../../src/pages/products/edit';

storiesOf('Pages/Products', module)
    .addDecorator(
        StoryRouter(
            StoryRouterConfig,
            {
                initialEntries: ['/products/1/edit']
            }
        )
    )
    .add('Edit', () => (
        <Layout>
            <Route path='/products/1/edit' component={ProductsEditPage} />
        </Layout>));