 const db = require('../models');

 const index = (req, res) => {
     db.Post.find({}, (err, allPosts) => {
         if (err) return res.status(400).json({status: 400, message: 'Something went wrong please try again'});
         res.json(allPosts);
     });
 };

 const create = (req, res) => {
    db.Post.create(req.body, (err, foundPosts) => {
        if (err) return res.status(400).json({status: 400, message: 'Something went wrong, please try again'}),
        res.json(foundPosts);
        
    db.Club.findById(req.params.clubsID, (err, foundClub) => {
        if (err) return res.status(400).json({ status: 400, message: 'Something went wrong, please try again'}),
        res.json(foundClub);

    foundClub.posts.push(foundPosts);


    });
    
    })
 };
 module.exports = {
     index,
     create,
 };
