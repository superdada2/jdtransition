'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

exports.addTranslation = addTranslation;
exports.getTranslationByFieldId = getTranslationByFieldId;
exports.saveComment = saveComment;
exports.getSourceTables = getSourceTables;
exports.changeStatus = changeStatus;

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _models = require('../../../models');

var _utilities = require('../../../utilities');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function addTranslation(_ref) {
  var _ref$fieldId = _ref.fieldId,
      fieldId = _ref$fieldId === undefined ? 0 : _ref$fieldId,
      _ref$value = _ref.value,
      value = _ref$value === undefined ? "" : _ref$value,
      _ref$status = _ref.status,
      status = _ref$status === undefined ? 1 : _ref$status,
      _ref$assignedTo = _ref.assignedTo,
      assignedTo = _ref$assignedTo === undefined ? 1 : _ref$assignedTo,
      _ref$dbType = _ref.dbType,
      dbType = _ref$dbType === undefined ? 1 : _ref$dbType,
      _ref$translationType = _ref.translationType,
      translationType = _ref$translationType === undefined ? 1 : _ref$translationType;

  _models.translation.create({
    fieldId: fieldId,
    value: value,
    status: 5,
    assignedTo: assignedTo,
    dbType: dbType,
    translationType: translationType
  });
}
function getTranslationByFieldId(_ref2) {
  var _ref2$fieldId = _ref2.fieldId,
      fieldId = _ref2$fieldId === undefined ? 0 : _ref2$fieldId;

  return _models.translation.findAll({
    where: {
      fieldId: fieldId
    },
    include: [{
      model: _models.translationComment,
      include: [{
        model: _models.user
      }, {
        model: _models.translationComment
      }],
      order: [['id', 'DESC']]
    }, {
      model: _models.statusEnum
    }, {
      model: _models.user
    }],
    order: [['id', 'DESC']]
  });
}

function saveComment(_ref3) {
  var _ref3$title = _ref3.title,
      title = _ref3$title === undefined ? "" : _ref3$title,
      _ref3$translationId = _ref3.translationId,
      translationId = _ref3$translationId === undefined ? 0 : _ref3$translationId,
      _ref3$comment = _ref3.comment,
      comment = _ref3$comment === undefined ? "" : _ref3$comment,
      _ref3$userId = _ref3.userId,
      userId = _ref3$userId === undefined ? 0 : _ref3$userId,
      _ref3$replyId = _ref3.replyId,
      replyId = _ref3$replyId === undefined ? 0 : _ref3$replyId;

  return _models.translationComment.create({ title: title, translationId: translationId, comment: comment, userId: userId, replyId: replyId });
}

function getSourceTables(_ref4) {
  var _ref4$tableId = _ref4.tableId,
      tableId = _ref4$tableId === undefined ? 0 : _ref4$tableId;

  return _models.sourceTable.findAll({
    where: {
      tableId: tableId
    },
    include: [{
      model: _models.dbTypeEnum
    }, {
      model: _models.assignedTo
    }]
  });
}

function changeStatus(_ref5) {
  var _this = this;

  var _ref5$translationId = _ref5.translationId,
      translationId = _ref5$translationId === undefined ? 0 : _ref5$translationId,
      _ref5$status = _ref5.status,
      status = _ref5$status === undefined ? 0 : _ref5$status,
      _ref5$fieldId = _ref5.fieldId,
      fieldId = _ref5$fieldId === undefined ? 0 : _ref5$fieldId;

  return new _bluebird2.default(function (res, rej) {
    _models.translation.update({
      status: status
    }, {
      where: {
        id: translationId
      }
    }).catch(function (err) {
      rej(err);
    }).then(function () {
      var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(i) {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:

                (0, _utilities.updateField)(fieldId, 1);
                res({ translationId: translationId, fieldId: fieldId, status: status });

              case 2:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }));

      return function (_x) {
        return _ref6.apply(this, arguments);
      };
    }());
  });
}