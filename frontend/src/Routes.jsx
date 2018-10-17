import React from 'react';
import { Route, Switch } from  'react-router-dom';
import App from './App.js';
import GalleryContainer from './containers/GalleryContainer';
import Login from './containers/Login';
import Home from './containers/Home';

const Routes = () => (
    <App>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/Profile" component={GalleryContainer} exact />
          <Route path="/login" component={Login} exact />
        </Switch>
    </App>
)

export default Routes;
