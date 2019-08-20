const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for admin user
let User = new Schema({
    username: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        unique: true
    }
},{
    collection: 'user'
});

module.exports = mongoose.model('User', User);
