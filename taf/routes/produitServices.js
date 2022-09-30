var express = require('express');

var router = express.Router();

var produit = require('../model/produits');


router.post('/addProduit', (req, res) => {
    var p = new produit(req.body);
    console.log(p);
    p.save();
    res.redirect('/produit/viewProduit');
});

router.get('/viewProduit', function (req, res) {

    produit.find(function (err, data) {

        if (err) throw err;
        // res.json(data);
        res.render("viewProduit.twig", { data })
        console.log(data)
    });

    router.get('/delete/:id', function (req, res) {
        var idm = req.params.id;
        produit.findOneAndRemove({ _id: idm }, function (err) {
            if (err) throw err;

        });
        res.redirect('/produit/viewProduit');
    });

    router.get('/modifier/:idt', function (req, res) {

        var idm = req.params.idt;
        produit.find({ _id: idm }, function (err, data) {
            //  res.json(data);
            res.render('viewProduit.twig', { data });
        });

    });

    router.post('/updateaction', function (req, res) {

        var idm = req.body.ids;

        produit.findById({ _id: idm }, function (err, data) {

            data.ref = req.body.ref;
            data.libelle = req.body.libelle;
            date.prix = req.body.prix;
            date.type = req.body.type;
            data.save();
        });
       
    });

});



module.exports = router;