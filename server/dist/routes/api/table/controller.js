'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTables = getTables;
exports.getTableComments = getTableComments;
exports.saveComment = saveComment;
exports.changeAssigned = changeAssigned;

var _models = require('../../../models');

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getTables() {
  return _models.table.findAll({
    include: [{
      model: _models.user
    }, {
      model: _models.statusEnum
    }]
  });
}

function getTableComments(_ref) {
  var _ref$tableId = _ref.tableId,
      tableId = _ref$tableId === undefined ? 0 : _ref$tableId;

  return _models.tableComment.findAll({
    where: {
      tableId: tableId
    },
    include: [{
      model: _models.user
    }, {
      model: _models.tableComment,
      order: [['id', 'DESC']]
    }],
    order: [['id', 'DESC']]
  });
}

function saveComment(_ref2) {
  var _ref2$title = _ref2.title,
      title = _ref2$title === undefined ? "" : _ref2$title,
      _ref2$tableId = _ref2.tableId,
      tableId = _ref2$tableId === undefined ? 0 : _ref2$tableId,
      _ref2$comment = _ref2.comment,
      comment = _ref2$comment === undefined ? "" : _ref2$comment,
      _ref2$userId = _ref2.userId,
      userId = _ref2$userId === undefined ? 0 : _ref2$userId,
      _ref2$replyId = _ref2.replyId,
      replyId = _ref2$replyId === undefined ? 0 : _ref2$replyId;

  return _models.tableComment.create({ title: title, tableId: tableId, comment: comment, userId: userId, replyId: replyId });
}

function changeAssigned(_ref3) {
  var _ref3$tableId = _ref3.tableId,
      tableId = _ref3$tableId === undefined ? 0 : _ref3$tableId,
      _ref3$userId = _ref3.userId,
      userId = _ref3$userId === undefined ? 1 : _ref3$userId;

  return new _bluebird2.default(function (res, rej) {
    _models.table.update({
      assignedTo: userId
    }, {
      where: {
        id: tableId
      }
    }).then(function (i) {
      res({ tableId: tableId, userId: userId });
    }).catch(function (err) {
      rej(err);
    });
  });
}