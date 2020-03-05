 const db = require('../models');

 const index = (req, res) => {
     db.Post.find({}, (err, allPosts) => {
         if (err) return res.status(400).json({status: 400, message: 'Something went wrong please try again'});
         res.json(allPosts);
     });
 };

 const create = (req, res) => {
   console.log(req.body)
    db.Post.create(req.body, (err, post) => {
        if (err) return res.status(400).json({status: 400, message: 'Something went wrong, please try again'});
        console.log('beep')
 db.Club.findById(req.params.clubId, (err, foundClub) => {
    if (err) return res.status(400).json({ status: 400, message: 'Something went wrong, please try again'});
    
    foundClub.reviews.push(post);
    console.log(foundClub)
    foundClub.save((err, savedPost) => {
        if (err) return res.status(400).json({status: 400, error: 'Something went wrong, please try again'});
    });
    
    res.json(foundClub);
});
    

});

 };
 
 module.exports = {
     index,
     create,
 }
