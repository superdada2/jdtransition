'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _compression = require('compression');

var _compression2 = _interopRequireDefault(_compression);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

var _expressPartials = require('express-partials');

var _expressPartials2 = _interopRequireDefault(_expressPartials);

var _models = require('./models');

var _mysql = require('mysql');

var _mysql2 = _interopRequireDefault(_mysql);

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

var _initiate = require('./routes/api/initiate');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.set("view engine", 'ejs').set('views', __dirname + '/views').use((0, _expressPartials2.default)()).use((0, _compression2.default)()).use((0, _cors2.default)()).use(_bodyParser2.default.json()).use(_bodyParser2.default.urlencoded({ extended: true })).use(_passport2.default.initialize()).use('/', _routes2.default);

exports.default = app;


var server = _http2.default.createServer(app);
var port = process.env.PORT || 4040;

_models.sequelize.sync().then(function () {

  server.listen(port, function () {
    (0, _initiate.initiate)();
    console.log('Server listening at port %d', port);
  });
});