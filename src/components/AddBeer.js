import React, { Component } from 'react';
import axios from 'axios';

export default class AddBeer extends Component {
  state = {
    beerName: '',
    breweryName: '',
    url: '',
    review: ''
  }

  onChangeBeerName = (e) => {
    this.setState({
      beerName: e.target.value
    });
  }

  onChangeBreweryName = (e) => {
    this.setState({
      breweryName: e.target.value
    });
  }

  onChangeUrl = (e) => {
    this.setState({
      url: e.target.value
    });
  }

  onChangeReview = (e) => {
    this.setState({
      review: e.target.value
    });
  }
  
  onSubmit = (e) => {
    e.preventDefault();
    const obj = {
      beerName: this.state.beerName,
      breweryName: this.state.breweryName,
      url: this.state.url,
      review: this.state.review
    };
    axios.post('http://localhost:4000/beer/add', obj)
      .then(res => console.log(res.data));

    this.setState({
      beerName: '',
      breweryName: '',
      url: '',
      review: ''
    });
  }


  render() {
    return (
      <div style={{marginTop: 10}}>
        <h3>Add New Beer</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Add Beer Name: </label>
            <input 
              type="text" 
              className="form-control"
              placeholder="ex. Oberon"
              value={this.state.beerName}
              onChange={this.onChangeBeerName}
            />
          </div>
          <div className="form-group">
            <label>Add Brewery: </label>
            <input 
              type="text" 
              className="form-control"
              placeholder="ex. Bell's"
              value={this.state.breweryName}
              onChange={this.onChangeBreweryName}
            />
          </div>
          <div className="form-group">
            <label>Image URL: </label>
            <input 
              type="text" 
              className="form-control"  
              placeholder="Paste image address here"
              value={this.state.url}
              onChange={this.onChangeUrl}  
            />
          </div>
          <div className="form-group">
            <label>Your Review: </label>
            <textarea 
              type="text" 
              className="form-control"
              placeholder="Super hoppy? Dark and smooth? Leave your review here"
              value={this.state.review}
              onChange={this.onChangeReview}  
            />
          </div>
          <div>
            <input type="submit" value="Save Beer" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}