var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var loggedItem = new Schema({
	category: {
		type: String,
      	enum: ['clothes','books','schoolSupplies','accessories','bottles','electronics','cards','keys','other'],
		required: 'Category is required'
	},
	description: String,
	dateLogged: {
		type: Date,
		default: Date.now
	},
	loggerName:{
		type: String,
		required: 'logger name is required'
    },
    locationStored:{
        type: String,
        required: 'the item location is required'
    },
	columnOneData: String,
	columnTwoData: String,
	columnThreeData: String
});

loggedItem.index({ category : 1});

module.exports = mongoose.model('LoggedItem', loggedItem);