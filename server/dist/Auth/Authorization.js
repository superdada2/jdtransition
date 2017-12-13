"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require("babel-runtime/helpers/toConsumableArray");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

exports.Authorize = Authorize;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Authorize(req, res, next, requredPermissions) {
  var permissions = [].concat((0, _toConsumableArray3.default)(req.user.permissions));
  if (requredPermissions.constructor === Array) {
    var authorize = undefined;
    for (var i = 0; i < requredPermissions.length; i++) {
      authorize = permissions.find(function (j) {
        return j.module === requredPermissions[i].type && j.role === requredPermissions[i].role;
      });
      if (authorize) {
        break;
      }
    }
    if (authorize) {
      console.log("authorized");
      next();
    } else {
      console.log("Unauthorized");
      res.status(401).json({
        type: "error",
        message: "Unauthorized request"
      });
    }
  } else {
    var _authorize = permissions.find(function (i) {
      return i.module === requredPermissions.type && i.role === requredPermissions.role;
    });
    if (_authorize) {
      console.log("authorized");
      next();
    } else {
      console.log("Unauthorized");
      res.status(401).json({
        type: "error",
        message: "Unauthorized request"
      });
    }
  }
}