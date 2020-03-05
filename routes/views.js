const express = require('express');
// ----------------- Invoking Router
const router = express.Router();

// ------------------ Changing App To Router
router.get('/', (req, res) => {
    res.sendFile('views/index.html', {
        root: __dirname + '/../' // Path to root directory & Template
    });
});
router.get('/clubs/:id', (req, res) => {
    res.sendFile('views/review.html', {
        root: __dirname + '/../'
    });
});
// Exporting Router
module.exports = router;
