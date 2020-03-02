const mongoose = require('mongoose');
 // constructing a schema for reviews(posts)
const PostSchema = new mongoose.Schema({
    name: String,
    description: String,
    reviews: String,
});

module.exports = mongoose.model('Post', PostSchema);