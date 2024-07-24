
const getHomePage = (req, res) => {
    res.send('Hello World! & hoang van duc');
}

const getABC = (req, res) => {
    res.render('sample.ejs');
}

module.exports = {
    getHomePage,
    getABC
}