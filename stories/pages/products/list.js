import React from 'react';

import { storiesOf } from '@storybook/react';
import StoryRouter from '../../../.storybook/storybook-react-router';
import StoryRouterConfig from '../StoryRouterConfig';
import { Route } from 'react-router-dom';

import Layout from '../../../src/components/Layout';
import ProductsListPage from '../../../src/pages/products/list';

storiesOf('Pages/Products', module)
    .addDecorator(
        StoryRouter(
            StoryRouterConfig,
            {
                initialEntries: ['/products/']
            }
        )
    )
    .add('List', () => (
        <Layout>
            <Route path='/products/' component={ProductsListPage} />
        </Layout>));