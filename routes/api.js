const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

// /api/v1/
router.get('/', (req, res) => {
    console.log("beep")
   
})

module.exports = router