'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _models = require('../models');

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

var _settings = require('../settings');

var _passportJwt = require('passport-jwt');

var _passportJwt2 = _interopRequireDefault(_passportJwt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ExtractJwt = _passportJwt2.default.ExtractJwt;
var strategyJWT = _passportJwt2.default.Strategy;

var strategy = new strategyJWT(_settings.jwtOptions, function (payload, next) {

  _models.user.findOne({
    where: {
      username: payload.username
    },
    include: [{
      model: _models.user_permission
    }]
  }).then(function (res) {

    next(null, {
      username: res.dataValues.username,
      permissions: res.dataValues.user_permissions.map(function (i) {
        return i.dataValues;
      })
    });
  });
});

exports.default = strategy;