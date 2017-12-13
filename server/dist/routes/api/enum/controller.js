'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getClass = getClass;
exports.getCountry = getCountry;
exports.addClass = addClass;
exports.updateClass = updateClass;
exports.deleteClass = deleteClass;
exports.getCurrency = getCurrency;
exports.addCurrency = addCurrency;
exports.updateCurrency = updateCurrency;
exports.deleteCurrency = deleteCurrency;
exports.getProduct = getProduct;
exports.addProduct = addProduct;
exports.updateProduct = updateProduct;
exports.deleteProduct = deleteProduct;
exports.getRevenueType = getRevenueType;
exports.addRevenueType = addRevenueType;
exports.updateRevenueType = updateRevenueType;
exports.deleteRevenueType = deleteRevenueType;
exports.getStatus = getStatus;
exports.addStatus = addStatus;
exports.updateStatus = updateStatus;
exports.deleteStatus = deleteStatus;
exports.getSubscription = getSubscription;
exports.addSubscription = addSubscription;
exports.updateSubscription = updateSubscription;
exports.deleteSubscription = deleteSubscription;
exports.getType = getType;
exports.addType = addType;
exports.updateType = updateType;
exports.deleteType = deleteType;
exports.getMonth = getMonth;
exports.update = update;
exports.deleteEnum = deleteEnum;
exports.add = add;

var _models = require('../../../models');

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getClass() {
  return _models.class_enum.findAll();
}

function getCountry() {
  return _models.country_enum.findAll();
}

function addClass(_ref) {
  var _ref$data = _ref.data,
      data = _ref$data === undefined ? '' : _ref$data;

  return _models.class_enum.create({
    data: data
  });
}

function updateClass(_ref2) {
  var _ref2$id = _ref2.id,
      id = _ref2$id === undefined ? 0 : _ref2$id,
      _ref2$data = _ref2.data,
      data = _ref2$data === undefined ? "updated" : _ref2$data;

  return _models.class_enum.update({
    data: data
  }, {
    where: {
      id: id
    }
  });
}

function deleteClass(_ref3) {
  var _ref3$id = _ref3.id,
      id = _ref3$id === undefined ? 0 : _ref3$id;

  return _models.class_enum.destroy({
    where: {
      id: id
    }
  });
}

function getCurrency() {
  return _models.currency_enum.findAll();
}

function addCurrency(_ref4) {
  var _ref4$data = _ref4.data,
      data = _ref4$data === undefined ? '' : _ref4$data;

  return _models.currency_enum.create({
    data: data
  });
}

function updateCurrency(_ref5) {
  var _ref5$id = _ref5.id,
      id = _ref5$id === undefined ? 0 : _ref5$id,
      _ref5$data = _ref5.data,
      data = _ref5$data === undefined ? "updated" : _ref5$data;

  return _models.currency_enum.update({
    data: data
  }, {
    where: {
      id: id
    }
  });
}

function deleteCurrency(_ref6) {
  var _ref6$id = _ref6.id,
      id = _ref6$id === undefined ? 0 : _ref6$id;

  return _models.currency_enum.destroy({
    where: {
      id: id
    }
  });
}

function getProduct() {
  return _models.product_enum.findAll();
}

function addProduct(_ref7) {
  var _ref7$data = _ref7.data,
      data = _ref7$data === undefined ? '' : _ref7$data;

  return _models.product_enum.create({
    data: data
  });
}

function updateProduct(_ref8) {
  var _ref8$id = _ref8.id,
      id = _ref8$id === undefined ? 0 : _ref8$id,
      _ref8$data = _ref8.data,
      data = _ref8$data === undefined ? "updated" : _ref8$data;

  return _models.product_enum.update({
    data: data
  }, {
    where: {
      id: id
    }
  });
}

function deleteProduct(_ref9) {
  var _ref9$id = _ref9.id,
      id = _ref9$id === undefined ? 0 : _ref9$id;

  return _models.product_enum.destroy({
    where: {
      id: id
    }
  });
}

function getRevenueType() {
  return _models.revenue_type_enum.findAll();
}

function addRevenueType(_ref10) {
  var _ref10$data = _ref10.data,
      data = _ref10$data === undefined ? '' : _ref10$data;

  return _models.revenue_type_enum.create({
    data: data
  });
}

function updateRevenueType(_ref11) {
  var _ref11$id = _ref11.id,
      id = _ref11$id === undefined ? 0 : _ref11$id,
      _ref11$data = _ref11.data,
      data = _ref11$data === undefined ? "updated" : _ref11$data;

  return _models.revenue_type_enum.update({
    data: data
  }, {
    where: {
      id: id
    }
  });
}

function deleteRevenueType(_ref12) {
  var _ref12$id = _ref12.id,
      id = _ref12$id === undefined ? 0 : _ref12$id;

  return _models.revenue_type_enum.destroy({
    where: {
      id: id
    }
  });
}

function getStatus() {
  return _models.status_enum.findAll();
}

function addStatus(_ref13) {
  var _ref13$data = _ref13.data,
      data = _ref13$data === undefined ? '' : _ref13$data;

  return _models.status_enum.create({
    data: data
  });
}

function updateStatus(_ref14) {
  var _ref14$id = _ref14.id,
      id = _ref14$id === undefined ? 0 : _ref14$id,
      _ref14$data = _ref14.data,
      data = _ref14$data === undefined ? "updated" : _ref14$data;

  return _models.status_enum.update({
    data: data
  }, {
    where: {
      id: id
    }
  });
}

function deleteStatus(_ref15) {
  var _ref15$id = _ref15.id,
      id = _ref15$id === undefined ? 0 : _ref15$id;

  return _models.status_enum.destroy({
    where: {
      id: id
    }
  });
}

function getSubscription() {
  return _models.subscription_enum.findAll();
}

function addSubscription(_ref16) {
  var _ref16$data = _ref16.data,
      data = _ref16$data === undefined ? '' : _ref16$data;

  return _models.subscription_enum.create({
    data: data
  });
}

function updateSubscription(_ref17) {
  var _ref17$id = _ref17.id,
      id = _ref17$id === undefined ? 0 : _ref17$id,
      _ref17$data = _ref17.data,
      data = _ref17$data === undefined ? "updated" : _ref17$data;

  return _models.subscription_enum.update({
    data: data
  }, {
    where: {
      id: id
    }
  });
}

function deleteSubscription(_ref18) {
  var _ref18$id = _ref18.id,
      id = _ref18$id === undefined ? 0 : _ref18$id;

  return _models.subscription_enum.destroy({
    where: {
      id: id
    }
  });
}

function getType() {
  return _models.type_enum.findAll();
}

function addType(_ref19) {
  var _ref19$data = _ref19.data,
      data = _ref19$data === undefined ? '' : _ref19$data;

  return _models.type_enum.create({
    data: data
  });
}

function updateType(_ref20) {
  var _ref20$id = _ref20.id,
      id = _ref20$id === undefined ? 0 : _ref20$id,
      _ref20$data = _ref20.data,
      data = _ref20$data === undefined ? "updated" : _ref20$data;

  return _models.type_enum.update({
    data: data
  }, {
    where: {
      id: id
    }
  });
}

function deleteType(_ref21) {
  var _ref21$id = _ref21.id,
      id = _ref21$id === undefined ? 0 : _ref21$id;

  return _models.type_enum.destroy({
    where: {
      id: id
    }
  });
}

function getMonth() {
  return _models.month_enum.findAll();
}

function update(_ref22) {
  var _ref22$type = _ref22.type,
      type = _ref22$type === undefined ? 'class' : _ref22$type,
      _ref22$id = _ref22.id,
      id = _ref22$id === undefined ? 0 : _ref22$id,
      _ref22$data = _ref22.data,
      data = _ref22$data === undefined ? 'Updated' : _ref22$data;

  switch (type) {
    case 'class':
      return updateClass({
        id: id,
        data: data
      });
      break;
    case 'currency':
      return updateCurrency({
        id: id,
        data: data
      });
      break;
    case 'product':
      return updateProduct({
        id: id,
        data: data
      });
      break;
    case 'revenueType':
      return updateRevenueType({
        id: id,
        data: data
      });
      break;
    case 'status':
      return updateStatus({
        id: id,
        data: data
      });
      break;
    case 'subscription':
      return updateSubscription({
        id: id,
        data: data
      });
      break;
    case 'type':
      return updateType({
        id: id,
        data: data
      });
      break;
  }
}

function deleteEnum(_ref23) {
  var _ref23$type = _ref23.type,
      type = _ref23$type === undefined ? 'class' : _ref23$type,
      _ref23$id = _ref23.id,
      id = _ref23$id === undefined ? 0 : _ref23$id,
      _ref23$data = _ref23.data,
      data = _ref23$data === undefined ? 'Updated' : _ref23$data;

  switch (type) {
    case 'class':
      return deleteClass({
        id: id
      });
      break;
    case 'currency':
      return deleteCurrency({
        id: id
      });
      break;
    case 'product':
      return deleteProduct({
        id: id
      });
      break;
    case 'revenueType':
      return deleteRevenueType({
        id: id
      });
      break;
    case 'status':
      return deleteStatus({
        id: id
      });
      break;
    case 'subscription':
      return deleteSubscription({
        id: id
      });
      break;
    case 'type':
      return deleteType({
        id: id
      });
      break;
  }
}

function add(_ref24) {
  var _ref24$type = _ref24.type,
      type = _ref24$type === undefined ? 'class' : _ref24$type,
      _ref24$data = _ref24.data,
      data = _ref24$data === undefined ? 'Updated' : _ref24$data;

  switch (type) {
    case 'class':
      return addClass({
        data: data
      });
      break;
    case 'currency':
      return addCurrency({
        data: data
      });
      break;
    case 'product':
      return addProduct({
        data: data
      });
      break;
    case 'revenueType':
      return addRevenueType({
        data: data
      });
      break;
    case 'status':
      return addStatus({
        data: data
      });
      break;
    case 'subscription':
      return addSubscription({
        data: data
      });
      break;
    case 'type':
      return addType({
        data: data
      });
      break;
  }
}