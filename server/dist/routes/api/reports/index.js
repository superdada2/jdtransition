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

router.post('/getHistory', function (req, res, next) {
  (0, _Authorization.Authorize)(req, res, next, [{
    type: 4,
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

            console.log(req.body);
            _context.next = 4;
            return (0, _controller.GetHistory)(req.body);

          case 4:
            result = _context.sent;

            res.status(200).json(result);
            _context.next = 13;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context['catch'](0);
            message = _context.t0.message;

            console.log("error", message);
            res.status(500).json({
              status: false,
              message: message
            });

          case 13:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[0, 8]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());

router.get('/getUsername', function (req, res, next) {
  (0, _Authorization.Authorize)(req, res, next, [{
    type: 4,
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

            console.log(req.body);
            _context2.next = 4;
            return (0, _controller.getDistinctUserName)(req.body);

          case 4:
            result = _context2.sent;

            res.status(200).json(result);
            _context2.next = 13;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2['catch'](0);
            message = _context2.t0.message;

            console.log("error", message);
            res.status(500).json({
              status: false,
              message: message
            });

          case 13:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined, [[0, 8]]);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());
router.post('/updateDescription', function (req, res, next) {
  (0, _Authorization.Authorize)(req, res, next, [{
    type: 1,
    role: 2
  }]);
}, function () {
  var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(req, res) {
    var result, message;
    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;

            console.log(req.body);
            _context3.next = 4;
            return (0, _controller.UpdateInvoiceDescription)(req.body, req.user.username);

          case 4:
            result = _context3.sent;

            res.status(200).json(result);
            _context3.next = 13;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3['catch'](0);
            message = _context3.t0.message;

            console.log("error", message);
            res.status(500).json({
              status: false,
              message: message
            });

          case 13:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, undefined, [[0, 8]]);
  }));

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());
router.post('/deleteInvoice', function (req, res, next) {
  (0, _Authorization.Authorize)(req, res, next, [{
    type: 1,
    role: 3
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
            return (0, _controller.DeleteInvoice)(req.body, req.user.username);

          case 3:
            result = _context4.sent;

            res.status(200).json(result);
            _context4.next = 12;
            break;

          case 7:
            _context4.prev = 7;
            _context4.t0 = _context4['catch'](0);
            message = _context4.t0.message;

            console.log("error", message);
            res.status(500).json({
              status: false,
              message: message
            });

          case 12:
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

router.post('/getIncomeDeferred', function (req, res, next) {
  (0, _Authorization.Authorize)(req, res, next, [{
    type: 1,
    role: 4
  }]);
}, function () {
  var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(req, res) {
    var result, message;
    return _regenerator2.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;

            console.log(req.body);
            _context5.next = 4;
            return (0, _controller.GetIncomeDeferred)(req.body);

          case 4:
            result = _context5.sent;

            res.status(200).json(result);
            _context5.next = 13;
            break;

          case 8:
            _context5.prev = 8;
            _context5.t0 = _context5['catch'](0);
            message = _context5.t0.message;

            console.log("error", message);
            res.status(500).json({
              status: false,
              message: message
            });

          case 13:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, undefined, [[0, 8]]);
  }));

  return function (_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}());

router.post('/modifyIncomeDeferred', function (req, res, next) {
  (0, _Authorization.Authorize)(req, res, next, [{
    type: 1,
    role: 2
  }]);
}, function () {
  var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(req, res) {
    var result, message;
    return _regenerator2.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;

            console.log(req.body);
            _context6.next = 4;
            return (0, _controller.ModifyIncomeDeferred)(req.body, req.user.username);

          case 4:
            result = _context6.sent;

            res.status(200).json(result);
            _context6.next = 12;
            break;

          case 8:
            _context6.prev = 8;
            _context6.t0 = _context6['catch'](0);
            message = _context6.t0.message;

            res.status(500).json({
              status: false,
              message: message
            });

          case 12:
          case 'end':
            return _context6.stop();
        }
      }
    }, _callee6, undefined, [[0, 8]]);
  }));

  return function (_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}());

router.post('/modifyInvoice', function (req, res, next) {
  (0, _Authorization.Authorize)(req, res, next, [{
    type: 1,
    role: 2
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
            return (0, _controller.ModifyInvoice)(req.body, req.user.username);

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

router.post('/createInvoice', function (req, res, next) {
  (0, _Authorization.Authorize)(req, res, next, [{
    type: 1,
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
            return (0, _controller.CreateInvoice)(req.body, req.user.username);

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

router.get('/getCustomerName', function (req, res, next) {
  (0, _Authorization.Authorize)(req, res, next, [{
    type: 1,
    role: 1
  }, {
    type: 1,
    role: 2
  }, {
    type: 1,
    role: 4
  }, {
    type: 3,
    role: 1
  }, {
    type: 5,
    role: 1
  }]);
}, function () {
  var _ref9 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee9(req, res) {
    var result, message;
    return _regenerator2.default.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.prev = 0;
            _context9.next = 3;
            return (0, _controller.getDistinctCustomerName)(req.body);

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

router.get('/getInvoiceNumber', function (req, res, next) {
  (0, _Authorization.Authorize)(req, res, next, [{
    type: 1,
    role: 1
  }, {
    type: 1,
    role: 2
  }, {
    type: 1,
    role: 4
  }, {
    type: 3,
    role: 1
  }, {
    type: 5,
    role: 1
  }]);
}, function () {
  var _ref10 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee10(req, res) {
    var result, message;
    return _regenerator2.default.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _context10.prev = 0;
            _context10.next = 3;
            return (0, _controller.getDistinctInvoiceNumber)(req.body);

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

router.post('/getInvoice', function (req, res, next) {
  (0, _Authorization.Authorize)(req, res, next, [{
    type: 1,
    role: 4
  }, {
    type: 5,
    role: 1
  }]);
}, function () {
  var _ref11 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee11(req, res) {
    var result, message;
    return _regenerator2.default.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _context11.prev = 0;
            _context11.next = 3;
            return (0, _controller.GetInvoice)(req.body);

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

router.post('/getProductTable', function (req, res, next) {
  (0, _Authorization.Authorize)(req, res, next, {
    type: 5,
    role: 1
  });
}, function () {
  var _ref12 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee12(req, res) {
    var result, message;
    return _regenerator2.default.wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            _context12.prev = 0;
            _context12.next = 3;
            return (0, _controller.getProductTable)(req.body);

          case 3:
            result = _context12.sent;

            res.status(200).json(result);
            _context12.next = 12;
            break;

          case 7:
            _context12.prev = 7;
            _context12.t0 = _context12['catch'](0);
            message = _context12.t0.message;

            console.log(_context12.t0);
            res.status(500).json({
              status: false,
              message: message
            });

          case 12:
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

router.post('/getClassTable', function (req, res, next) {
  (0, _Authorization.Authorize)(req, res, next, {
    type: 5,
    role: 1
  });
}, function () {
  var _ref13 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee13(req, res) {
    var result, message;
    return _regenerator2.default.wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            _context13.prev = 0;
            _context13.next = 3;
            return (0, _controller.getClassTable)(req.body);

          case 3:
            result = _context13.sent;


            res.status(200).json(result);
            _context13.next = 12;
            break;

          case 7:
            _context13.prev = 7;
            _context13.t0 = _context13['catch'](0);
            message = _context13.t0.message;

            console.log(_context13.t0);
            res.status(500).json({
              status: false,
              message: message
            });

          case 12:
          case 'end':
            return _context13.stop();
        }
      }
    }, _callee13, undefined, [[0, 7]]);
  }));

  return function (_x25, _x26) {
    return _ref13.apply(this, arguments);
  };
}());

router.get('/loadData', function () {
  var _ref14 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee14(req, res) {
    var result, message;
    return _regenerator2.default.wrap(function _callee14$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            _context14.prev = 0;
            _context14.next = 3;
            return (0, _controller.loadData)(req.body);

          case 3:
            result = _context14.sent;


            res.status(200).json(result);
            _context14.next = 12;
            break;

          case 7:
            _context14.prev = 7;
            _context14.t0 = _context14['catch'](0);
            message = _context14.t0.message;

            console.log(_context14.t0);
            res.status(500).json({
              status: false,
              message: message
            });

          case 12:
          case 'end':
            return _context14.stop();
        }
      }
    }, _callee14, undefined, [[0, 7]]);
  }));

  return function (_x27, _x28) {
    return _ref14.apply(this, arguments);
  };
}());
exports.default = router;