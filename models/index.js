const mongoose = require('mongoose');
const DB_URI = process.env.MONGODB_URI || 'mongodb+srv://johnsonthieu:Mymongodb929!@sei.galny.mongodb.net/Project-1-Club-Hoppin?retryWrites=true&w=majority'

const configOptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};

  mongoose.connect(DB_URI, configOptions)
    .then(() => console.log('MongoDB successfully connected...'))
    .catch(err => console.log(`MongoDB connection error: ${err}`));
  
    module.exports = {
      Post: require('./Post.js'), 
      Club: require('./Club.js'),
    };
