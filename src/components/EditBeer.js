import React, { Component } from 'react';
import axios from 'axios';

export default class EditBeer extends Component {
  state = {
    beerName: '',
    breweryName: '',
    url:'',
    review: ''
  }

  componentDidMount() {
    axios.get('http://localhost:4000/beer/edit/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          beerName: response.data.beerName,
          breweryName: response.data.breweryName,
          url: response.data.url,
          review: response.data.review
        })
      })
      .catch(function (error){
        console.log(error);
      })
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
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    const obj = {
      beerName: this.state.beerName,
      breweryName: this.state.breweryName,
      url: this.state.url,
      review: this.state.review
    };
    axios.post('http://localhost:4000/beer/update/'+this.props.match.params.id, obj)
        .then(res => console.log(res.data));
    
    this.props.history.push('/index');
  }

  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h3 align="center">Update Beer</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Edit Beer Name: </label>
            <input 
              type="text"
              className="form-control"
              value={this.state.beerName}
              onChange={this.onChangeBeerName}
            />
          </div>
          <div className="form-group">
            <label>Edit Brewery Name: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.breweryName}
              onChange={this.onChangeBreweryName}
            />
          </div>
          <div className="form-group">
            <label>Edit Image URL: </label>
            <input 
              type="text"
              className="form-control"
              value={this.state.url}
              onChange={this.onChangeUrl}
            />
          </div>
          <div className="form-group">
            <label>Edit Your Review: </label>
            <textarea 
              type="text"
              className="form-control"
              value={this.state.review}
              onChange={this.onChangeReview}
            />
          </div>
          <div className="form-group">
            <input type="submit" 
              value="Update Beer"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    )
  }
}