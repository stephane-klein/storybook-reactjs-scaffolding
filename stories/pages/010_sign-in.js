import React from 'react';

import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import StoryRouterConfig from './StoryRouterConfig';
import { Route } from 'react-router-dom';

import Layout from '../../src/components/Layout';
import SignInPage from '../../src/pages/sign-in';

storiesOf('Pages/', module)
    .addDecorator(
        StoryRouter(
            StoryRouterConfig,
            {
                initialEntries: ['/sign-in/']
            }
        )
    )
    .add('Sign-in', () => (
        <Layout>
            <Route path='/sign-in' component={SignInPage} />
        </Layout>
    ));