'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFieldByUser = getFieldByUser;
exports.getFieldById = getFieldById;
exports.getFieldByTableId = getFieldByTableId;
exports.saveComment = saveComment;
exports.getFieldComments = getFieldComments;
exports.changeAssigned = changeAssigned;

var _models = require('../../../models');

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getFieldByUser(_ref) {
  var _ref$userId = _ref.userId,
      userId = _ref$userId === undefined ? 0 : _ref$userId;

  return _models.field.findAll({
    where: {
      assignedTo: userId
    },
    include: [{

      model: _models.statusEnum,
      as: 'jdeStatusEnum'
    }, {

      model: _models.statusEnum,
      as: 'oracleStatusEnum'
    }, {
      model: _models.table
    }, {
      model: _models.user
    }, {
      model: _models.translation,
      order: [['timestamp', 'DESC']],
      include: [{
        model: _models.user
      }]
    }]
  });
}
function getFieldById(_ref2) {
  var _ref2$fieldId = _ref2.fieldId,
      fieldId = _ref2$fieldId === undefined ? 0 : _ref2$fieldId;

  return _models.field.findOne({
    where: {
      id: fieldId
    }
  });
}

function getFieldByTableId(_ref3) {
  var _ref3$tableId = _ref3.tableId,
      tableId = _ref3$tableId === undefined ? 0 : _ref3$tableId;

  console.log(123);
  return _models.field.findAll({
    where: {
      tableId: tableId
    },
    include: [{
      model: _models.translation,
      order: [['timestamp', 'DESC']],
      include: [{
        model: _models.user
      }]
    }, {

      model: _models.statusEnum,
      as: 'jdeStatusEnum'
    }, {

      model: _models.statusEnum,
      as: 'oracleStatusEnum'
    }]
  });
}

function saveComment(_ref4) {
  var _ref4$title = _ref4.title,
      title = _ref4$title === undefined ? "" : _ref4$title,
      _ref4$fieldId = _ref4.fieldId,
      fieldId = _ref4$fieldId === undefined ? 0 : _ref4$fieldId,
      _ref4$comment = _ref4.comment,
      comment = _ref4$comment === undefined ? "" : _ref4$comment,
      _ref4$userId = _ref4.userId,
      userId = _ref4$userId === undefined ? 0 : _ref4$userId,
      _ref4$replyId = _ref4.replyId,
      replyId = _ref4$replyId === undefined ? 0 : _ref4$replyId;

  return _models.fieldComment.create({ title: title, fieldId: fieldId, comment: comment, userId: userId, replyId: replyId });
}

function getFieldComments(_ref5) {
  var _ref5$fieldId = _ref5.fieldId,
      fieldId = _ref5$fieldId === undefined ? 0 : _ref5$fieldId;

  return tableComments.findAll({
    where: {
      fieldId: fieldId
    },
    include: [{
      model: _models.user
    }, {
      model: _models.fieldComment
    }]
  });
}

function changeAssigned(_ref6) {
  var _ref6$fieldId = _ref6.fieldId,
      fieldId = _ref6$fieldId === undefined ? 1 : _ref6$fieldId,
      _ref6$userId = _ref6.userId,
      userId = _ref6$userId === undefined ? 1 : _ref6$userId;

  return new _bluebird2.default(function (res, rej) {
    _models.field.update({
      assignedTo: userId
    }, {
      where: {
        id: fieldId
      }
    }).then(function (i) {
      res({ fieldId: fieldId, userId: userId });
    }).catch(function (err) {
      rej(err);
    });
  });
}