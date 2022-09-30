var mongoose = require('mongoose');
var schema = mongoose.Schema;

var produit = new schema({

    ref: String,
    libelle: String,
    prix: Number ,
    type: String

});

module.exports = mongoose.model('produits',produit);