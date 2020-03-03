const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

// ----------- Root API Directory
// router.get('/', (req, res) => {
//     console.log("beep")
   
// })
// ----------- Clubs Routes
router.get('/clubs', ctrl.clubs.index);
// router.get('/clubs/:id', ctrl.clubs.show);
// router.post('/clubs', ctrl.clubs.create);
// router.put('/clubs/:id', ctrl.clubs.update);
// router.delete('/clubs/:id', ctrl.clubs.destroy);

// ------------- Post Routes
// router.get('/posts', ctrl.posts.index);
// router.post('/clubs/:clubId/posts', ctrl.posts.create);
// router.delete('/clubs/:clubId/posts/:postId', ctrl.posts.destroy);

module.exports = router