'use strict';

var mongoose = require('mongoose');
var FoundItem = mongoose.model('FoundItem');
var Heap = require('heap');
 
const SIMILAR_ITEMS_RETURN_AMOUNT = 20;

exports.get_items = function(req, res) {
  FoundItem.find({}).sort({dateLogged: 1}).exec(function(err, items) {
    if (err)
      res.send(err);
    res.json(items);
  });
};

exports.create_item = function(req, res) {
  var newItem = new FoundItem(req.body);
  newItem.save(function(err, item) {
    if (err)
      res.send(err);
    res.json(item);
  });
};

exports.get_item = function(req, res) {
  FoundItem.findById(req.params.itemId, function(err, item) {
    if (err)
      res.send(err);
    res.json(item);
  });
};

exports.update_item = function(req, res) {
  FoundItem.findOneAndUpdate({_id: req.params.itemId}, req.body, {new: true}, function(err, item) {
    if (err)
      res.send(err);
    res.json(item);
  });
};

exports.delete_item = function(req, res) {
  FoundItem.remove({
    _id: req.params.itemId
  }, function(err, item) {
    if (err)
      res.send(err);
    res.json({ message: 'item successfully deleted' });
  });
};