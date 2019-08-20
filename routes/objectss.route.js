const express = require('express');
const app = express();
const objectssRoutes = express.Router();

// Require objectss model in our routes module
let Objectss = require('../models/Objectss');

// Defined Post route
objectssRoutes.route('/add').post(function (req, res) {

    let object = new Objectss();

    object.add(req.body)
        .then(objectss => {
            res.status(200).json({'objectss': 'objectss in added successfully'});
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
});

// Defined get data(index or listing) route
objectssRoutes.route('/').get(function (req, res) {
    Objectss.find(function (err, objectsses) {
        if (err) {
            console.log(err);
        } else {
            res.json(objectsses);
        }
    });
});

// Defined Get One route by ID
objectssRoutes.route('/:id').get(function (req, res) {
    let id = req.params.id;
    Objectss.findById(id, function (err, objectss) {
        res.json(objectss);
    });
});
// Defined Get One by Title
objectssRoutes.route('/titre/:titre').get(function (req, res) {
    let titre = req.params._titre;
    Objectss.findOne(titre, function (err, objectss) {
        res.json(objectss);
    });
});

//  Defined update route
objectssRoutes.route('/update/:titre').put(function (req, res) {
    let tempObect = Objectss.findOne(req.params._titre);
    Objectss.findOneAndUpdate(tempObect, req.body)
        .then(objectss => {
        res.json('Update complete');
        })
        .catch(err => {
            res.status(400).send("unable to update the database");
        });

});
//Defined update By ID route
objectssRoutes.route('/updateId/:id').put(function (req, res) {
    let id = req.params.id;
    Objectss.findById(id, function (err, object) {
        if (!object)
            return next(new Error('Could not load document'));
        else {
            object._titre = req.body._titre;
            object._par = req.body._par;
            object._capt = req.body._capt;
            object.save()
                .then(objectss => {
                    res.json('Update complete');
                })
                .catch(err => {
                    res.status(400).send("unable to update the database");
                });
        }
    });
});

// Defined delete | remove | destroy route
objectssRoutes.route('/delete/:id').delete(function (req, res) {
    let id = req.params.id;
    Objectss.findByIdAndRemove(id, function (err, objectss) {
        if (err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = objectssRoutes;
