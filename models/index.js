const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/Project1Club');
  
    module.exports = {
      Post: require('./Post.js'), 
      Club: require('./Club.js'),
    };
