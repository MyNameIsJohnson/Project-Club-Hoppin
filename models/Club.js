const mongoose = require('mongoose');
const Post = require('./Post');
// constructing a schema for the different clubs
const ClubSchema = new mongoose.Schema({
    name: String,
    genre: String,
    description: String,
    reviews: [Post.schema]
});

module.exports = mongoose.model('Club', ClubSchema);