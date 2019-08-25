import React from 'react';

import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import StoryRouterConfig from '../StoryRouterConfig';
import { Route } from 'react-router-dom';

import Layout from '../../../src/components/Layout';
import UsersListPage from '../../../src/pages/users/list';

storiesOf('Pages/Users', module)
    .addDecorator(
        StoryRouter(
            StoryRouterConfig,
            {
                initialEntries: ['/users/']
            }
        )
    )
    .add('List', () => (
        <Layout>
            <Route path='/users/' component={UsersListPage} />
        </Layout>));