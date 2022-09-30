var express = require('express');

var router = express.Router();

var user = require('../model/users');

// GET
// GET
router.get('/inscription',function(req, res){
    res.render("inscrption.twig");
});
router.post('/addaction', (req, res) => {
    var u = new user(req.body)
    
   u.save();
   res.redirect('/user/inscription');
});

module.exports = router;