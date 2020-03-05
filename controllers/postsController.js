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

// const destroy = (req, res) => {
//     db.Club.findById(req.params.cityId, (err, foundClubs) => {
//     if (err) return res.status(400).json({status: 400, error: 'Something went wrong, please try again'});

//     const deletePost = foundCity.posts.id(req.params.postId);

//     if (!deletePost) {
//         return res.status(400).json({status: 400, error: 'Could not find post'});
    
// }

// deletePost.remove();

// foundClubs.save((err, savedClubs) => {
//     if (err) return res.status(400).json({status: 400, error: 'Something went wrong, please try again'});
//     db.Post.findByIdAndDelete(req.params.postId, (err, deletedPost) => {
//         if (err)
//             return res.status(400).json({status: 400, error: 'Something went wrong, please try again'});

//           res.json(deletedPost);
//       });
//     });
//   });
// }


 module.exports = {
     index,
     create,
     
 }

