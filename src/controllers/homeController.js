const connection = require('../config/database');

const getHomePage = (req, res) => {
    return res.render('home.ejs');
};

const getABC = (req, res) => {
    res.render('sample.ejs');
};

const postCreateUser = (req, res) => {
    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;

    connection.query (
        `INSERT INTO Users (email, name, city)
        Values (?, ?, ?)`,
        [email, name, city],
        function(err, results) {
            console.log(results);
            res.send('Created User succeed!')
        }
    )
};

module.exports = {
    getHomePage,
    getABC,
    postCreateUser,
};
