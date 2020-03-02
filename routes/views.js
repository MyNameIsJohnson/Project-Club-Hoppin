const express = require('express');
// ----------------- Invoking Router
const router = express.Router();

// ------------------ Changing App To Router
router.get('/', (req, res) => {
    res.sendFile('views/index.html', {
        root: __dirname + '/../' // Path to root directory & Template
    });
});

// Exporting Router
module.exports = router;
