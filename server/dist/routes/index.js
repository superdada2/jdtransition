'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.router = undefined;

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _api = require('./api');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = exports.router = _express2.default.Router();

router.use('/api/v1', _api2.default);
router.use('*', function (req, res) {
  console.log("Route Not Found", req.baseUrl);
  res.status(404).json({
    error: 'route not found'
  });
});

exports.default = router;