'use strict';

var mongoose = require('mongoose');
var LoggedItem = mongoose.model('LoggedItem');
var Heap = require('heap');
 
var SIMILAR_ITEMS_RETURN_AMOUNT = 20;

exports.get_items = function(req, res) {
  LoggedItem.find({}, function(err, items) {
    if (err)
      res.send(err);
    res.json(items);
  });
};

exports.create_item = function(req, res) {
  var newItem = new LoggedItem(req.body);
  newItem.save(function(err, item) {
    if (err)
      res.send(err);
    res.json(item);
  });
};

exports.get_item = function(req, res) {
  LoggedItem.findById(req.params.itemId, function(err, item) {
    if (err)
      res.send(err);
    res.json(item);
  });
};

exports.update_item = function(req, res) {
  LoggedItem.findOneAndUpdate({_id: req.params.itemId}, req.body, {new: true}, function(err, item) {
    if (err)
      res.send(err);
    res.json(item);
  });
};

exports.delete_item = function(req, res) {
  LoggedItem.remove({
    _id: req.params.itemId
  }, function(err, item) {
    if (err)
      res.send(err);
    res.json({ message: 'item successfully deleted' });
  });
};

exports.find_similar_items = function(req, res) {
  var item = new LoggedItem(req.body);
  var itemCategory = item.category;

  LoggedItem.find({category: itemCategory}, function(err, items) {
    if (err)
      res.send(err);
    
    var itemHeap = new Heap(function(a, b){
      var aScore = 0, bScore = 0;
      if(a.columnOneData == item.columnOneData) aScore++;
      if(a.columnTwoData == item.columnTwoData) aScore++;
      if(a.columnThreeData == item.columnThreeData) aScore++;

      if(b.columnOneData == item.columnOneData) bScore++;
      if(b.columnTwoData == item.columnTwoData) bScore++;
      if(b.columnThreeData == item.columnThreeData) bScore++;

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