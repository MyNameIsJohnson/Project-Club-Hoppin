const mongoose = require('mongoose');
const DB_URI = process.env.MONGODB_URI || 'mongodb+srv://johnsonthieu:Mymongodb929!@sei.galny.mongodb.net/Project-1-Club-Hoppin?retryWrites=true&w=majority'
mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
    .then(() => console.log('MongoDB is connected'))
    .catch((err) => console.log(err));
  
    module.exports = {
      Post: require('./Post.js'), 
      Club: require('./Club.js'),
    };
