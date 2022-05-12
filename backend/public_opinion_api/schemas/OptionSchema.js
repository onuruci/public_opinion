let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let OptionSchema = new Schema({
    optionText: {type: String, required: true, maxlength: 50},
    voters: {type: Array, required: false}
})


OptionSchema.virtual('url').get(function() {

    return '/options/' + this._id;

});

module.exports = mongoose.model('Option', OptionSchema);