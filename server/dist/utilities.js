'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateField = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var updateField = exports.updateField = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
    var fieldId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var dbType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    var statusList, translations, temp;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _models.statusEnum.findAll();

          case 2:
            statusList = _context.sent;

            statusList = statusList.map(function (i) {
              return i.dataValues;
            });

            _context.next = 6;
            return _models.translation.findAll({
              where: {
                fieldId: fieldId
              }
            });

          case 6:
            translations = _context.sent;


            translations = translations.map(function (i) {
              return i.dataValues;
            }).filter(function (j) {
              return j.dbType == dbType;
            });
            console.log(fieldId, dbType);

            //check if there is complete ones

            if (!(_lodash2.default.findIndex(translations, function (i) {
              return i.status == 3;
            }) != -1)) {
              _context.next = 19;
              break;
            }

            _context.t0 = dbType;
            _context.next = _context.t0 === 1 ? 13 : _context.t0 === 2 ? 15 : 17;
            break;

          case 13:
            _models.field.update({
              jdeStatus: 4
            }, {
              where: {
                id: fieldId
              }
            });
            return _context.abrupt('break', 17);

          case 15:
            _models.field.update({
              oracleStatus: 4
            }, {
              where: {
                id: fieldId
              }
            });
            return _context.abrupt('break', 17);

          case 17:
            _context.next = 28;
            break;

          case 19:
            _context.t1 = dbType;
            _context.next = _context.t1 === 1 ? 22 : _context.t1 === 2 ? 25 : 28;
            break;

          case 22:
            _context.next = 24;
            return _models.field.update({
              jdeStatus: 2
            }, {
              where: {
                id: fieldId
              }
            });

          case 24:
            return _context.abrupt('break', 28);

          case 25:
            _context.next = 27;
            return _models.field.update({
              oracleStatus: 2
            }, {
              where: {
                id: fieldId
              }
            });

          case 27:
            return _context.abrupt('break', 28);

          case 28:
            _context.next = 30;
            return _models.field.findOne({
              where: {
                id: fieldId
              }
            }).then(function (i) {
              updateTableStatus(i.dataValues.tableId, dbType);
            });

          case 30:
            temp = _context.sent;

          case 31:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function updateField() {
    return _ref.apply(this, arguments);
  };
}();

exports.updateTableStatus = updateTableStatus;

var _models = require('./models');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function updateTableStatus(tableId, dbType) {
  var thisTable = _models.table.findOne({
    where: {
      id: tableId
    },
    include: [{
      model: _models.field
    }]
  }).then(function (i) {
    // console.log(i.dataValues)
    var fields = i.dataValues.fields.map(function (i) {
      return i.dataValues;
    }).filter(function (j) {
      return j.dbType = dbType;
    });

    //checkif complete
    console.log(fields, fields.filter(function (i) {
      return i.jdeStatus == 4;
    }).length);
    if (fields.filter(function (i) {
      return i.jdeStatus == 4;
    }).length == fields.length) {
      _models.table.update({
        status: 4
      }, {
        where: {
          id: tableId
        }
      });
    }
    //check if in progress
    if (fields.filter(function (i) {
      return i.jdeStatus == 4;
    }).length > 0 || fields.filter(function (i) {
      return i.jdeStatus == 2;
    }).length > 0) {
      _models.table.update({
        status: 7
      }, {
        where: {
          id: tableId
        }
      });
    }
  });
}