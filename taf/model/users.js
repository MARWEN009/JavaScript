var mongoose = require('mongoose');
var schema = mongoose.Schema;

var user = new schema({
login : String ,
password : String ,
email : String , 
nomPrenom : String
});

module.exports = mongoose.model('users',user);