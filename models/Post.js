const mongoose = require('mongoose');
 // constructing a schema for reviews(posts)
const PostSchema = new mongoose.Schema({
    title: String,
    body: String,
}, {timestamps: true});

module.exports = mongoose.model('Post', PostSchema);