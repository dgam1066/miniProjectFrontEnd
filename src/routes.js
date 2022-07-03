import React from 'react';

const Home = React.lazy(() => import('./components/Home'));

const routes = [
    {path: '/Home', name:'Home', component:Home}
];

export default routes;