import React from 'react';

import { storiesOf } from '@storybook/react';
import StoryRouter from '../../.storybook/storybook-react-router';

import { Route } from 'react-router-dom';

import Layout from '../../src/components/Layout';

const Page = () => (
    <Layout>
        Content
    </Layout>
);

storiesOf('Components/', module)
    .addDecorator(
        StoryRouter({}, {
            initialEntries: ['/products/']
        })
    )
    .add('Layout', () => (
        <Route
            exact
            path="/products/"
            component={Page}
        />
    ));