'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initiate = exports.updateTable = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var updateTable = exports.updateTable = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
    var tables;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _models.table.findAll();

          case 2:
            tables = _context.sent;


            tables = tables.map(function (i) {
              return i.dataValues;
            });
            tables.forEach(function (t) {
              (0, _utilities.updateTableStatus)(t.id, 1);
            });

          case 5:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function updateTable() {
    return _ref.apply(this, arguments);
  };
}();

var initiate = exports.initiate = function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
    var status, dbType;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            status = [{
              id: 1,
              data: 'empty'
            }, {
              id: 2,
              data: 'populated'
            }, {
              id: 3,
              data: 'confirmed'
            }, {
              id: 4,
              data: 'complete'
            }, {
              id: 5,
              data: 'proposed'
            }, {
              id: 6,
              data: 'rejected'
            }, {
              id: 7,
              data: 'partial'
            }];
            dbType = [{
              id: 1,
              data: 'JDE'
            }, {
              id: 2,
              data: 'Oracle'
            }];
            _context2.prev = 2;
            _context2.next = 5;
            return _models.statusEnum.bulkCreate(status);

          case 5:
            _context2.next = 7;
            return _models.dbTypeEnum.bulkCreate(dbType);

          case 7:
            _context2.next = 9;
            return _models.user.create({ username: 'unassigned' });

          case 9:
            _context2.next = 11;
            return _models.user.create({ username: 'admin' });

          case 11:
            _context2.next = 15;
            break;

          case 13:
            _context2.prev = 13;
            _context2.t0 = _context2['catch'](2);

          case 15:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this, [[2, 13]]);
  }));

  return function initiate() {
    return _ref2.apply(this, arguments);
  };
}();

exports.loadData = loadData;

var _excelAsJson = require('excel-as-json');

var _excelAsJson2 = _interopRequireDefault(_excelAsJson);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _models = require('../../models');

var _utilities = require('../../utilities');

var _logger = require('../../logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function loadData() {
  _excelAsJson2.default.processFile('C:/Users/admin/data.xlsx', null, {
    sheet: 1,
    omitEmptyFields: true
  }, function (err, data) {
    data.forEach(function (i, index) {
      if (!_lodash2.default.isEmpty(i)) {
        _models.table.create({ name: i.Summary, status: 1 }).catch(function (err) {
          _logger2.default.error({ err: err, name: i.Summary });
        }).then(function (res) {
          var tableId = res.dataValues.id - 1;
          _excelAsJson2.default.processFile('C:/Users/admin/data.xlsx', null, {
            sheet: index + 1,
            omitEmptyFields: true
          }, function (err2, data2) {
            data2.forEach(function (j) {
              if (_lodash2.default.has(j, 'Oracle Table Name')) {
                _models.sourceTable.create({ tableId: tableId, name: j['Oracle Table Name'], status: 2, dbType: 2 }).catch(function (err) {
                  _logger2.default.error({ err: err, tableId: tableId });
                });
              }

              if (_lodash2.default.has(j, 'JD Edwards Table Names')) {
                _models.sourceTable.create({ tableId: tableId, name: j['JD Edwards Table Names'], status: 2, dbType: 1 }).catch(function (err) {
                  _logger2.default.error({ err: err, tableId: tableId });
                });
              }
              if (!_lodash2.default.isEmpty(j)) {
                _models.field.create({
                  tableId: tableId,
                  name: j['Column Names in Datawarehouse'],
                  oracleStatus: _lodash2.default.has(j, 'Oracle Column Mapping') || _lodash2.default.has(j, 'Where Clause/Lookup Codes') ? 2 : 1,
                  jdeStatus: _lodash2.default.has(j, 'JD Edwards Column Names') || _lodash2.default.has(j, 'JD Edwards Where Clause/Subquery/Lookup codes') ? 2 : 1
                }).catch(function (err) {
                  _logger2.default.error({ err: err, value: j, tableId: tableId });
                }).then(function (res) {
                  var fieldId = res.dataValues.id;
                  createTranslation(j, fieldId);
                });
              }
            });
            // console.log(data2)
          });
        });

        // console.log(i, index)
      }
    });
    // console.log(err, data)
  });
}

function createTranslation(row, fieldId) {
  if (_lodash2.default.has(row, 'Oracle Column Mapping')) {
    _models.translation.create({ fieldId: fieldId, value: row['Oracle Column Mapping'], status: 5, dbType: 2, translationType: 1 }).catch(function (err) {
      _logger2.default.error({ err: err, value: row['Oracle Column Mapping'] });
    });
  }
  if (_lodash2.default.has(row, 'Where Clause/Lookup Codes')) {
    _models.translation.create({ fieldId: fieldId, value: row['Where Clause/Lookup Codes'], status: 5, dbType: 2, translationType: 2 }).catch(function (err) {
      _logger2.default.error({ err: err, value: row['Where Clause/Lookup Codes'] });
    });
  }
  if (_lodash2.default.has(row, 'JD Edwards Column Names')) {
    _models.translation.create({ fieldId: fieldId, value: row['JD Edwards Column Names'], status: 5, dbType: 1, translationType: 1 }).catch(function (err) {
      _logger2.default.error({ err: err, value: row['JD Edwards Column Names'] });
    });
  }
  if (_lodash2.default.has(row, 'JD Edwards Where Clause/Subquery/Lookup codes')) {
    _models.translation.create({ fieldId: fieldId, value: row['JD Edwards Where Clause/Subquery/Lookup codes'], status: 5, dbType: 1, translationType: 2 }).catch(function (err) {
      _logger2.default.error({ err: err, value: row['JD Edwards Where Clause/Subquery/Lookup codes'] });
    });
  }
}