const db = require('../models');

const index = (req, res) => {
    db.Club.find({}, (err, allClubs) => {
        if(err) return res.status(400).json({status: 400, message: 'Something went wrong, please try again'}),
        res.json(allClubs)
    });
};

module.exports = {
    index
}