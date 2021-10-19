import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import Dashboard from '../pages/Dashboard';
// import Repository from '../pages/Repository';

const Dashboard = React.lazy(() =>
import(
    /* webpackPrefetch: true */
    /* webpackChunkName: "dashboard*/'../pages/Dashboard'))

const Repository = React.lazy(() =>
import(
    /* webpackPrefetch: true */
    /* webpackChunkName: "Repository*/'../pages/Repository'))

const Routes: React.FC = () => (
    <React.Suspense fallback={'Loading...'}>
        <Switch>
            <Route path="/" exact component={Dashboard} />

            <Route path="/repository/:repository+" component={Repository} />
        </Switch>
    </React.Suspense>
)

export default Routes;


