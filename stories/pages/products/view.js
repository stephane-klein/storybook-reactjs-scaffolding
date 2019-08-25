import React from 'react';

import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import StoryRouterConfig from '../StoryRouterConfig';
import { Route } from 'react-router-dom';

import Layout from '../../../src/components/Layout';
import ProductsViewPage from '../../../src/pages/products/view';

storiesOf('Pages/Products', module)
    .addDecorator(
        StoryRouter(
            StoryRouterConfig,
            {
                initialEntries: ['/products/1/']
            }
        )
    )
    .add('View', () => (
        <Layout>
            <Route path='/products/1/' component={ProductsViewPage} />
        </Layout>));