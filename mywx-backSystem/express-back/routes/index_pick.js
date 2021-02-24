const Pick1 = require('../models/pick1');

// pick1Data
exports.getPick1Data = (req, res) => {
    const username = req.query.user;
    // console.log(username)
    Pick1.findOne({ username })
        .then(data => {
            console.log(data)
            res.json(data)
        })
}


// pick1Upload
exports.pick1Upload = (req, res) => {
    const username = req.query.user;
    const { name, description, tags } = req.query
    console.log(username, name, description, tags)

    Pick1.findOneAndUpdate({ username }, { $push: { Name: name, description: description, Tags: tags } }, { new: true })
        .then(data => {
            res.json(data)
        })
}