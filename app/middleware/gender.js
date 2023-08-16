const axios = require('axios')

const determineGender = (req, res, next) => {
    axios.get('https://api.genderize.io', {
        params: {
            name: req.body.name
        }
    })
    .then((response) => {
        req.genderData = response.data
        next()
    })
    .catch((err) => {
        res.json(err) 
    })
}

module.exports = determineGender