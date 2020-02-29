const express = require('express');
const router = express.Router();
const control = require('../controllers');

// /api/v1/
router.get('/', (req, res) => {
    console.log("beep")
    res.send(`Can you hear me Pimp Juice?`);
})

module.exports = router