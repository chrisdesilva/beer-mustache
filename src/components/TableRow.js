import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class TableRow extends Component {
  
  delete = () => {
    axios.get('http://localhost:4000/beer/delete/'+this.props.obj._id)
      .then(res => {
        console.log('Deleted');
        this.props.delete(this.props.indice)
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <tr>
        <td>
          {this.props.obj.beerName}
        </td>
        <td>
          {this.props.obj.breweryName}
        </td>
        <td>
          {this.props.obj.review}
        </td>
        <td>
          <Link to={"show/"+this.props.obj._id} className="btn btn-primary">View</Link>
        </td>
        <td>
          <Link to={"edit/"+this.props.obj._id} className="btn btn-primary">Edit</Link>
        </td>
        <td>
          <button onClick={this.delete} className="btn btn-danger">Delete</button>
        </td>
      </tr>
    )
  }
}

export default TableRow;