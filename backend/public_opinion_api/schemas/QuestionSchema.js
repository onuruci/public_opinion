let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let QuestionSchema = new Schema({

    questionText: {type: String, required: true, minlength: 10, maxlength: 150},
    options: {type: [Schema.Types.ObjectId], ref: 'Option',  required: true},
})


QuestionSchema.virtual('url').get(function() {

    return '/questions/' + this._id;

});

module.exports = mongoose.model('Question', QuestionSchema);