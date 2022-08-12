import React from 'react';

const Home = React.lazy(() => import('./components/Home'));
const CategoryDetails = React.lazy(()=>import('./components/CategoryDetails'));

const routes = [
    {path: '/', name:'Home', key: "categories", component:<Home/>},
    {path: '/meat', name:'meatCategory', key: "meat", component:<CategoryDetails id="1"/>},
    {path: '/vegetables', name:'vegetableCategory', key: "vegetable", component:<CategoryDetails id="2"/>},
    {path: '/dairy', name:'dairyCategory', key: "dairy", component:<CategoryDetails id="3"/>},
];

export default routes;