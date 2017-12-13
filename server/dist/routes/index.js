'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.router = undefined;

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _api = require('./api');

var _api2 = _interopRequireDefault(_api);

var _auth = require('./auth');

var _auth2 = _interopRequireDefault(_auth);

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

var _initialize = require('../initialize');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = exports.router = _express2.default.Router();

router.use('/api/v1', _passport2.default.authenticate('auth', {
  session: false
}), _api2.default);
router.use('/auth', _auth2.default);
router.get('/loadInvoice', _initialize.loadInvoice);
router.use('*', function (req, res) {
  console.log("Route Not Found", req.baseUrl);
  res.status(404).json({
    error: 'route not found'
  });
});

exports.default = router;