'use strict';

var mongoose = require('mongoose');
var LostItem = mongoose.model('LostItem');
var LoggedItem = mongoose.model('LoggedItem');
var Heap = require('heap');
 
const SIMILAR_ITEMS_RETURN_AMOUNT = 20;

exports.get_items = function(req, res) {
  LostItem.find({}).sort({dateLogged: 1}).exec(function(err, items) {
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

  LoggedItem.find({category: itemCategory}, function(err, items) {
    if (err)
      res.send(err);
    
    var itemHeap = new Heap(function(a, b){
      var aScore = 0, bScore = 0;
      if(a.columnOneData.toLowerCase() === item.columnOneData.toLowerCase()) aScore++;
      if(a.columnTwoData.toLowerCase() === item.columnTwoData.toLowerCase()) aScore++;
      if(a.columnThreeData.toLowerCase() === item.columnThreeData.toLowerCase()) aScore++;

      if(b.columnOneData.toLowerCase() === item.columnOneData.toLowerCase()) bScore++;
      if(b.columnTwoData.toLowerCase() === item.columnTwoData.toLowerCase()) bScore++;
      if(b.columnThreeData.toLowerCase() === item.columnThreeData.toLowerCase()) bScore++;

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