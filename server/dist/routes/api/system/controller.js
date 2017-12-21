'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUsers = getUsers;
exports.getStatusEnum = getStatusEnum;

var _models = require('../../../models');

function getUsers() {
  return _models.user.findAll();
}
function getStatusEnum() {
  return _models.statusEnum.findAll();
}