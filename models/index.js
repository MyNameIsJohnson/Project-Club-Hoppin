const mongoose = require('mongoose');
// This is for local test 
// const DB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/Project1Club';

const MONGODB_URI='mongodb+srv://johnsonthieu:Mymongodb929!@club.ztdyc.mongodb.net/club?retryWrites=true&w=majority';

// This is for local test 
// mongoose.connect(DB_URI, {
mongoose.connect(process.env.MONGODB_URI, {
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
