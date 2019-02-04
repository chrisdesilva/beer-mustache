import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AddBeer from '../components/AddBeer';
import EditBeer from '../components/EditBeer';
import IndexComponent from '../components/IndexComponent';
import ShowBeer from '../components/ShowBeer';

class AppRouter extends Component {
render() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
          <Link to={'/'} className="navbar-brand">Beer Mustache</Link>
        </nav>
        <Switch>
          <Route exact path='/' component={IndexComponent} />
          <Route path='/create' component={AddBeer} />
          <Route path='/edit/:id' component={EditBeer} />
          <Route path='/show/:id' component={ShowBeer} />
        </Switch>
      </div>
    </Router>
    )
  }
}

export default AppRouter;

