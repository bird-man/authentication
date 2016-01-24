/**
 * Created by chrissparrow on 1/21/16.
 */
var express = require('express'),
    quoter  = require('./quoter');

var app = module.exports = express.Router();

app.get('/api/random-quote', function(req, res) {
    res.status(200).send(quoter.getRandomOne());
});
