const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

// ----------- Clubs Routes
router.get('/clubs', ctrl.clubs.index);
router.get('/clubs/:clubId', ctrl.clubs.show);
// router.post('/clubs', ctrl.clubs.create);
// router.delete('/clubs/:id', ctrl.clubs.destroy);

// ------------- Post Routes
router.get('/posts', ctrl.posts.index);
router.get('/posts/:postId', ctrl.posts.show);
router.post('/clubs/:clubId/posts', ctrl.posts.create);
router.put('/clubs/:clubId/posts/:postId', ctrl.posts.update);
router.delete('/clubs/:clubId/posts/:postId', ctrl.posts.destroy);

module.exports = router;
