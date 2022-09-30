var mongoose = requuire('mongoose');
var schema = mongoose.Schema;

var evenement = new schema({
    titre : String,
    nbPlace : Number,
    typeEvenement : String 
});

module.exports = mongoose.model('evenements',evenement);