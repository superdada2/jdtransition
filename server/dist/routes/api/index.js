'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.router = undefined;

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _enum = require('./enum');

var _enum2 = _interopRequireDefault(_enum);

var _reports = require('./reports');

var _reports2 = _interopRequireDefault(_reports);

var _graph = require('./graph');

var _graph2 = _interopRequireDefault(_graph);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = exports.router = _express2.default.Router();
router.use('/enum', _enum2.default);
router.use('/reports', _reports2.default);
router.use('/graph', _graph2.default);
exports.default = router;