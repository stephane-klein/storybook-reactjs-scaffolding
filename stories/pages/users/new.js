import React from 'react';

import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import StoryRouterConfig from '../StoryRouterConfig';
import { Route } from 'react-router-dom';

import Layout from '../../../src/components/Layout';
import UsersNewPage from '../../../src/pages/users/new';

storiesOf('Pages/Users', module)
    .addDecorator(
        StoryRouter(
            StoryRouterConfig,
            {
                initialEntries: ['/users/new']
            }
        )
    )
    .add('New', () => (
        <Layout>
            <Route path='/users/new' component={UsersNewPage} />
        </Layout>));
