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

var _controller = require('./controller');

var _Authorization = require('../../../Auth/Authorization');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = exports.router = _express2.default.Router();

router.get('/loadCountry', function (req, res, next) {
  (0, _Authorization.Authorize)(req, res, next, [{
    type: 1,
    role: 1
  }, {
    type: 1,
    role: 2
  }]);
}, function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
    var result, message;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return (0, _controller.loadCountry)(req.body);

          case 3:
            result = _context.sent;

            res.status(200).json(result);
            _context.next = 11;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context['catch'](0);
            message = _context.t0.message;

            res.status(500).json({
              status: false,
              message: message
            });

          case 11:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[0, 7]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());

router.post('/update', function (req, res, next) {
  (0, _Authorization.Authorize)(req, res, next, [{
    type: 2,
    role: 2
  }]);
}, function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res) {
    var result, message;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return (0, _controller.update)(req.body);

          case 3:
            result = _context2.sent;

            res.status(200).json(result);
            _context2.next = 11;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2['catch'](0);
            message = _context2.t0.message;

            res.status(500).json({
              status: false,
              message: message
            });

          case 11:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined, [[0, 7]]);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());

router.post('/delete', function (req, res, next) {
  (0, _Authorization.Authorize)(req, res, next, [{
    type: 2,
    role: 3
  }]);
}, function () {
  var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(req, res) {
    var result, message;
    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return (0, _controller.deleteEnum)(req.body);

          case 3:
            result = _context3.sent;

            res.status(200).json(result);
            _context3.next = 11;
            break;

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3['catch'](0);
            message = _context3.t0.message;

            res.status(500).json({
              status: false,
              message: message
            });

          case 11:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, undefined, [[0, 7]]);
  }));

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());

router.post('/add', function (req, res, next) {
  (0, _Authorization.Authorize)(req, res, next, [{
    type: 2,
    role: 1
  }]);
}, function () {
  var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(req, res) {
    var result, message;
    return _regenerator2.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return (0, _controller.add)(req.body);

          case 3:
            result = _context4.sent;

            res.status(200).json(result);
            _context4.next = 11;
            break;

          case 7:
            _context4.prev = 7;
            _context4.t0 = _context4['catch'](0);
            message = _context4.t0.message;

            res.status(500).json({
              status: false,
              message: message
            });

          case 11:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, undefined, [[0, 7]]);
  }));

  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}());

router.get('/all', function () {
  var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(req, res) {
    var Class, currency, product, revenueType, status, type, subscription, month, country, message;
    return _regenerator2.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return (0, _controller.getClass)(req.body);

          case 3:
            Class = _context5.sent;
            _context5.next = 6;
            return (0, _controller.getCurrency)();

          case 6:
            currency = _context5.sent;
            _context5.next = 9;
            return (0, _controller.getProduct)();

          case 9:
            product = _context5.sent;
            _context5.next = 12;
            return (0, _controller.getRevenueType)();

          case 12:
            revenueType = _context5.sent;
            _context5.next = 15;
            return (0, _controller.getStatus)();

          case 15:
            status = _context5.sent;
            _context5.next = 18;
            return (0, _controller.getType)();

          case 18:
            type = _context5.sent;
            _context5.next = 21;
            return (0, _controller.getSubscription)();

          case 21:
            subscription = _context5.sent;
            _context5.next = 24;
            return (0, _controller.getMonth)();

          case 24:
            month = _context5.sent;
            _context5.next = 27;
            return (0, _controller.getCountry)();

          case 27:
            country = _context5.sent;

            res.status(200).json({
              Class: Class,
              currency: currency,
              product: product,
              revenueType: revenueType,
              status: status,
              type: type,
              subscription: subscription,
              month: month,
              country: country
            });
            _context5.next = 35;
            break;

          case 31:
            _context5.prev = 31;
            _context5.t0 = _context5['catch'](0);
            message = _context5.t0.message;

            res.status(500).json({
              status: false,
              message: message
            });

          case 35:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, undefined, [[0, 31]]);
  }));

  return function (_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}());

router.get('/class', function () {
  var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(req, res) {
    var result, message;
    return _regenerator2.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return (0, _controller.getClass)(req.body);

          case 3:
            result = _context6.sent;

            res.status(200).json(result);
            _context6.next = 11;
            break;

          case 7:
            _context6.prev = 7;
            _context6.t0 = _context6['catch'](0);
            message = _context6.t0.message;

            res.status(500).json({
              status: false,
              message: message
            });

          case 11:
          case 'end':
            return _context6.stop();
        }
      }
    }, _callee6, undefined, [[0, 7]]);
  }));

  return function (_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}());

router.get('/currency', function () {
  var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7(req, res) {
    var result, message;
    return _regenerator2.default.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            _context7.next = 3;
            return (0, _controller.getCurrency)(req.body);

          case 3:
            result = _context7.sent;

            res.status(200).json(result);
            _context7.next = 11;
            break;

          case 7:
            _context7.prev = 7;
            _context7.t0 = _context7['catch'](0);
            message = _context7.t0.message;

            res.status(500).json({
              status: false,
              message: message
            });

          case 11:
          case 'end':
            return _context7.stop();
        }
      }
    }, _callee7, undefined, [[0, 7]]);
  }));

  return function (_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}());

router.get('/product', function () {
  var _ref8 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee8(req, res) {
    var result, message;
    return _regenerator2.default.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            _context8.next = 3;
            return (0, _controller.getProduct)(req.body);

          case 3:
            result = _context8.sent;

            res.status(200).json(result);
            _context8.next = 11;
            break;

          case 7:
            _context8.prev = 7;
            _context8.t0 = _context8['catch'](0);
            message = _context8.t0.message;

            res.status(500).json({
              status: false,
              message: message
            });

          case 11:
          case 'end':
            return _context8.stop();
        }
      }
    }, _callee8, undefined, [[0, 7]]);
  }));

  return function (_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}());

router.get('/revenueType', function () {
  var _ref9 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee9(req, res) {
    var result, message;
    return _regenerator2.default.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.prev = 0;
            _context9.next = 3;
            return (0, _controller.getRevenueType)(req.body);

          case 3:
            result = _context9.sent;

            res.status(200).json(result);
            _context9.next = 11;
            break;

          case 7:
            _context9.prev = 7;
            _context9.t0 = _context9['catch'](0);
            message = _context9.t0.message;

            res.status(500).json({
              status: false,
              message: message
            });

          case 11:
          case 'end':
            return _context9.stop();
        }
      }
    }, _callee9, undefined, [[0, 7]]);
  }));

  return function (_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}());

router.get('/status', function () {
  var _ref10 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee10(req, res) {
    var result, message;
    return _regenerator2.default.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _context10.prev = 0;
            _context10.next = 3;
            return (0, _controller.getStatus)(req.body);

          case 3:
            result = _context10.sent;

            res.status(200).json(result);
            _context10.next = 11;
            break;

          case 7:
            _context10.prev = 7;
            _context10.t0 = _context10['catch'](0);
            message = _context10.t0.message;

            res.status(500).json({
              status: false,
              message: message
            });

          case 11:
          case 'end':
            return _context10.stop();
        }
      }
    }, _callee10, undefined, [[0, 7]]);
  }));

  return function (_x19, _x20) {
    return _ref10.apply(this, arguments);
  };
}());

router.get('/type', function () {
  var _ref11 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee11(req, res) {
    var result, message;
    return _regenerator2.default.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _context11.prev = 0;
            _context11.next = 3;
            return (0, _controller.getType)(req.body);

          case 3:
            result = _context11.sent;

            res.status(200).json(result);
            _context11.next = 11;
            break;

          case 7:
            _context11.prev = 7;
            _context11.t0 = _context11['catch'](0);
            message = _context11.t0.message;

            res.status(500).json({
              status: false,
              message: message
            });

          case 11:
          case 'end':
            return _context11.stop();
        }
      }
    }, _callee11, undefined, [[0, 7]]);
  }));

  return function (_x21, _x22) {
    return _ref11.apply(this, arguments);
  };
}());

router.get('/subscription', function () {
  var _ref12 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee12(req, res) {
    var result, message;
    return _regenerator2.default.wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            _context12.prev = 0;
            _context12.next = 3;
            return (0, _controller.getSubscription)(req.body);

          case 3:
            result = _context12.sent;

            res.status(200).json(result);
            _context12.next = 11;
            break;

          case 7:
            _context12.prev = 7;
            _context12.t0 = _context12['catch'](0);
            message = _context12.t0.message;

            res.status(500).json({
              status: false,
              message: message
            });

          case 11:
          case 'end':
            return _context12.stop();
        }
      }
    }, _callee12, undefined, [[0, 7]]);
  }));

  return function (_x23, _x24) {
    return _ref12.apply(this, arguments);
  };
}());

exports.default = router;