const mongoose = require('mongoose');
const Post = require('./Post');
// constructing a schema for the different clubs
const ClubSchema = new mongoose.Schema({
    name: String,
    genre: String,
    reviews: [{}],
    PostRef: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
    }
});

module.exports = mongoose.model('Club', ClubSchema);