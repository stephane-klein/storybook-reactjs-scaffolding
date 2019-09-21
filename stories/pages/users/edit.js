import React from 'react';

import { storiesOf } from '@storybook/react';
import StoryRouter from '../../../.storybook/storybook-react-router';
import StoryRouterConfig from '../StoryRouterConfig';
import { Route } from 'react-router-dom';

import Layout from '../../../src/components/Layout';
import UsersEditPage from '../../../src/pages/users/edit';

storiesOf('Pages/Users', module)
    .addDecorator(
        StoryRouter(
            StoryRouterConfig,
            {
                initialEntries: ['/users/1/edit']
            }
        )
    )
    .add('Edit', () => (
        <Layout>
            <Route path='/users/1/edit' component={UsersEditPage} />
        </Layout>));