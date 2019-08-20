const express = require ('express');
const app = express();
const userRoute= express.Router();
let User = require ('../models/user');

// Get all
userRoute.route('/').get(function (req, res) {
    User.find(function (err, objectsses) {
        if (err) {
            console.log(err);
        } else {
            res.json(objectsses);
        }
    });
});

// Defined Get One route by ID
userRoute.route('/:id').get(function (req, res) {
    let id = req.params.id;
    User.findById(id, function (err, user) {
        res.json(user);
    });
});

// Defined Get One by username
userRoute.route('/username/:username').get(function (req, res) {
    User.findOne({username :req.params.username}, function (err, user) {
        res.json(user);
    });
});
module.exports = userRoute;
