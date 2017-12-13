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

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

var _Authorization = require('../../Auth/Authorization');

var _controller = require('./controller');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = exports.router = _express2.default.Router();
router.post('/login', function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
    var result, message;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return (0, _controller.login)(req.body);

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

router.post('/delete', function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res) {
    var result, message;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return (0, _controller.DeleteUser)(req.body);

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

router.post('/register', function () {
  var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(req, res) {
    var result, message;
    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return (0, _controller.register)(req.body);

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

router.post('/test', _passport2.default.authenticate('auth', {
  session: false
}), function (req, res) {
  try {
    res.status(200).json("success");
  } catch (err) {
    var message = err.message;
    res.status(500).json({
      status: false,
      message: message
    });
  }
});

router.post('/logout', _passport2.default.authenticate('auth', {
  session: false
}), function (req, res) {
  try {
    req.logout();
    res.status(200).json("success");
  } catch (err) {
    var message = err.message;
    res.status(500).json({
      status: false,
      message: message
    });
  }
});

router.get('/user', _passport2.default.authenticate('auth', {
  session: false
}), function (req, res, next) {
  (0, _Authorization.Authorize)(req, res, next, [{
    type: 4,
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
            return (0, _controller.GetUsers)(req.body);

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
router.post('/changeStatus', _passport2.default.authenticate('auth', {
  session: false
}), function (req, res, next) {
  (0, _Authorization.Authorize)(req, res, next, [{
    type: 4,
    role: 1
  }]);
}, function () {
  var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(req, res) {
    var result, message;
    return _regenerator2.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return (0, _controller.ChangeStatus)(req.body);

          case 3:
            result = _context5.sent;

            res.status(200).json(result);
            _context5.next = 11;
            break;

          case 7:
            _context5.prev = 7;
            _context5.t0 = _context5['catch'](0);
            message = _context5.t0.message;

            res.status(500).json({
              status: false,
              message: message
            });

          case 11:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, undefined, [[0, 7]]);
  }));

  return function (_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}());
router.post('/resetOwnPassword', _passport2.default.authenticate('auth', {
  session: false
}), function (req, res, next) {
  if (req.user.username === req.body.username) {
    next();
  } else {
    res.status(401).json({
      status: false,
      message: "Access denied"
    });
  }
}, function () {
  var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(req, res) {
    var result, message;
    return _regenerator2.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return (0, _controller.changePassword)(req.body);

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

router.post('/resetPassword', _passport2.default.authenticate('auth', {
  session: false
}), function (req, res, next) {
  (0, _Authorization.Authorize)(req, res, next, [{
    type: 4,
    role: 1
  }]);
}, function () {
  var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7(req, res) {
    var result, message;
    return _regenerator2.default.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            _context7.next = 3;
            return (0, _controller.changePassword)(req.body);

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

router.post('/updatePermissions', _passport2.default.authenticate('auth', {
  session: false
}), function (req, res, next) {
  (0, _Authorization.Authorize)(req, res, next, [{
    type: 4,
    role: 1
  }]);
}, function () {
  var _ref8 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee8(req, res) {
    var result, message;
    return _regenerator2.default.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            _context8.next = 3;
            return (0, _controller.UpdatePermissions)(req.body);

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

exports.default = router;