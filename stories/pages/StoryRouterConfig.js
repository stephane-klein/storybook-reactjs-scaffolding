import { linkTo } from '@storybook/addon-links';

const StoryRouterConfig = {
    '/sign-in/': linkTo('Pages/', 'Sign-in'),
    '/sign-up/': linkTo('Pages/', 'Sign-up'),
    '/products/': linkTo('Pages/Products', 'List'),
    '/products/new/': linkTo('Pages/Products/', 'New'),
    '/products/*/': linkTo('Pages/Products/', 'View'),
    '/products/*/edit': linkTo('Pages/Products/', 'Edit'),
    '/users/': linkTo('Pages/Users', 'List'),
    '/users/new/': linkTo('Pages/Users/', 'New'),
    '/users/*/': linkTo('Pages/Users/', 'View'),
    '/users/*/edit': linkTo('Pages/Users/', 'Edit')
};

export default StoryRouterConfig;