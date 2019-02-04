import React, { Component } from 'react';
import axios from 'axios'

class ShowBeer extends Component {
  state = {
    beerName: '',
    breweryName: '',
    url:'',
    review: ''
  }
  
  componentDidMount() {
    axios.get('http://localhost:4000/beer/show/'+this.props.match.params.id)
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

  render() {
    return (
      <div>
        <h2 className="text-center mb-3">{this.state.breweryName} {this.state.beerName}</h2>
        <div className="text-center">
          <img src={this.state.url} alt={this.state.beerName} />
          <p className="mt-5">{this.state.review}</p>
        </div>  
      </div>
    )
  }
}

export default ShowBeer;

