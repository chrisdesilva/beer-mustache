import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AddBeer from './components/AddBeer';
import EditBeer from './components/EditBeer';
import IndexComponent from './components/IndexComponent';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={'/'} className="navbar-brand">Beer Mustache</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={"/"} className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to={"/create"} className="nav-link">Add Beer</Link>
                </li>
                <li className="nav-item">
                  <Link to={"/index"} className="nav-link">Index</Link>
                </li>
              </ul>
            </div>
          </nav> <br/>
          <h2>Review your favorite beers!</h2> <br/>
          <Switch>
            <Route exact path='/create' component={AddBeer} />
            <Route path='/edit/:id' component={EditBeer} />
            <Route path='/index' component={IndexComponent} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
