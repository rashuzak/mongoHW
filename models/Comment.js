const mongoose = require("mongoose");

var Schema = mongoose.Schema;

var CommentSchema = new Schema({
    name: {
        type: String
    },

    body: {
        type: String,
        required: true
    },
    
});

var Comment = mongoose.model("Notes", CommentSchema);

module.exports = Comment;