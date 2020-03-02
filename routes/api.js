const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

// ----------- Root API Directory
router.get('/', (req, res) => {
    console.log("beep")
   
})
// ----------- Clubs Routes
router.get('/clubs', ctrl.cities.index);
router.get('/clubs/:id', ctrl.cities.show);
router.post('/clubs', ctrl.cities.create);
router.put('/clubs/:id', ctrl.cities.update);
router.delete('/clubs/:id', ctrl.cities.destroy);

// ------------- Post Routes
router.get('/posts', ctrl.posts.index);
router.post('/clubs/:clubId/posts', ctrl.posts.create);
router.delete('/clubs/:clubId/posts/:postId', ctrl.posts.destroy);

module.exports = router