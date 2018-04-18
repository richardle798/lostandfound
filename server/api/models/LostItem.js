var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var lostItem = new Schema({
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
	contactName:{
		type: String,
		required: 'contact name is required'
	},
	contactInformation:{
		type: String,
		required: 'contact information is required'
	},
	columnOneData: String,
	columnTwoData: String,
	columnThreeData: String
});

module.exports = mongoose.model('LostItem', lostItem);