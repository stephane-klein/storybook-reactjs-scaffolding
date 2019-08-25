If you want connect your application navigation links to your stories, don't forget to:

- Update [`StoryRouterConfig.js`](StoryRouterConfig.js)
- Integrate `StoryRouter` and `StoryRouterConfig` in your stories, example:

```
import React from 'react';

import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';    // <= Add this
import StoryRouterConfig from './StoryRouterConfig'; // <= Add this
import { Route } from 'react-router-dom';            // <= Add this

import Layout from '../../src/components/Layout';
import SignInPage from '../../src/pages/sign-in';

storiesOf('Pages/', module)
    .addDecorator(
        StoryRouter(                                 // <= Add this
            StoryRouterConfig,                       // <= Add this
            {                                        // <= Add this
                initialEntries: ['/sign-in/']        // <= Set default storie url
            }
        )
    )
    .add('Sign-in', () => (
        <Layout>
            <Route                                   // <= Add this
                path='/sign-in'                      // <= Set page route
                component={SignInPage} />
        </Layout>
    ));
```