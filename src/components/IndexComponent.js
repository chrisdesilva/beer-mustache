import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';

export default class IndexComponent extends Component {
  state = {
    beer: []
  }

  componentDidMount(){
    axios.get('http://localhost:4000/beer')
      .then(response => {
        this.setState({ beer: response.data} );
      })
      .catch(function (error) {
        console.log(error)
      });
  }
  tabRow(){
    return this.state.beer.map(function(object, i) {
      return <TableRow obj={object} key={i} />;
    });
  }
  render() {
    return (
      <div>
        <h3 align="center">Beer List</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Beer</th>
              <th>Brewery</th>
              <th>Review</th>
              <th>Photo</th>
              <th colSpan="2">Action</th>
            </tr>
          </thead>
          <tbody>
            { this.tabRow() }
          </tbody>
        </table>
      </div>
    );
  }
}