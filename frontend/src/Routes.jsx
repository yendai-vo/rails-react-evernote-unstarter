import React from 'react';
import { Route, Switch } from  'react-router-dom';
import App from './App.js';
import GalleryContainer from './containers/GalleryContainer';
import Login from './containers/Login';
import Home from './containers/Home';
import SignUp from './containers/SignUp';

const Routes = () => (
    <App>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/profile" component={GalleryContainer} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/signup" component={SignUp} exact />
        </Switch>
        
    </App>
)

export default Routes;
