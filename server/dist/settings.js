'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.jwtOptions = undefined;

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _passportJwt = require('passport-jwt');

var _passportJwt2 = _interopRequireDefault(_passportJwt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ExtractJwt = _passportJwt2.default.ExtractJwt;
var strategyJWT = _passportJwt2.default.Strategy;

var jwtOptions = exports.jwtOptions = {};
jwtOptions.jwtFromRequest = _passportJwt2.default.ExtractJwt.fromAuthHeaderWithScheme('jwt');
jwtOptions.secretOrKey = 'invoice';
jwtOptions.resetSecret = "resetPassword";