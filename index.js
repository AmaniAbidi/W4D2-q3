const express = require('express');
const router  = require("./router");
const path    = require('path');
const session = require('express-session');
const app     = express();

app.use(session({
    secret: 'code',
    resave: false,
    saveUninitialized: true
}));

app.set('view engine', 'ejs');


app.use(express.urlencoded({extended:false}));

app.use('/', router);

app.listen(3000);