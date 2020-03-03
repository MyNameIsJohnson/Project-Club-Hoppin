 const db = require('../models');

 const index = (req, res) => {
     db.Post.find({}, (err, allPosts) => {
         if (err) return res.status(400).json({status: 400, message: 'Something went wrong please try again'});
         res.json(allPosts);
     });
 };

 module.exports = {
     index
 };
