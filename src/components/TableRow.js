import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TableRow extends Component {
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
          <img className="img-thumbnail img-fluid" src={this.props.obj.url} alt={this.props.beerName}/>
        </td>
        <td>
          <Link to={"edit/"+this.props.obj._id} className="btn btn-primary">Edit</Link>
        </td>
        <td>
          <button className="btn btn-danger">Delete</button>
        </td>
      </tr>
    )
  }
}

export default TableRow;