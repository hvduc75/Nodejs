const connection = require('../config/database');
const {getAllUsers} = require("../services/CRUDService")

const getHomePage = async (req, res) => {
    let results = await getAllUsers();
    return res.render('home.ejs', {listUsers: results});
};

const getABC = (req, res) => {
    res.render('sample.ejs');
};

const getCreatePage = (req, res) => {
    res.render('create.ejs');
};

const postCreateUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;

    // connection.query(
    //     `INSERT INTO Users (email, name, city)
    //     Values (?, ?, ?)`,
    //     [email, name, city],
    //     function (err, results) {
    //         res.send('Created User succeed!');
    //     },
    // );

    let [results, fields] = await connection.query(
        `INSERT INTO Users (email, name, city)
        Values (?, ?, ?)`,
        [email, name, city],
    );

    res.send('Created User succeed!');
};

module.exports = {
    getHomePage,
    getABC,
    postCreateUser,
    getCreatePage,
};
