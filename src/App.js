import React from 'react';

import Layout from './components/Layout';
import AppRouter from './Router';

const App = () => {
    return (
        <Layout>
            <AppRouter />
        </Layout>
    );
};

export default App;
