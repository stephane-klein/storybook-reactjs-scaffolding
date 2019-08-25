import React from 'react';

import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import StoryRouterConfig from './StoryRouterConfig';
import { Route } from 'react-router-dom';

import Layout from '../../src/components/Layout';
import SignUpPage from '../../src/pages/sign-up';

storiesOf('Pages/', module)
    .addDecorator(
        StoryRouter(
            StoryRouterConfig,
            {
                initialEntries: ['/sign-up/']
            }
        )
    )
    .add('Sign-Up', () => (
        <Layout>
            <Route path='/sign-up' component={SignUpPage} />
        </Layout>
    ));