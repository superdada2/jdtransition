'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BillByCustomer = BillByCustomer;
exports.BillByCurrency = BillByCurrency;
exports.BillByClass = BillByClass;
exports.BillByProduct = BillByProduct;
exports.BillByRevenueType = BillByRevenueType;
exports.BillByStatus = BillByStatus;
exports.BillByType = BillByType;
exports.BillByCountry = BillByCountry;
exports.BillByMonthInvoiced = BillByMonthInvoiced;
exports.BillByBillingMonth = BillByBillingMonth;
exports.RecognitionStartMonth = RecognitionStartMonth;

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _models = require('../../../models');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function BillByCustomer(_ref) {
  var _ref$filter = _ref.filter,
      filter = _ref$filter === undefined ? 'active' : _ref$filter,
      _ref$startMonth = _ref.startMonth,
      startMonth = _ref$startMonth === undefined ? new Date(2015, 1) : _ref$startMonth,
      _ref$endMonth = _ref.endMonth,
      endMonth = _ref$endMonth === undefined ? new Date() : _ref$endMonth;

  switch (filter) {
    case "active":
      return _models.invoice.findAll({
        attributes: ["customerName", [_models.sequelize.fn('abs', _models.sequelize.fn('sum', _models.sequelize.col('invoiceAmountUSD'))), 'totalInvoice'], [_models.sequelize.fn('count', _models.sequelize.col('invoiceAmountUSD')), 'numberInvoice']],
        group: ['customerName'],

        where: {
          recognitionStartMonth: {
            $between: [_models.sequelize.fn('DATE_SUB', _models.sequelize.fn('NOW'), _models.sequelize.literal('INTERVAL ' + _models.sequelize.col('invoice.lengthMonth').col + ' MONTH')), new Date(3000, 1)]
          },
          status: {
            $ne: 3
          }
        }
      });
      break;
    case "total":
      return _models.invoice.findAll({
        attributes: ["customerName", [_models.sequelize.fn('abs', _models.sequelize.fn('sum', _models.sequelize.col('invoiceAmountUSD'))), 'totalInvoice'], [_models.sequelize.fn('count', _models.sequelize.col('invoiceAmountUSD')), 'numberInvoice']],
        group: ['customerName']

      });
      break;
    case "billingMonth":
      return _models.invoice.findAll({
        attributes: ["customerName", [_models.sequelize.fn('abs', _models.sequelize.fn('sum', _models.sequelize.col('invoiceAmountUSD'))), 'totalInvoice'], [_models.sequelize.fn('count', _models.sequelize.col('invoiceAmountUSD')), 'numberInvoice']],
        group: ['customerName'],
        where: {
          billingMonth: {
            $between: [new Date(startMonth), new Date(endMonth)]
          }
        }
      });
      break;
    case "recognitionStartMonth":
      return _models.invoice.findAll({
        attributes: ["customerName", [_models.sequelize.fn('abs', _models.sequelize.fn('sum', _models.sequelize.col('invoiceAmountUSD'))), 'totalInvoice'], [_models.sequelize.fn('count', _models.sequelize.col('invoiceAmountUSD')), 'numberInvoice']],
        group: ['customerName'],
        where: {
          recognitionStartMonth: {
            $between: [new Date(startMonth), new Date(endMonth)]
          }
        }
      });
      break;
  }
}

function BillByCurrency(_ref2) {
  var _ref2$filter = _ref2.filter,
      filter = _ref2$filter === undefined ? 'active' : _ref2$filter,
      _ref2$startMonth = _ref2.startMonth,
      startMonth = _ref2$startMonth === undefined ? new Date(2015, 1) : _ref2$startMonth,
      _ref2$endMonth = _ref2.endMonth,
      endMonth = _ref2$endMonth === undefined ? new Date() : _ref2$endMonth;

  switch (filter) {
    case "active":
      return _models.invoice.findAll({
        attributes: ["currency", [_models.sequelize.fn('abs', _models.sequelize.fn('sum', _models.sequelize.col('invoiceAmountUSD'))), 'totalInvoice'], [_models.sequelize.fn('count', _models.sequelize.col('invoiceAmountUSD')), 'numberInvoice']],
        group: ['currency'],
        include: [{
          model: _models.currency_enum
        }],
        where: {
          recognitionStartMonth: {
            $between: [_models.sequelize.fn('DATE_SUB', _models.sequelize.fn('NOW'), _models.sequelize.literal('INTERVAL ' + _models.sequelize.col('invoice.lengthMonth').col + ' MONTH')), new Date(3000, 1)]
          },
          status: {
            $ne: 3
          }
        }
      });
      break;
    case "total":
      return _models.invoice.findAll({
        attributes: ["currency", [_models.sequelize.fn('abs', _models.sequelize.fn('sum', _models.sequelize.col('invoiceAmountUSD'))), 'totalInvoice'], [_models.sequelize.fn('count', _models.sequelize.col('invoiceAmountUSD')), 'numberInvoice']],
        group: ['currency'],
        include: [{
          model: _models.currency_enum
        }]
      });
      break;
    case "billingMonth":
      return _models.invoice.findAll({
        attributes: ["currency", [_models.sequelize.fn('abs', _models.sequelize.fn('sum', _models.sequelize.col('invoiceAmountUSD'))), 'totalInvoice'], [_models.sequelize.fn('count', _models.sequelize.col('invoiceAmountUSD')), 'numberInvoice']],
        group: ['currency'],
        include: [{
          model: _models.currency_enum
        }],
        where: {
          billingMonth: {
            $between: [new Date(startMonth), new Date(endMonth)]
          }
        }
      });
      break;
    case "recognitionStartMonth":
      return _models.invoice.findAll({
        attributes: ["currency", [_models.sequelize.fn('abs', _models.sequelize.fn('sum', _models.sequelize.col('invoiceAmountUSD'))), 'totalInvoice'], [_models.sequelize.fn('count', _models.sequelize.col('invoiceAmountUSD')), 'numberInvoice']],
        group: ['currency'],
        include: [{
          model: _models.currency_enum
        }],
        where: {
          recognitionStartMonth: {
            $between: [new Date(startMonth), new Date(endMonth)]
          }
        }
      });
      break;
  }
}

function BillByClass(_ref3) {
  var _ref3$filter = _ref3.filter,
      filter = _ref3$filter === undefined ? 'active' : _ref3$filter,
      _ref3$startMonth = _ref3.startMonth,
      startMonth = _ref3$startMonth === undefined ? new Date(2015, 1) : _ref3$startMonth,
      _ref3$endMonth = _ref3.endMonth,
      endMonth = _ref3$endMonth === undefined ? new Date() : _ref3$endMonth;

  switch (filter) {
    case "active":
      return _models.invoice.findAll({
        attributes: ["class", [_models.sequelize.fn('abs', _models.sequelize.fn('sum', _models.sequelize.col('invoiceAmountUSD'))), 'totalInvoice'], [_models.sequelize.fn('count', _models.sequelize.col('invoiceAmountUSD')), 'numberInvoice']],
        group: ['class'],
        include: [{
          model: _models.class_enum
        }],
        where: {
          recognitionStartMonth: {
            $between: [_models.sequelize.fn('DATE_SUB', _models.sequelize.fn('NOW'), _models.sequelize.literal('INTERVAL ' + _models.sequelize.col('invoice.lengthMonth').col + ' MONTH')), new Date(3000, 1)]
          },
          status: {
            $ne: 3
          }
        }
      });
      break;
    case "total":
      return _models.invoice.findAll({
        attributes: ["class", [_models.sequelize.fn('abs', _models.sequelize.fn('sum', _models.sequelize.col('invoiceAmountUSD'))), 'totalInvoice'], [_models.sequelize.fn('count', _models.sequelize.col('invoiceAmountUSD')), 'numberInvoice']],
        group: ['class'],
        include: [{
          model: _models.class_enum
        }]
      });
      break;
    case "billingMonth":
      return _models.invoice.findAll({
        attributes: ["class", [_models.sequelize.fn('abs', _models.sequelize.fn('sum', _models.sequelize.col('invoiceAmountUSD'))), 'totalInvoice'], [_models.sequelize.fn('count', _models.sequelize.col('invoiceAmountUSD')), 'numberInvoice']],
        group: ['class'],
        include: [{
          model: _models.class_enum
        }],
        where: {
          billingMonth: {
            $between: [new Date(startMonth), new Date(endMonth)]
          }
        }
      });
      break;
    case "recognitionStartMonth":
      return _models.invoice.findAll({
        attributes: ["class", [_models.sequelize.fn('abs', _models.sequelize.fn('sum', _models.sequelize.col('invoiceAmountUSD'))), 'totalInvoice'], [_models.sequelize.fn('count', _models.sequelize.col('invoiceAmountUSD')), 'numberInvoice']],
        group: ['class'],
        include: [{
          model: _models.class_enum
        }],
        where: {
          recognitionStartMonth: {
            $between: [new Date(startMonth), new Date(endMonth)]
          }
        }
      });
      break;
  }
}

function BillByProduct(_ref4) {
  var _ref4$filter = _ref4.filter,
      filter = _ref4$filter === undefined ? 'active' : _ref4$filter,
      _ref4$startMonth = _ref4.startMonth,
      startMonth = _ref4$startMonth === undefined ? new Date(2015, 1) : _ref4$startMonth,
      _ref4$endMonth = _ref4.endMonth,
      endMonth = _ref4$endMonth === undefined ? new Date() : _ref4$endMonth;

  switch (filter) {
    case "active":
      return _models.invoice.findAll({
        attributes: ["product", [_models.sequelize.fn('abs', _models.sequelize.fn('sum', _models.sequelize.col('invoiceAmountUSD'))), 'totalInvoice'], [_models.sequelize.fn('count', _models.sequelize.col('invoiceAmountUSD')), 'numberInvoice']],
        group: ['product'],
        include: [{
          model: _models.product_enum
        }],
        where: {
          recognitionStartMonth: {
            $between: [_models.sequelize.fn('DATE_SUB', _models.sequelize.fn('NOW'), _models.sequelize.literal('INTERVAL ' + _models.sequelize.col('invoice.lengthMonth').col + ' MONTH')), new Date(3000, 1)]
          },
          status: {
            $ne: 3
          }
        }
      });
      break;
    case "total":
      return _models.invoice.findAll({
        attributes: ["product", [_models.sequelize.fn('abs', _models.sequelize.fn('sum', _models.sequelize.col('invoiceAmountUSD'))), 'totalInvoice'], [_models.sequelize.fn('count', _models.sequelize.col('invoiceAmountUSD')), 'numberInvoice']],
        group: ['product'],
        include: [{
          model: _models.product_enum
        }]
      });
      break;
    case "billingMonth":
      return _models.invoice.findAll({
        attributes: ["product", [_models.sequelize.fn('abs', _models.sequelize.fn('sum', _models.sequelize.col('invoiceAmountUSD'))), 'totalInvoice'], [_models.sequelize.fn('count', _models.sequelize.col('invoiceAmountUSD')), 'numberInvoice']],
        group: ['product'],
        include: [{
          model: _models.product_enum
        }],
        where: {
          billingMonth: {
            $between: [new Date(startMonth), new Date(endMonth)]
          }
        }
      });
      break;
    case "recognitionStartMonth":
      return _models.invoice.findAll({
        attributes: ["product", [_models.sequelize.fn('abs', _models.sequelize.fn('sum', _models.sequelize.col('invoiceAmountUSD'))), 'totalInvoice'], [_models.sequelize.fn('count', _models.sequelize.col('invoiceAmountUSD')), 'numberInvoice']],
        group: ['product'],
        include: [{
          model: _models.product_enum
        }],
        where: {
          recognitionStartMonth: {
            $between: [new Date(startMonth), new Date(endMonth)]
          }
        }
      });
      break;
  }
}

function BillByRevenueType(_ref5) {
  var _ref5$filter = _ref5.filter,
      filter = _ref5$filter === undefined ? 'active' : _ref5$filter,
      _ref5$startMonth = _ref5.startMonth,
      startMonth = _ref5$startMonth === undefined ? new Date(2015, 1) : _ref5$startMonth,
      _ref5$endMonth = _ref5.endMonth,
      endMonth = _ref5$endMonth === undefined ? new Date() : _ref5$endMonth;

  switch (filter) {
    case "active":
      return _models.invoice.findAll({
        attributes: ["revenueType", [_models.sequelize.fn('abs', _models.sequelize.fn('sum', _models.sequelize.col('invoiceAmountUSD'))), 'totalInvoice'], [_models.sequelize.fn('count', _models.sequelize.col('invoiceAmountUSD')), 'numberInvoice']],
        group: ['revenueType'],
        include: [{
          model: _models.revenue_type_enum
        }],
        where: {
          recognitionStartMonth: {
            $between: [_models.sequelize.fn('DATE_SUB', _models.sequelize.fn('NOW'), _models.sequelize.literal('INTERVAL ' + _models.sequelize.col('invoice.lengthMonth').col + ' MONTH')), new Date(3000, 1)]
          },
          status: {
            $ne: 3
          }
        }
      });
      break;
    case "total":
      return _models.invoice.findAll({
        attributes: ["revenueType", [_models.sequelize.fn('abs', _models.sequelize.fn('sum', _models.sequelize.col('invoiceAmountUSD'))), 'totalInvoice'], [_models.sequelize.fn('count', _models.sequelize.col('invoiceAmountUSD')), 'numberInvoice']],
        group: ['revenueType'],
        include: [{
          model: _models.revenue_type_enum
        }]
      });
      break;
    case "billingMonth":
      return _models.invoice.findAll({
        attributes: ["revenueType", [_models.sequelize.fn('abs', _models.sequelize.fn('sum', _models.sequelize.col('invoiceAmountUSD'))), 'totalInvoice'], [_models.sequelize.fn('count', _models.sequelize.col('invoiceAmountUSD')), 'numberInvoice']],
        group: ['revenueType'],
        include: [{
          model: _models.revenue_type_enum
        }],
        where: {
          billingMonth: {
            $between: [new Date(startMonth), new Date(endMonth)]
          }
        }
      });
      break;
    case "recognitionStartMonth":
      return _models.invoice.findAll({
        attributes: ["revenueType", [_models.sequelize.fn('abs', _models.sequelize.fn('sum', _models.sequelize.col('invoiceAmountUSD'))), 'totalInvoice'], [_models.sequelize.fn('count', _models.sequelize.col('invoiceAmountUSD')), 'numberInvoice']],
        group: ['revenueType'],
        include: [{
          model: _models.revenue_type_enum
        }],
        where: {
          recognitionStartMonth: {
            $between: [new Date(startMonth), new Date(endMonth)]
          }
        }
      });
      break;
  }
}

function BillByStatus(_ref6) {
  var _ref6$filter = _ref6.filter,
      filter = _ref6$filter === undefined ? 'active' : _ref6$filter,
      _ref6$startMonth = _ref6.startMonth,
      startMonth = _ref6$startMonth === undefined ? new Date(2015, 1) : _ref6$startMonth,
      _ref6$endMonth = _ref6.endMonth,
      endMonth = _ref6$endMonth === undefined ? new Date() : _ref6$endMonth;

  switch (filter) {
    case "active":
      return _models.invoice.findAll({
        attributes: ["status", [_models.sequelize.fn('abs', _models.sequelize.fn('sum', _models.sequelize.col('invoiceAmountUSD'))), 'totalInvoice'], [_models.sequelize.fn('count', _models.sequelize.col('invoiceAmountUSD')), 'numberInvoice']],
        group: ['status'],
        include: [{
          model: _models.status_enum
        }],
        where: {
          recognitionStartMonth: {
            $between: [_models.sequelize.fn('DATE_SUB', _models.sequelize.fn('NOW'), _models.sequelize.literal('INTERVAL ' + _models.sequelize.col('invoice.lengthMonth').col + ' MONTH')), new Date(3000, 1)]
          },
          status: {
            $ne: 3
          }
        }
      });
      break;
    case "total":
      return _models.invoice.findAll({
        attributes: ["status", [_models.sequelize.fn('abs', _models.sequelize.fn('sum', _models.sequelize.col('invoiceAmountUSD'))), 'totalInvoice'], [_models.sequelize.fn('count', _models.sequelize.col('invoiceAmountUSD')), 'numberInvoice']],
        group: ['status'],
        include: [{
          model: _models.status_enum
        }]
      });
      break;
    case "billingMonth":
      return _models.invoice.findAll({
        attributes: ["status", [_models.sequelize.fn('abs', _models.sequelize.fn('sum', _models.sequelize.col('invoiceAmountUSD'))), 'totalInvoice'], [_models.sequelize.fn('count', _models.sequelize.col('invoiceAmountUSD')), 'numberInvoice']],
        group: ['status'],
        include: [{
          model: _models.status_enum
        }],
        where: {
          billingMonth: {
            $between: [new Date(startMonth), new Date(endMonth)]
          }
        }
      });
      break;
    case "recognitionStartMonth":
      return _models.invoice.findAll({
        attributes: ["status", [_models.sequelize.fn('abs', _models.sequelize.fn('sum', _models.sequelize.col('invoiceAmountUSD'))), 'totalInvoice'], [_models.sequelize.fn('count', _models.sequelize.col('invoiceAmountUSD')), 'numberInvoice']],
        group: ['status'],
        include: [{
          model: _models.status_enum
        }],
        where: {
          recognitionStartMonth: {
            $between: [new Date(startMonth), new Date(endMonth)]
          }
        }
      });
      break;
  }
}

function BillByType(_ref7) {
  var _ref7$filter = _ref7.filter,
      filter = _ref7$filter === undefined ? 'active' : _ref7$filter,
      _ref7$startMonth = _ref7.startMonth,
      startMonth = _ref7$startMonth === undefined ? new Date(2015, 1) : _ref7$startMonth,
      _ref7$endMonth = _ref7.endMonth,
      endMonth = _ref7$endMonth === undefined ? new Date() : _ref7$endMonth;

  switch (filter) {
    case "active":
      return _models.invoice.findAll({
        attributes: ["type", [_models.sequelize.fn('abs', _models.sequelize.fn('sum', _models.sequelize.col('invoiceAmountUSD'))), 'totalInvoice'], [_models.sequelize.fn('count', _models.sequelize.col('invoiceAmountUSD')), 'numberInvoice']],
        group: ['type'],
        include: [{
          model: _models.type_enum
        }],
        where: {
          recognitionStartMonth: {
            $between: [_models.sequelize.fn('DATE_SUB', _models.sequelize.fn('NOW'), _models.sequelize.literal('INTERVAL ' + _models.sequelize.col('invoice.lengthMonth').col + ' MONTH')), new Date(3000, 1)]
          },
          status: {
            $ne: 3
          }
        }
      });
      break;
    case "total":
      return _models.invoice.findAll({
        attributes: ["type", [_models.sequelize.fn('abs', _models.sequelize.fn('sum', _models.sequelize.col('invoiceAmountUSD'))), 'totalInvoice'], [_models.sequelize.fn('count', _models.sequelize.col('invoiceAmountUSD')), 'numberInvoice']],
        group: ['type'],
        include: [{
          model: _models.type_enum
        }]
      });
      break;
    case "billingMonth":
      return _models.invoice.findAll({
        attributes: ["type", [_models.sequelize.fn('abs', _models.sequelize.fn('sum', _models.sequelize.col('invoiceAmountUSD'))), 'totalInvoice'], [_models.sequelize.fn('count', _models.sequelize.col('invoiceAmountUSD')), 'numberInvoice']],
        group: ['type'],
        include: [{
          model: _models.type_enum
        }],
        where: {
          billingMonth: {
            $between: [new Date(startMonth), new Date(endMonth)]
          }
        }
      });
      break;
    case "recognitionStartMonth":
      return _models.invoice.findAll({
        attributes: ["type", [_models.sequelize.fn('abs', _models.sequelize.fn('sum', _models.sequelize.col('invoiceAmountUSD'))), 'totalInvoice'], [_models.sequelize.fn('count', _models.sequelize.col('invoiceAmountUSD')), 'numberInvoice']],
        group: ['type'],
        include: [{
          model: _models.type_enum
        }],
        where: {
          recognitionStartMonth: {
            $between: [new Date(startMonth), new Date(endMonth)]
          }
        }
      });
      break;
  }
}

function BillByCountry(_ref8) {
  var _ref8$filter = _ref8.filter,
      filter = _ref8$filter === undefined ? 'active' : _ref8$filter,
      _ref8$startMonth = _ref8.startMonth,
      startMonth = _ref8$startMonth === undefined ? new Date(2015, 1) : _ref8$startMonth,
      _ref8$endMonth = _ref8.endMonth,
      endMonth = _ref8$endMonth === undefined ? new Date() : _ref8$endMonth;

  switch (filter) {
    case "active":
      return _models.invoice.findAll({
        attributes: ["country", [_models.sequelize.fn('abs', _models.sequelize.fn('sum', _models.sequelize.col('invoiceAmountUSD'))), 'totalInvoice'], [_models.sequelize.fn('count', _models.sequelize.col('invoiceAmountUSD')), 'numberInvoice']],
        group: ['country'],
        include: [{
          model: _models.country_enum
        }],
        where: {
          recognitionStartMonth: {
            $between: [_models.sequelize.fn('DATE_SUB', _models.sequelize.fn('NOW'), _models.sequelize.literal('INTERVAL ' + _models.sequelize.col('invoice.lengthMonth').col + ' MONTH')), new Date(3000, 1)]
          },
          status: {
            $ne: 3
          }
        }
      });
      break;
    case "total":
      return _models.invoice.findAll({
        attributes: ["country", [_models.sequelize.fn('abs', _models.sequelize.fn('sum', _models.sequelize.col('invoiceAmountUSD'))), 'totalInvoice'], [_models.sequelize.fn('count', _models.sequelize.col('invoiceAmountUSD')), 'numberInvoice']],
        group: ['country'],
        include: [{
          model: _models.country_enum
        }]
      });
      break;
    case "billingMonth":
      return _models.invoice.findAll({
        attributes: ["country", [_models.sequelize.fn('abs', _models.sequelize.fn('sum', _models.sequelize.col('invoiceAmountUSD'))), 'totalInvoice'], [_models.sequelize.fn('count', _models.sequelize.col('invoiceAmountUSD')), 'numberInvoice']],
        group: ['country'],
        include: [{
          model: _models.country_enum
        }],
        where: {
          billingMonth: {
            $between: [new Date(startMonth), new Date(endMonth)]
          }
        }
      });
      break;
    case "recognitionStartMonth":
      return _models.invoice.findAll({
        attributes: ["country", [_models.sequelize.fn('abs', _models.sequelize.fn('sum', _models.sequelize.col('invoiceAmountUSD'))), 'totalInvoice'], [_models.sequelize.fn('count', _models.sequelize.col('invoiceAmountUSD')), 'numberInvoice']],
        group: ['country'],
        include: [{
          model: _models.country_enum
        }],
        where: {
          recognitionStartMonth: {
            $between: [new Date(startMonth), new Date(endMonth)]
          }
        }
      });
      break;
  }
}

function BillByMonthInvoiced() {
  return _models.invoice.findAll({
    attributes: ["customerName", [_models.sequelize.fn('abs', _models.sequelize.fn('sum', _models.sequelize.col('invoiceAmountUSD'))), 'totalInvoice']],
    group: ['customerName']

  });
}
function BillByBillingMonth(_ref9) {
  var _ref9$startM = _ref9.startM,
      startM = _ref9$startM === undefined ? new Date(2015, 1) : _ref9$startM,
      _ref9$endM = _ref9.endM,
      endM = _ref9$endM === undefined ? new Date() : _ref9$endM;

  var Op = _models.Sequelize.Op;
  return _models.invoice.findAll({
    attributes: ["billingMonth", [_models.sequelize.fn('abs', _models.sequelize.fn('sum', _models.sequelize.col('invoiceAmountUSD'))), 'totalInvoice'], [_models.sequelize.fn('count', _models.sequelize.col('invoiceAmountUSD')), 'numberInvoice']],
    group: ['billingMonth'],
    where: {
      billingMonth: {
        $between: [startM, endM]
      }
    }
  });
}

function RecognitionStartMonth() {
  return _models.invoice.findAll({
    attributes: ["recognitionStartMonth", [_models.sequelize.fn('abs', _models.sequelize.fn('sum', _models.sequelize.col('invoiceAmountUSD'))), 'totalInvoice']],
    group: ['recognitionStartMonth']

  });
}