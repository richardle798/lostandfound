var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var lostItem = new Schema({
	category: {
		type: [{
      		type: String,
      		enum: ['clothes','books','school_supplies','accessories','bottles','electronics','ids','keys','other']
    	}],
		required: 'Category is required'
	},
	description: String,
	date_logged: {
		type: Date,
		default: Date.now
	},
	logger_name:{
		type: String,
		required: 'logger_name is required'
	},
	contact_name:{
		type: String,
		required: 'contact_name is required'
	},
	contact_information:{
		type: String,
		required: 'contact_information is required'
	},
	column_one_data: String,
	column_two_data: String,
	column_three_data: String
});

module.exports = mongoose.model('LostItem', lostItem);