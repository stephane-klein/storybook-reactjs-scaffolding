import React from 'react';

import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import { Route } from 'react-router-dom';
import StoryRouterConfig from '../StoryRouterConfig';

import Layout from '../../../src/components/Layout';
import UsersViewPage from '../../../src/pages/users/view';

storiesOf('Pages/Users', module)
    .addDecorator(
        StoryRouter(
            StoryRouterConfig,
            {
                initialEntries: ['/users/1/']
            }
        )
    )
    .add('View', () => (
        <Layout>
            <Route path='/users/1/' component={UsersViewPage} />
        </Layout>));