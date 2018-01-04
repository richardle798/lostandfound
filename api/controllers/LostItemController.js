'use strict';

var mongoose = require('mongoose');
var LostItem = mongoose.model('LostItem');
var Heap = require('heap');
 
var SIMILAR_ITEMS_RETURN_AMOUNT = 20;

exports.get_items = function(req, res) {
  LostItem.find({}, function(err, items) {
    if (err)
      res.send(err);
    res.json(items);
  });
};

exports.create_item = function(req, res) {
  var newItem = new LostItem(req.body);
  newItem.save(function(err, item) {
    if (err)
      res.send(err);
    res.json(item);
  });
};

exports.get_item = function(req, res) {
  LostItem.findById(req.params.itemId, function(err, item) {
    if (err)
      res.send(err);
    res.json(item);
  });
};

exports.update_item = function(req, res) {
  LostItem.findOneAndUpdate({_id: req.params.itemId}, req.body, {new: true}, function(err, item) {
    if (err)
      res.send(err);
    res.json(item);
  });
};

exports.delete_item = function(req, res) {
  LostItem.remove({
    _id: req.params.itemId
  }, function(err, item) {
    if (err)
      res.send(err);
    res.json({ message: 'item successfully deleted' });
  });
};

exports.find_similar_items = function(req, res) {
  var item = new LostItem(req.body);
  var itemCategory = item.category;

  LostItem.find({category: itemCategory}, function(err, items) {
    if (err)
      res.send(err);
    
    var itemHeap = new Heap(function(a, b){
      var aScore = 0, bScore = 0;
      if(a.column_one_data == item.column_one_data) aScore++;
      if(a.column_two_data == item.column_two_data) aScore++;
      if(a.column_three_data == item.column_three_data) aScore++;

      if(b.column_one_data == item.column_one_data) bScore++;
      if(b.column_two_data == item.column_two_data) bScore++;
      if(b.column_three_data == item.column_three_data) bScore++;

      var diff = bScore - aScore;

      //if same score, want to prioritize item most recently logged
      if(diff == 0){
        var aDate = new Date(a.date_logged).getTime();
        var bDate = new Date(b.date_logged).getTime();

        if(aDate < bDate)       //a logged before b
          diff = 1;
        else if(aDate > bDate)  //a logged after b
          diff = -1;
      }

      return diff;
    });

    items.forEach(function(element){
      itemHeap.push(element);
    });

    var returnItemList = [];

    for(var i = 0; i < SIMILAR_ITEMS_RETURN_AMOUNT && itemHeap.size() != 0; i++){
      returnItemList.push(itemHeap.pop());
    }
    
    res.json(returnItemList);
  });
};