const mongoose = require('mongoose');
const Post = require('./Post');
// constructing a schema for the different clubs
const ClubSchema = new mongoose.Schema({
    name: String,
    genre: String,
    details: String,
    image: String,
    link: String,
    posts: [Post.schema],
});
const Club = mongoose.model('Club', ClubSchema);
module.exports = Club;