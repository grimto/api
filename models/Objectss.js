const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Objectss
let Objectss = new Schema({
  _titre: {
    type: String
  },
  _par: {
    type: String
  },
  _capt: {
    type: String
  }
},{
    collection: 'objectss'
});
Objectss.methods.add = function(body, callback){
  this._titre= body._titre;
  this._par = body._par;
  this._capt= body._capt;
  return this.save(callback);
};
module.exports = mongoose.model('Objectss', Objectss);
