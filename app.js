// 入口文件
// author:suning
'use strict';
var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
// Config File
var config=require('./config/config');
var app = express();
global.app=app;
// 禁用报头
app.disable('x-powered-by');
// view engine setup
app.set('views', path.join(__dirname, 'modules/views'));
app.engine('.html',require('ejs').__express);
app.set('view engine', 'html');
app.use(favicon());
// 打日志
app.use(logger('dev'));
app.use(bodyParser.json({limit:'50mb'}));
app.use(bodyParser.urlencoded({
    limit:'50mb',
    extended:true
}));
app.use(cookieParser());
//session配置
app.use(session({
    name:config.name,
    secret: config.cookie_secret,
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 60000*10 },
}));
// 静态资源目录
app.use(express.static(path.join(__dirname, 'public')));
// 路由控制
var routes = require('./routes/route');
routes(app);
/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});
/// error handlers
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});
module.exports = app;
