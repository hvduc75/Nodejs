require('dotenv').config();
const express = require('express');
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const connection = require('./config/database')

const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

//config req.body
app.use(express.json()) // for json
app.use(express.urlencoded({ extended: true })) // for from data

// config template engine
configViewEngine(app);

// khai báo route
app.use('/', webRoutes);

// simple query
// connection.query('select * from Users u', 
//     function (err, results, fields) {
//     console.log('>>> results = ', results);
// });

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`);
});
