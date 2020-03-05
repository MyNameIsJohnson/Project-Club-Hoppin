 const db = require('../models');
// -------------- Show Reviews (Posts)
 const index = (req, res) => {
     db.Post.find({}, (err, allPosts) => {
         if (err) return res.status(400).json({status: 400, message: 'Something went wrong please try again'});
         res.json(allPosts);
     });
 };
// -------------- Show A Review (Post)
 const show = (req, res) => {
     console.log('beep')
    db.Post.findById(req.params.postId, (err, foundPost) => {
        if (err) return res.status(400).json({status: 400, message: 'Something went wrong, please try again'});
        res.json(foundPost);
        
    });
 };

// ---------------- Creating A Review (Post)
 const create = (req, res) => {
   console.log(req.body)
    db.Post.create(req.body, (err, post) => {
        if (err) return res.status(400).json({status: 400, message: 'Something went wrong, please try again'});
       
 db.Club.findById(req.params.clubId, (err, foundClub) => {
    if (err) return res.status(400).json({ status: 400, message: 'Something went wrong, please try again'});
    
    foundClub.reviews.push(post);
    
    foundClub.save((err, savedPost) => {
        if (err) return res.status(400).json({status: 400, error: 'Something went wrong, please try again'});
    });
    
    res.json(foundClub);
});
});
};
// ------------ Get And Edit A Review (Post)
const update = (req, res) => {
    
    db.Post.findByIdAndUpdate(req.params.postId, req.body, {new: true}, (err, updatedClub) => {
      if (err) return res.status(400).json({status: 400, error: 'Something went wrong, please try again'});
  
      db.Club.findById(req.params.clubId, (err, foundClub) => {
        if (err) return res.status(400).json({status: 400, error: 'Something went wrong, please try again'});
    
        const updatePost = foundClub.reviews.id(req.params.postId);
        updatePost.set(req.body)
        foundClub.save((err, savedClub) => {
         if (err) return res.status(400).json({status: 400, error: 'Something went wrong, please try again'});
         
         res.json(savedClub);
    });
    });
    });
    
  };

// ---------------- Deleting A Review (Post)
const destroy = (req, res) => {
    db.Club.findById(req.params.clubId, (err, foundClubs) => {
    if (err) return res.status(400).json({status: 400, error: 'Something went wrong, please try again'});

    const deletePost = foundClubs.reviews.id(req.params.postId);

    if (!deletePost) {
        return res.status(400).json({status: 400, error: 'Could not find post'});

    
}
deletePost.remove();

foundClubs.save((err, savedClubs) => {
    if (err) return res.status(400).json({status: 400, error: 'Something went wrong, please try again'});
    db.Post.findByIdAndDelete(req.params.postId, (err, deletedPost) => {
        if (err)
            return res.status(400).json({status: 400, error: 'Something went wrong, please try again'});

          res.json(deletedPost);
      });
    });
  });
};


 module.exports = {
     index,
     show,
     create,
     update,
     destroy
    
 };

