'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.register = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var register = exports.register = function () {
  var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(_ref7) {
    var _ref7$username = _ref7.username,
        username = _ref7$username === undefined ? "" : _ref7$username,
        _ref7$password = _ref7.password,
        password = _ref7$password === undefined ? "" : _ref7$password,
        _ref7$email = _ref7.email,
        email = _ref7$email === undefined ? "" : _ref7$email;
    var hashed, res;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            hashed = _bcrypt2.default.hashSync(password, 10);
            _context2.next = 3;
            return _models.user.create({
              username: username,
              password: hashed,
              email: email
            });

          case 3:
            res = _context2.sent;
            return _context2.abrupt('return', login({
              username: username,
              password: password
            }));

          case 5:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function register(_x3) {
    return _ref6.apply(this, arguments);
  };
}();

exports.resetPassword = resetPassword;
exports.changePassword = changePassword;
exports.ChangeStatus = ChangeStatus;
exports.login = login;
exports.GetUsers = GetUsers;
exports.DeleteUser = DeleteUser;
exports.UpdatePermissions = UpdatePermissions;

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _bcrypt = require('bcrypt');

var _bcrypt2 = _interopRequireDefault(_bcrypt);

var _models = require('../../models');

var _settings = require('../../settings');

var _nodemailer = require('nodemailer');

var _nodemailer2 = _interopRequireDefault(_nodemailer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function resetPassword(_ref) {
  var _this = this;

  var _ref$email = _ref.email,
      email = _ref$email === undefined ? "" : _ref$email;

  return new _bluebird2.default(function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(res, rej) {
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:

              _models.user.findOne({
                email: email,
                status: 'active'
              }).then(function (res) {
                var token = _jsonwebtoken2.default.sign({
                  username: res.dataValues.username
                }, _settings.jwtOptions.resetPassword, {
                  expiresIn: '10h'
                });
                res({
                  status: 'success'
                });
              }).catch(function (err) {
                rej({
                  status: 'failed',
                  message: 'Error'
                });
              });

            case 1:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }));

    return function (_x, _x2) {
      return _ref2.apply(this, arguments);
    };
  }());
}

function changePassword(_ref3) {
  var _ref3$password = _ref3.password,
      password = _ref3$password === undefined ? "" : _ref3$password,
      _ref3$username = _ref3.username,
      username = _ref3$username === undefined ? "" : _ref3$username,
      _ref3$forceReset = _ref3.forceReset,
      forceReset = _ref3$forceReset === undefined ? false : _ref3$forceReset;

  var hashed = _bcrypt2.default.hashSync(password, 10);
  return _models.user.update({
    password: hashed,
    forceReset: forceReset
  }, {
    where: {
      username: username
    }
  });
}

function ChangeStatus(_ref4) {
  var _ref4$username = _ref4.username,
      username = _ref4$username === undefined ? "" : _ref4$username,
      _ref4$status = _ref4.status,
      status = _ref4$status === undefined ? "Active" : _ref4$status;

  return _models.user.update({
    status: status
  }, {
    where: {
      username: username
    }
  });
}
function login(_ref5) {
  var _ref5$username = _ref5.username,
      username = _ref5$username === undefined ? "blobl" : _ref5$username,
      _ref5$password = _ref5.password,
      password = _ref5$password === undefined ? "bob" : _ref5$password;

  return new _bluebird2.default(function (res, rej) {
    _models.user.findOne({
      where: {
        username: username,
        status: "active"
      },
      include: [{
        model: _models.user_permission
      }]
    }).then(function (thisUser) {

      if (_bcrypt2.default.compareSync(password, thisUser.dataValues.password)) {
        var token = _jsonwebtoken2.default.sign({
          username: username
        }, _settings.jwtOptions.secretOrKey);

        res({
          message: "success",
          user: (0, _extends3.default)({}, thisUser.dataValues, {
            password: ""
          }),
          token: token
        });
      }
      rej({
        message: "failed"
      });
    }).catch(function (err) {
      rej({
        message: "failed"
      });
    });
  });
}

function GetUsers() {

  return _models.user.findAll({
    attributes: ['username', 'status', 'email'],
    include: [{
      model: _models.user_permission
    }]

  });
}

function DeleteUser(_ref8) {
  var _ref8$username = _ref8.username,
      username = _ref8$username === undefined ? "" : _ref8$username;

  return _models.user.update({
    status: "deleted"
  }, {
    where: {
      username: username
    }
  });
}

function UpdatePermissions(_ref9) {
  var _this2 = this;

  var _ref9$username = _ref9.username,
      username = _ref9$username === undefined ? "" : _ref9$username,
      _ref9$permissions = _ref9.permissions,
      permissions = _ref9$permissions === undefined ? [] : _ref9$permissions;

  return new _bluebird2.default(function () {
    var _ref10 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(res, rej) {
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _models.user_permission.destroy({
                where: {
                  username: username
                }
              });

            case 2:
              _models.user_permission.bulkCreate(permissions).then(function (out) {
                res("success");
              }).catch(function (err) {

                rej("failed");
              });

            case 3:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, _this2);
    }));

    return function (_x4, _x5) {
      return _ref10.apply(this, arguments);
    };
  }());
}