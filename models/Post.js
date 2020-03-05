const mongoose = require('mongoose');
 // constructing a schema for reviews(posts)
const PostSchema = new mongoose.Schema({
    name: String,
    review: String,
    description: String,
});

module.exports = mongoose.model('Post', PostSchema);