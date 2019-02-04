const express = require('express');
const beerRoutes = express.Router();

//Beer model
let Beer = require('./beer-info');

//Store route
beerRoutes.route('/add').post(function (req, res) {
  let beer = new Beer(req.body);
  beer.save()
    .then(beer => {
      res.status(200).json({'beer': 'beer is added successfully'});
    })
    .catch(err => {
      res.status(400).send('unable to save beer to database');
    });
});

//Get list of beers
beerRoutes.route('/').get(function (req, res) {
  Beer.find(function(err, beers){
    if(err){
      console.log(err)
    } else {
      res.json(beers)
    }
  });
});

//Edit beer route
beerRoutes.route('/edit/:id').get(function (req, res){
  let id = req.params.id;
  Beer.findById(id, function (err, beer){
    res.json(beer);
  });
});

//Update route
beerRoutes.route('/update/:id').post(function (req, res){
  Beer.findById(req.params.id, function(err, beer){
    if(!beer)
      res.status(404).send('data is not found');
    else {
      beer.beerName = req.body.beerName;
      beer.breweryName = req.body.breweryName;
      beer.url = req.body.url;
      beer.review = req.body.review;

      beer.save().then(beer => {
        res.json('Update complete')
      })
      .catch(err => {
        res.status(400).send('unable to update the database');
      });
    }
  });
});

//Delete beer route
beerRoutes.route('/delete/:id').get(function (req, res){
  Beer.findByIdAndRemove({_id: req.params.id}, function(err, beer){
    if(err) res.json(err);
    else res.json('Successfully removed');
  });
});

module.exports = beerRoutes;