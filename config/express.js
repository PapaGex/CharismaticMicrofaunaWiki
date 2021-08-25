const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const HandleTemplate = require('express-handlebars');
const session = require('express-session');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();


app.use = require('cors');

module.exports = (app);  {
  
    app.set('view engine', 'hbs');

    app.engine( "hbs",
        HandleTemplate({ extname: "hbs", defaultLayout: "",
            layoutsDir: __dirname + "/views", partialsDir: __dirname + "/views", })
    );

    app.use(bodyParser.urlencoded({ extended: true}));

    app.use(cookieParser());
    app.use(express.static('static'));

    };