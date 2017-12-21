'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.router = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _table = require('./table');

var _table2 = _interopRequireDefault(_table);

var _field = require('./field');

var _field2 = _interopRequireDefault(_field);

var _translation = require('./translation');

var _translation2 = _interopRequireDefault(_translation);

var _system = require('./system');

var _system2 = _interopRequireDefault(_system);

var _initiate = require('./initiate');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = exports.router = _express2.default.Router();

router.use('/table', _table2.default);
router.use('/field', _field2.default);
router.use('/translation', _translation2.default);
router.use('/system', _system2.default);

router.get('/load', function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:

            (0, _initiate.loadData)();
            res.status(500).json('test');

          case 2:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
router.get('/updateTable', function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res) {
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:

            (0, _initiate.updateTable)();
            res.status(500).json('test');

          case 2:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());
exports.default = router;

// router.post('/getHistory', (req, res, next) => {   Authorize(req, res, next,
// [{     type: 4,     role: 2   }]) }, async(req, res) => {   try {
// console.log(req.body)     const result = await GetHistory(req.body)
// res.status(200).json(result)   } catch (err) {     const message =
// err.message     console.log("error", message)     res.status(500).json({
// status: false,       message     })   } })