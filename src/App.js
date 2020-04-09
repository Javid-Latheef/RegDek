import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from './components/login/Login';
import Dashboard from './components/dashboard/Dashboard'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


export default () => {

  return (
    <Router>
      <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/home" component={Dashboard} />
          <Route exact path="/changeBasedRegression" component={Dashboard} />
          <Route exact path="/Pages" component={Dashboard} />
          <Route exact path="/faq" component={Dashboard} />
          <Route exact path="/contact" component={Dashboard} />
          <Route exact path="/Page-1" component={Dashboard} />
          <Route exact path="/Page-2" component={Dashboard} />
          <Route exact path="/page-1" component={Dashboard} />
          <Route exact path="/page-2" component={Dashboard} />
          <Route exact path="/page-3" component={Dashboard} />
          <Route exact path="/page-4" component={Dashboard} />  
      </Switch>
    </Router>
  );
}

