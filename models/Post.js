const mongoose = require('mongoose');
 
const PostSchema = new mongoose.Schema({
    name: String,
    description: String,
    reviews: String,
});

module.exports = mongoose.model('Post', PostSchema);