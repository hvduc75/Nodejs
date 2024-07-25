const connection = require('../config/database');

const getHomePage = (req, res) => {
    return res.render('home.ejs');
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

    // connection.query('select * from Users u',
    //     function (err, results, fields) {
    //     console.log('>>> results = ', results);
    // });

    // const [results, fields] = await connection.query('select * from Users u')
    // console.log(">>> check result: ", results)
};

module.exports = {
    getHomePage,
    getABC,
    postCreateUser,
    getCreatePage,
};
