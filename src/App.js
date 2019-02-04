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
          </nav>
        </div>
      </Router>
    );
  }
}

export default App;
