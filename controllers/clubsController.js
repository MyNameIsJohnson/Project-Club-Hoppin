const db = require('../models');

const index = (req, res) => {
    db.Club.find({}, (err, allClubs) => {
        if(err) {
            return res.status(400).json({status: 400, message: 'Something went wrong, please try again'});
            
        }
        res.json(allClubs);
    });
};
const show = (req, res) => {
    db.Club.findById(req.params.id, (err, foundClub) => {
        if (err) return res.status(400).json({status: 400, message: 'Something went wrong, please try again'}),
        res.json(foundClub);
        
    });
 };
module.exports = {
    index,
    show
};