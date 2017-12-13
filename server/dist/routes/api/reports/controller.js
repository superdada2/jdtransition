'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeleteInvoice = exports.loadData = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var loadData = exports.loadData = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
    var i;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            i = 0;

          case 1:
            if (!(i < 100)) {
              _context.next = 7;
              break;
            }

            _context.next = 4;
            return loadData2();

          case 4:
            i++;
            _context.next = 1;
            break;

          case 7:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function loadData() {
    return _ref.apply(this, arguments);
  };
}();

var DeleteInvoice = exports.DeleteInvoice = function () {
  var _ref10 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7(_ref11) {
    var _this4 = this;

    var _ref11$id = _ref11.id,
        id = _ref11$id === undefined ? 0 : _ref11$id;
    var username = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    return _regenerator2.default.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            return _context7.abrupt('return', new _bluebird2.default(function () {
              var _ref12 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(res, rej) {
                var original;
                return _regenerator2.default.wrap(function _callee6$(_context6) {
                  while (1) {
                    switch (_context6.prev = _context6.next) {
                      case 0:
                        _context6.prev = 0;
                        _context6.next = 3;
                        return _models.invoice.find({
                          id: id
                        });

                      case 3:
                        original = _context6.sent;


                        _models.income.destroy({
                          where: {
                            invoiceId: id
                          }
                        }).then(function () {
                          _models.deferred_balance.destroy({
                            where: {
                              invoiceId: id
                            }
                          }).then(function () {
                            _models.invoice.destroy({
                              where: {
                                id: id
                              }
                            }).then((0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5() {
                              return _regenerator2.default.wrap(function _callee5$(_context5) {
                                while (1) {
                                  switch (_context5.prev = _context5.next) {
                                    case 0:
                                      _context5.next = 2;
                                      return trackChanges({
                                        username: username,
                                        invoiceId: id,
                                        operationType: 'Delete',
                                        operation: null,
                                        original: original
                                      });

                                    case 2:
                                      res("success");

                                    case 3:
                                    case 'end':
                                      return _context5.stop();
                                  }
                                }
                              }, _callee5, _this4);
                            })));
                          });
                        });
                        _context6.next = 10;
                        break;

                      case 7:
                        _context6.prev = 7;
                        _context6.t0 = _context6['catch'](0);

                        rej(_context6.t0);

                      case 10:
                      case 'end':
                        return _context6.stop();
                    }
                  }
                }, _callee6, _this4, [[0, 7]]);
              }));

              return function (_x10, _x11) {
                return _ref12.apply(this, arguments);
              };
            }()));

          case 1:
          case 'end':
            return _context7.stop();
        }
      }
    }, _callee7, this);
  }));

  return function DeleteInvoice(_x8) {
    return _ref10.apply(this, arguments);
  };
}();

exports.trackChanges = trackChanges;
exports.loadData2 = loadData2;
exports.GetHistory = GetHistory;
exports.ModifyIncomeDeferred = ModifyIncomeDeferred;
exports.DeleteIncome = DeleteIncome;
exports.DeleteDeferred = DeleteDeferred;
exports.ModifyInvoice = ModifyInvoice;
exports.UpdateInvoice = UpdateInvoice;
exports.CreateInvoice = CreateInvoice;
exports.UpdateInvoiceDescription = UpdateInvoiceDescription;
exports.GetIncomeDeferred = GetIncomeDeferred;
exports.GetInvoice = GetInvoice;
exports.getDistinctInvoiceNumber = getDistinctInvoiceNumber;
exports.getDistinctCustomerName = getDistinctCustomerName;
exports.getDistinctUserName = getDistinctUserName;
exports.getProductTable = getProductTable;
exports.getClassTable = getClassTable;

var _models = require('../../../models');

var _logger = require('../../../logger');

var _logger2 = _interopRequireDefault(_logger);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var companies = ['3Com Corp', '3M Company', 'A.G. Edwards Inc.', 'Abbott Laboratories', 'Abercrombie & Fitch Co.', 'ABM Industries Incorporated', 'Ace Hardware Corporation', 'ACT Manufacturing Inc.'];

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}
function trackChanges(_ref2) {
  var _this = this;

  var _ref2$username = _ref2.username,
      username = _ref2$username === undefined ? "" : _ref2$username,
      _ref2$operationType = _ref2.operationType,
      operationType = _ref2$operationType === undefined ? "" : _ref2$operationType,
      _ref2$invoiceId = _ref2.invoiceId,
      invoiceId = _ref2$invoiceId === undefined ? "" : _ref2$invoiceId,
      _ref2$operation = _ref2.operation,
      operation = _ref2$operation === undefined ? "" : _ref2$operation,
      _ref2$original = _ref2.original,
      original = _ref2$original === undefined ? {} : _ref2$original;

  return new _bluebird2.default(function () {
    var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(res, rej) {
      var payload, originalIncome, originalDeferred;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              payload = {};
              _context2.t0 = operationType;
              _context2.next = _context2.t0 === 'Create' ? 4 : _context2.t0 === 'Modify' ? 5 : _context2.t0 === 'Delete' ? 6 : _context2.t0 === 'ModifyIncomeDeferred' ? 7 : 14;
              break;

            case 4:
              payload = {
                user: username,
                invoiceId: invoiceId,
                operationType: operationType,
                operation: operation
              };

            case 5:
              payload = {
                user: username,
                invoiceId: invoiceId,
                operationType: operationType,
                operation: JSON.stringify({
                  original: original,
                  updated: operation
                })
              };

            case 6:
              payload = {
                user: username,
                invoiceId: invoiceId,
                operationType: operationType,
                operation: JSON.stringify(original)
              };

            case 7:
              _context2.next = 9;
              return _models.income.find({
                invoiceId: invoiceId
              });

            case 9:
              originalIncome = _context2.sent;
              _context2.next = 12;
              return _models.deferred_balance.find({
                invoiceId: invoiceId
              });

            case 12:
              originalDeferred = _context2.sent;

              payload = {
                user: username,
                invoiceId: invoiceId,
                operationType: operationType,
                operation: JSON.stringify({
                  original: original,
                  updated: operation
                })
              };

            case 14:
              _models.change_history.create(payload).then(function (result) {
                res(result);
              }).catch(function (err) {
                rej(err);
                console.log(err);
              });

            case 15:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this);
    }));

    return function (_x, _x2) {
      return _ref3.apply(this, arguments);
    };
  }());
}

function loadData2() {
  var _this2 = this;

  return new _bluebird2.default(function () {
    var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(res, rej) {
      var month, year, billingMonth, recStartMonth, result;
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              month = random(1, 12);
              year = random(2014, 2017);
              billingMonth = new Date(year, month);
              recStartMonth = new Date(year, month + 2);
              _context3.next = 6;
              return CreateInvoice({
                type: random(1, 3),
                Class: random(1, 6),
                product: random(1, 4),
                currency: random(1, 5),
                status: random(1, 3),
                revenueType: random(1, 5),
                companyName: companies[random(1, companies.length)],
                invoiceNumber: random(1, 90000),
                invoiceDate: randomDate(new Date(2014, 1), new Date(2017, 11)),
                invoiceAmount: random(0, 10000),
                billMonth: billingMonth,
                recognitionStrMonth: recStartMonth,
                lengthRec: random(10, 12),
                fxRate: random(1, 5),
                monthlyRec: random(1, 10000),
                dateLastIncrease: randomDate(new Date(2014, 1), new Date(2017, 11)),
                increasePerc: random(1, 5),
                cancelationDate: randomDate(new Date(2014, 1), new Date(2017, 11)),
                invoiceAmountUsd: random(1, 50000),
                annualIncreaseBool: true,
                subscription: random(1, 2),
                country: random(1, 243)
              });

            case 6:
              result = _context3.sent;

              res(result);

            case 8:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, _this2);
    }));

    return function (_x3, _x4) {
      return _ref4.apply(this, arguments);
    };
  }());
}

function GetHistory(_ref5) {
  var where = _ref5.where;

  return _models.change_history.findAll({
    where: where,
    limit: 100,
    order: [['timestamp', 'DESC']]
  });
}

function ModifyIncomeDeferred(_ref6) {
  var _this3 = this;

  var _ref6$data = _ref6.data,
      data = _ref6$data === undefined ? [] : _ref6$data,
      _ref6$invoiceId = _ref6.invoiceId,
      invoiceId = _ref6$invoiceId === undefined ? 0 : _ref6$invoiceId;
  var username = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

  return new _bluebird2.default(function () {
    var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(res, rej) {
      var originalIncome, originalDeferred;
      return _regenerator2.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return _models.income.find({
                invoiceId: invoiceId
              });

            case 3:
              originalIncome = _context4.sent;
              _context4.next = 6;
              return _models.deferred_balance.find({
                invoiceId: invoiceId
              });

            case 6:
              originalDeferred = _context4.sent;
              _context4.next = 9;
              return DeleteIncome({
                id: invoiceId
              });

            case 9:
              _context4.next = 11;
              return DeleteDeferred({
                id: invoiceId
              });

            case 11:
              data.forEach(function (value) {
                if (value.income != 0) {

                  _models.income.create({
                    invoiceId: invoiceId,
                    amount: value.income,
                    year: value.year,
                    month: value.month
                  });
                }
                if (value.deferred != 0) {

                  _models.deferred_balance.create({
                    invoiceId: invoiceId,
                    amount: value.deferred,
                    year: value.year,
                    month: value.month
                  });
                }
              });
              _context4.next = 14;
              return trackChanges({
                username: username,
                operationType: 'ModifyIncomeDeferred',
                invoiceId: invoiceId,
                operation: data,
                original: {
                  income: originalIncome,
                  deferred: originalDeferred
                }
              });

            case 14:
              res("success");
              _context4.next = 20;
              break;

            case 17:
              _context4.prev = 17;
              _context4.t0 = _context4['catch'](0);

              rej(_context4.t0);

            case 20:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, _this3, [[0, 17]]);
    }));

    return function (_x6, _x7) {
      return _ref7.apply(this, arguments);
    };
  }());
}

function DeleteIncome(_ref8) {
  var _ref8$id = _ref8.id,
      id = _ref8$id === undefined ? 0 : _ref8$id;

  return _models.income.destroy({
    where: {
      invoiceId: id
    }
  });
}

function DeleteDeferred(_ref9) {
  var _ref9$id = _ref9.id,
      id = _ref9$id === undefined ? 0 : _ref9$id;

  return _models.deferred_balance.destroy({
    where: {
      invoiceId: id
    }
  });
}

function ModifyInvoice(body, username) {
  var _this5 = this;

  return new _bluebird2.default(function () {
    var _ref14 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee8(res, rej) {
      var original;
      return _regenerator2.default.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _context8.prev = 0;
              _context8.next = 3;
              return _models.invoice.find({
                id: body.id
              });

            case 3:
              original = _context8.sent;
              _context8.next = 6;
              return DeleteDeferred({
                id: body.id
              });

            case 6:
              _context8.next = 8;
              return DeleteIncome({
                id: body.id
              });

            case 8:
              _context8.next = 10;
              return UpdateInvoice(body);

            case 10:
              _context8.next = 12;
              return trackChanges({
                username: username,
                invoiceId: body.id,
                operationType: 'Modify',
                operation: body,
                original: original
              });

            case 12:
              res("success");
              _context8.next = 18;
              break;

            case 15:
              _context8.prev = 15;
              _context8.t0 = _context8['catch'](0);

              rej(_context8.t0);

            case 18:
            case 'end':
              return _context8.stop();
          }
        }
      }, _callee8, _this5, [[0, 15]]);
    }));

    return function (_x12, _x13) {
      return _ref14.apply(this, arguments);
    };
  }());
}

function UpdateInvoice(_ref15) {
  var _this6 = this;

  var _ref15$id = _ref15.id,
      id = _ref15$id === undefined ? 0 : _ref15$id,
      _ref15$type = _ref15.type,
      type = _ref15$type === undefined ? 1 : _ref15$type,
      _ref15$Class = _ref15.Class,
      Class = _ref15$Class === undefined ? 1 : _ref15$Class,
      _ref15$product = _ref15.product,
      product = _ref15$product === undefined ? 1 : _ref15$product,
      _ref15$currency = _ref15.currency,
      currency = _ref15$currency === undefined ? 1 : _ref15$currency,
      _ref15$status = _ref15.status,
      status = _ref15$status === undefined ? 1 : _ref15$status,
      _ref15$revenueType = _ref15.revenueType,
      revenueType = _ref15$revenueType === undefined ? 1 : _ref15$revenueType,
      _ref15$companyName = _ref15.companyName,
      companyName = _ref15$companyName === undefined ? 1 : _ref15$companyName,
      _ref15$invoiceNumber = _ref15.invoiceNumber,
      invoiceNumber = _ref15$invoiceNumber === undefined ? 1 : _ref15$invoiceNumber,
      _ref15$invoiceAmount = _ref15.invoiceAmount,
      invoiceAmount = _ref15$invoiceAmount === undefined ? 1 : _ref15$invoiceAmount,
      _ref15$invoiceDate = _ref15.invoiceDate,
      invoiceDate = _ref15$invoiceDate === undefined ? 1 : _ref15$invoiceDate,
      _ref15$billMonth = _ref15.billMonth,
      billMonth = _ref15$billMonth === undefined ? 1 : _ref15$billMonth,
      _ref15$description = _ref15.description,
      description = _ref15$description === undefined ? 1 : _ref15$description,
      _ref15$recognitionStr = _ref15.recognitionStrMonth,
      recognitionStrMonth = _ref15$recognitionStr === undefined ? 1 : _ref15$recognitionStr,
      _ref15$lengthRec = _ref15.lengthRec,
      lengthRec = _ref15$lengthRec === undefined ? 12 : _ref15$lengthRec,
      _ref15$fxRate = _ref15.fxRate,
      fxRate = _ref15$fxRate === undefined ? 1 : _ref15$fxRate,
      _ref15$monthlyRec = _ref15.monthlyRec,
      monthlyRec = _ref15$monthlyRec === undefined ? 1 : _ref15$monthlyRec,
      _ref15$dateLastIncrea = _ref15.dateLastIncrease,
      dateLastIncrease = _ref15$dateLastIncrea === undefined ? 1 : _ref15$dateLastIncrea,
      _ref15$increasePerc = _ref15.increasePerc,
      increasePerc = _ref15$increasePerc === undefined ? 1 : _ref15$increasePerc,
      _ref15$cancelationDat = _ref15.cancelationDate,
      cancelationDate = _ref15$cancelationDat === undefined ? 1 : _ref15$cancelationDat,
      _ref15$comments = _ref15.comments,
      comments = _ref15$comments === undefined ? '1' : _ref15$comments,
      _ref15$invoiceAmountU = _ref15.invoiceAmountUsd,
      invoiceAmountUsd = _ref15$invoiceAmountU === undefined ? 1 : _ref15$invoiceAmountU,
      _ref15$annualIncrease = _ref15.annualIncreaseBool,
      annualIncreaseBool = _ref15$annualIncrease === undefined ? 1 : _ref15$annualIncrease,
      _ref15$subscription = _ref15.subscription,
      subscription = _ref15$subscription === undefined ? 1 : _ref15$subscription,
      _ref15$country = _ref15.country,
      country = _ref15$country === undefined ? 1 : _ref15$country;

  return new _bluebird2.default(function () {
    var _ref16 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee11(res, rej) {
      var response, billingStart, supportStart, incomeList, defferedList;
      return _regenerator2.default.wrap(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              _context11.prev = 0;
              _context11.next = 3;
              return _models.invoice.update({
                type: type,
                customerName: companyName,
                comments: comments,
                description: description,
                product: product,
                class: Class,
                invoiceNumber: invoiceNumber,
                invoiceAmount: invoiceAmount,
                invoiceDate: invoiceDate,
                subscriptionType: subscription,
                billingMonth: billMonth,
                status: status,
                recognitionStartMonth: recognitionStrMonth,
                lengthMonth: lengthRec,
                currency: currency,
                FXRate: fxRate,
                revenueType: revenueType,
                cancellationDate: null,
                annualIncreaseEli: annualIncreaseBool,
                dateLastIncrease: dateLastIncrease,
                increasePercentage: increasePerc,
                invoiceAmountUSD: invoiceAmountUsd,
                MonthlyRecoginitionAmountUSD: monthlyRec,
                country: country
              }, {
                where: {
                  id: id
                }
              });

            case 3:
              response = _context11.sent;


              Date.prototype.addDays = function (days) {
                this.setDate(this.getDate() + parseInt(days));
                return this;
              };
              billingStart = new Date(billMonth).addDays(2);
              supportStart = new Date(recognitionStrMonth).addDays(2);
              incomeList = createIncomeList({
                id: id,
                startMonth: supportStart.getMonth() + 1,
                year: supportStart.getFullYear(),
                length: lengthRec,
                invoiceAmount: invoiceAmountUsd
              });

              incomeList.forEach(function () {
                var _ref17 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee9(value) {
                  return _regenerator2.default.wrap(function _callee9$(_context9) {
                    while (1) {
                      switch (_context9.prev = _context9.next) {
                        case 0:
                          _context9.next = 2;
                          return _models.income.create(value);

                        case 2:
                        case 'end':
                          return _context9.stop();
                      }
                    }
                  }, _callee9, _this6);
                }));

                return function (_x16) {
                  return _ref17.apply(this, arguments);
                };
              }());
              defferedList = createDeferred({
                id: id,
                startMonth: billingStart.getMonth() + 1,
                year: billingStart.getFullYear(),
                length: lengthRec,
                invoiceAmount: invoiceAmountUsd
              });

              defferedList.forEach(function () {
                var _ref18 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee10(value) {
                  return _regenerator2.default.wrap(function _callee10$(_context10) {
                    while (1) {
                      switch (_context10.prev = _context10.next) {
                        case 0:
                          _context10.next = 2;
                          return _models.deferred_balance.create(value);

                        case 2:
                        case 'end':
                          return _context10.stop();
                      }
                    }
                  }, _callee10, _this6);
                }));

                return function (_x17) {
                  return _ref18.apply(this, arguments);
                };
              }());
              res('Success');
              _context11.next = 17;
              break;

            case 14:
              _context11.prev = 14;
              _context11.t0 = _context11['catch'](0);

              rej(_context11.t0.message);

            case 17:
            case 'end':
              return _context11.stop();
          }
        }
      }, _callee11, _this6, [[0, 14]]);
    }));

    return function (_x14, _x15) {
      return _ref16.apply(this, arguments);
    };
  }());
}

function CreateInvoice(_ref19) {
  var _ref19$type = _ref19.type,
      type = _ref19$type === undefined ? 1 : _ref19$type,
      _ref19$Class = _ref19.Class,
      Class = _ref19$Class === undefined ? 1 : _ref19$Class,
      _ref19$product = _ref19.product,
      product = _ref19$product === undefined ? 1 : _ref19$product,
      _ref19$currency = _ref19.currency,
      currency = _ref19$currency === undefined ? 1 : _ref19$currency,
      _ref19$status = _ref19.status,
      status = _ref19$status === undefined ? 1 : _ref19$status,
      _ref19$revenueType = _ref19.revenueType,
      revenueType = _ref19$revenueType === undefined ? 1 : _ref19$revenueType,
      _ref19$companyName = _ref19.companyName,
      companyName = _ref19$companyName === undefined ? 1 : _ref19$companyName,
      _ref19$invoiceNumber = _ref19.invoiceNumber,
      invoiceNumber = _ref19$invoiceNumber === undefined ? 1 : _ref19$invoiceNumber,
      _ref19$invoiceAmount = _ref19.invoiceAmount,
      invoiceAmount = _ref19$invoiceAmount === undefined ? 1 : _ref19$invoiceAmount,
      _ref19$invoiceDate = _ref19.invoiceDate,
      invoiceDate = _ref19$invoiceDate === undefined ? new Date(1990, 1, 1) : _ref19$invoiceDate,
      _ref19$billMonth = _ref19.billMonth,
      billMonth = _ref19$billMonth === undefined ? 1 : _ref19$billMonth,
      _ref19$description = _ref19.description,
      description = _ref19$description === undefined ? 'N/A' : _ref19$description,
      _ref19$recognitionStr = _ref19.recognitionStrMonth,
      recognitionStrMonth = _ref19$recognitionStr === undefined ? new Date(1990, 1, 1) : _ref19$recognitionStr,
      _ref19$lengthRec = _ref19.lengthRec,
      lengthRec = _ref19$lengthRec === undefined ? 12 : _ref19$lengthRec,
      _ref19$fxRate = _ref19.fxRate,
      fxRate = _ref19$fxRate === undefined ? 1 : _ref19$fxRate,
      _ref19$monthlyRec = _ref19.monthlyRec,
      monthlyRec = _ref19$monthlyRec === undefined ? 1 : _ref19$monthlyRec,
      _ref19$dateLastIncrea = _ref19.dateLastIncrease,
      dateLastIncrease = _ref19$dateLastIncrea === undefined ? new Date(1990, 1, 1) : _ref19$dateLastIncrea,
      _ref19$increasePerc = _ref19.increasePerc,
      increasePerc = _ref19$increasePerc === undefined ? 1 : _ref19$increasePerc,
      _ref19$cancelationDat = _ref19.cancelationDate,
      cancelationDate = _ref19$cancelationDat === undefined ? new Date(1990, 1, 1) : _ref19$cancelationDat,
      _ref19$comments = _ref19.comments,
      comments = _ref19$comments === undefined ? 'N/A' : _ref19$comments,
      _ref19$invoiceAmountU = _ref19.invoiceAmountUsd,
      invoiceAmountUsd = _ref19$invoiceAmountU === undefined ? 1 : _ref19$invoiceAmountU,
      _ref19$annualIncrease = _ref19.annualIncreaseBool,
      annualIncreaseBool = _ref19$annualIncrease === undefined ? true : _ref19$annualIncrease,
      _ref19$subscription = _ref19.subscription,
      subscription = _ref19$subscription === undefined ? 1 : _ref19$subscription,
      _ref19$country = _ref19.country,
      country = _ref19$country === undefined ? 1 : _ref19$country,
      _ref19$startDate = _ref19.startDate,
      startDate = _ref19$startDate === undefined ? new Date(1990, 1, 1) : _ref19$startDate;

  var _this7 = this;

  var username = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var checkDuplicate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  return new _bluebird2.default(function () {
    var _ref20 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee14(res, rej) {
      var exist, currentId;
      return _regenerator2.default.wrap(function _callee14$(_context14) {
        while (1) {
          switch (_context14.prev = _context14.next) {
            case 0:
              _context14.prev = 0;
              _context14.next = 3;
              return _models.invoice.findOne({
                where: {
                  invoiceNumber: invoiceNumber,
                  product: product
                }
              });

            case 3:
              exist = _context14.sent;

              if (!(exist && checkDuplicate)) {
                _context14.next = 7;
                break;
              }

              rej(new Error("Duplicate Entry"));
              return _context14.abrupt('return');

            case 7:
              currentId = 0;

              _models.invoice.create({
                type: type,
                customerName: companyName,
                comments: comments,
                description: description,
                product: product,
                class: Class,
                invoiceNumber: invoiceNumber,
                invoiceAmount: invoiceAmount,
                invoiceDate: invoiceDate,
                subscriptionType: subscription,
                billingMonth: billMonth,
                status: status,
                recognitionStartMonth: recognitionStrMonth,
                lengthMonth: lengthRec,
                currency: currency,
                FXRate: fxRate,
                revenueType: revenueType,
                cancellationDate: null,
                annualIncreaseEli: annualIncreaseBool,
                dateLastIncrease: dateLastIncrease,
                increasePercentage: increasePerc,
                invoiceAmountUSD: invoiceAmountUsd,
                MonthlyRecoginitionAmountUSD: monthlyRec,
                country: country,
                startDate: startDate
              }).then(function () {
                var _ref21 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee12(response) {
                  var id, billingStart, supportStart, incomeList, defferedList;
                  return _regenerator2.default.wrap(function _callee12$(_context12) {
                    while (1) {
                      switch (_context12.prev = _context12.next) {
                        case 0:
                          Date.prototype.addDays = function (days) {
                            this.setDate(this.getDate() + parseInt(days));
                            return this;
                          };
                          id = response.id;

                          currentId = id;
                          billingStart = new Date(billMonth).addDays(2);
                          supportStart = new Date(recognitionStrMonth).addDays(2);
                          incomeList = createIncomeList({
                            id: id,
                            startMonth: supportStart.getMonth() + 1,
                            year: supportStart.getFullYear(),
                            length: lengthRec,
                            invoiceAmount: invoiceAmountUsd
                          });
                          _context12.next = 8;
                          return _models.income.bulkCreate(incomeList);

                        case 8:
                          defferedList = createDeferred({
                            id: id,
                            startMonth: billingStart.getMonth() + 1,
                            year: billingStart.getFullYear(),
                            length: lengthRec,
                            invoiceAmount: invoiceAmountUsd
                          });
                          _context12.next = 11;
                          return _models.deferred_balance.bulkCreate(defferedList);

                        case 11:
                          trackChanges({
                            username: username,
                            invoiceId: id,
                            operationType: 'Create',
                            operation: response,
                            original: null
                          });

                        case 12:
                        case 'end':
                          return _context12.stop();
                      }
                    }
                  }, _callee12, _this7);
                }));

                return function (_x22) {
                  return _ref21.apply(this, arguments);
                };
              }()).catch(function () {
                var _ref22 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee13(err) {
                  return _regenerator2.default.wrap(function _callee13$(_context13) {
                    while (1) {
                      switch (_context13.prev = _context13.next) {
                        case 0:
                          _logger2.default.error({
                            err: err,
                            invoiceNumber: invoiceNumber
                          });
                          _context13.next = 3;
                          return _models.income.destroy({
                            where: {
                              invoiceId: currentId
                            }
                          });

                        case 3:
                          _context13.next = 5;
                          return _models.deferred_balance.destroy({
                            where: {
                              invoiceId: currentId
                            }
                          });

                        case 5:
                          _context13.next = 7;
                          return _models.invoice.destroy({
                            where: {
                              id: currentId
                            }
                          });

                        case 7:
                        case 'end':
                          return _context13.stop();
                      }
                    }
                  }, _callee13, _this7);
                }));

                return function (_x23) {
                  return _ref22.apply(this, arguments);
                };
              }());

              console.log('success');
              res('Success');
              _context14.next = 17;
              break;

            case 13:
              _context14.prev = 13;
              _context14.t0 = _context14['catch'](0);

              console.log(_context14.t0.message);
              rej(_context14.t0.message);

            case 17:
            case 'end':
              return _context14.stop();
          }
        }
      }, _callee14, _this7, [[0, 13]]);
    }));

    return function (_x20, _x21) {
      return _ref20.apply(this, arguments);
    };
  }());
}

function createIncomeList(_ref23) {
  var _ref23$id = _ref23.id,
      id = _ref23$id === undefined ? 0 : _ref23$id,
      _ref23$startMonth = _ref23.startMonth,
      startMonth = _ref23$startMonth === undefined ? 1 : _ref23$startMonth,
      _ref23$year = _ref23.year,
      year = _ref23$year === undefined ? 2017 : _ref23$year,
      _ref23$length = _ref23.length,
      length = _ref23$length === undefined ? 12 : _ref23$length,
      _ref23$invoiceAmount = _ref23.invoiceAmount,
      invoiceAmount = _ref23$invoiceAmount === undefined ? 1000 : _ref23$invoiceAmount;

  var incomeList = [];
  var currentYr = year;
  var currentMonth = startMonth;
  var amountPerMonth = invoiceAmount / length;
  for (var i = 0; i < length; i++) {
    incomeList.push({
      invoiceId: id,
      amount: amountPerMonth,
      year: currentYr,
      month: currentMonth
    });
    if (currentMonth == 12) {
      currentMonth = 0;
      currentYr++;
    }
    currentMonth++;
  }
  return incomeList;
}

function createDeferred(_ref24) {
  var _ref24$id = _ref24.id,
      id = _ref24$id === undefined ? 0 : _ref24$id,
      _ref24$startMonth = _ref24.startMonth,
      startMonth = _ref24$startMonth === undefined ? 1 : _ref24$startMonth,
      _ref24$year = _ref24.year,
      year = _ref24$year === undefined ? 2017 : _ref24$year,
      _ref24$length = _ref24.length,
      length = _ref24$length === undefined ? 12 : _ref24$length,
      _ref24$invoiceAmount = _ref24.invoiceAmount,
      invoiceAmount = _ref24$invoiceAmount === undefined ? 1000 : _ref24$invoiceAmount;

  var incomeList = [];
  var currentYr = year;
  var currentMonth = startMonth;
  var remainingAmount = invoiceAmount;
  var amountPerMonth = invoiceAmount / length;

  for (var i = 0; i < length + 1; i++) {
    if (i == 0 || i == 1) {
      incomeList.push({
        invoiceId: id,
        amount: remainingAmount,
        year: currentYr,
        month: currentMonth
      });
    } else {
      remainingAmount -= amountPerMonth;
      incomeList.push({
        invoiceId: id,
        amount: remainingAmount,
        year: currentYr,
        month: currentMonth
      });
    }
    if (currentMonth == 12) {
      currentMonth = 0;
      currentYr++;
    }
    currentMonth++;
  }
  return incomeList;
}

function UpdateInvoiceDescription(_ref25) {
  var _this8 = this;

  var _ref25$id = _ref25.id,
      id = _ref25$id === undefined ? 0 : _ref25$id,
      _ref25$description = _ref25.description,
      description = _ref25$description === undefined ? "" : _ref25$description,
      _ref25$comments = _ref25.comments,
      comments = _ref25$comments === undefined ? "" : _ref25$comments;
  var username = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

  return new _bluebird2.default(function () {
    var _ref26 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee15(res, req) {
      var original;
      return _regenerator2.default.wrap(function _callee15$(_context15) {
        while (1) {
          switch (_context15.prev = _context15.next) {
            case 0:
              _context15.next = 2;
              return _models.invoice.find({
                id: id
              });

            case 2:
              original = _context15.sent;

              _models.invoice.update({
                description: description,
                comments: comments
              }, {
                where: {
                  id: id
                }
              }).then(function (result) {
                trackChanges({
                  username: username,
                  invoiceId: id,
                  operationType: 'Modify',
                  operation: {
                    description: description,
                    comments: comments
                  },
                  original: original
                });
                res('success');
              }).catch(function (err) {
                rej(err);
              });

            case 4:
            case 'end':
              return _context15.stop();
          }
        }
      }, _callee15, _this8);
    }));

    return function (_x25, _x26) {
      return _ref26.apply(this, arguments);
    };
  }());
}

function GetIncomeDeferred(_ref27) {
  var where = _ref27.where;

  return _models.invoice.findAll({
    where: where,
    include: [{
      model: _models.income
    }, {
      model: _models.deferred_balance
    }, {
      model: _models.product_enum
    }]
  });
}

function GetInvoice(_ref28) {
  var _this9 = this;

  var where = _ref28.where,
      _ref28$all = _ref28.all,
      all = _ref28$all === undefined ? false : _ref28$all;

  return new _bluebird2.default(function () {
    var _ref29 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee16(res, rej) {
      var result;
      return _regenerator2.default.wrap(function _callee16$(_context16) {
        while (1) {
          switch (_context16.prev = _context16.next) {
            case 0:
              _context16.prev = 0;
              _context16.next = 3;
              return _models.invoice.findAll({
                where: where,
                include: [{
                  model: _models.class_enum
                }, {
                  model: _models.currency_enum
                }, {
                  model: _models.product_enum
                }, {
                  model: _models.revenue_type_enum
                }, {
                  model: _models.status_enum
                }, {
                  model: _models.subscription_enum
                }, {
                  model: _models.type_enum
                }]
              });

            case 3:
              result = _context16.sent;

              if (all) {
                res(result);
              } else {
                res(result.splice(0, 50));
              }

              _context16.next = 10;
              break;

            case 7:
              _context16.prev = 7;
              _context16.t0 = _context16['catch'](0);

              rej(_context16.t0);

            case 10:
            case 'end':
              return _context16.stop();
          }
        }
      }, _callee16, _this9, [[0, 7]]);
    }));

    return function (_x27, _x28) {
      return _ref29.apply(this, arguments);
    };
  }());
}

function getDistinctInvoiceNumber() {
  var query = "SELECT DISTINCT invoiceNumber AS value FROM invoice";
  return _models.sequelize.query(query, {
    type: _models.sequelize.QueryTypes.SELECT
  });
}

function getDistinctCustomerName() {
  var query = "SELECT DISTINCT customerName AS value FROM invoice";
  return _models.sequelize.query(query, {
    type: _models.sequelize.QueryTypes.SELECT
  });
}

function getDistinctUserName() {
  var query = "SELECT DISTINCT username AS value FROM user";
  return _models.sequelize.query(query, {
    type: _models.sequelize.QueryTypes.SELECT
  });
}

function getReportByClassProduct() {
  var year = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2017;
  var month = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var income = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  var query = 'SELECT SUM(income.amount) AS amount, class_enum.data AS class, COUNT(income.amount) AS count, product_enum.data as product FROM invoice AS invoice LEFT JOIN income AS income on income.invoiceId = invoice.id AND income.year = %YEAR% AND income.month = %MONTH% LEFT JOIN product_enum as product_enum ON product_enum.id = invoice.product LEFT JOIN class_enum as class_enum ON class_enum.id = invoice.class GROUP BY invoice.product, invoice.class';
  query = query.replace("%YEAR%", year).replace("%MONTH%", month);
  if (!income) query = query.replace(/income/g, "deferred_balance");
  return _models.sequelize.query(query, {
    type: _models.sequelize.QueryTypes.SELECT
  });
}

function getReportByProduct() {
  var year = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2017;
  var month = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var income = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  var query = 'SELECT SUM(income.amount) AS amount, COUNT(income.amount) AS count, product_enum.data as product FROM invoice AS invoice LEFT JOIN income AS income on income.invoiceId = invoice.id AND income.year = %YEAR% AND income.month = %MONTH% LEFT JOIN product_enum as product_enum ON product_enum.id = invoice.product LEFT JOIN class_enum as class_enum ON class_enum.id = invoice.class GROUP BY invoice.product';
  query = query.replace("%YEAR%", year).replace("%MONTH%", month);
  if (!income) query = query.replace(/income/g, "deferred_balance");
  return _models.sequelize.query(query, {
    type: _models.sequelize.QueryTypes.SELECT
  });
}

function getReportByClass() {
  var year = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2017;
  var month = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var income = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  var query = 'SELECT SUM(income.amount) AS amount, COUNT(income.amount) AS count, class_enum.data as class FROM invoice AS invoice LEFT JOIN income AS income on income.invoiceId = invoice.id AND income.year = %YEAR% AND income.month = %MONTH% LEFT JOIN product_enum as product_enum ON product_enum.id = invoice.product LEFT JOIN class_enum as class_enum ON class_enum.id = invoice.class GROUP BY  invoice.class';
  query = query.replace("%YEAR%", year).replace("%MONTH%", month);
  if (!income) query = query.replace(/income/g, "deferred_balance");
  return _models.sequelize.query(query, {
    type: _models.sequelize.QueryTypes.SELECT
  });
}

function getProductTable(_ref30) {
  var _this10 = this;

  var _ref30$startY = _ref30.startY,
      startY = _ref30$startY === undefined ? 2000 : _ref30$startY,
      _ref30$endY = _ref30.endY,
      endY = _ref30$endY === undefined ? 2016 : _ref30$endY,
      _ref30$startM = _ref30.startM,
      startM = _ref30$startM === undefined ? 1 : _ref30$startM,
      _ref30$endM = _ref30.endM,
      endM = _ref30$endM === undefined ? 12 : _ref30$endM,
      _ref30$isIncome = _ref30.isIncome,
      isIncome = _ref30$isIncome === undefined ? false : _ref30$isIncome;

  return new _bluebird2.default(function () {
    var _ref31 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee17(res, rej) {
      var dataTable, currentY, currentM, data, currentEntry, count, total;
      return _regenerator2.default.wrap(function _callee17$(_context17) {
        while (1) {
          switch (_context17.prev = _context17.next) {
            case 0:
              _context17.prev = 0;
              dataTable = [];
              currentY = startY;
              currentM = startM;

            case 4:
              if (!(currentY != endY || currentM != endM)) {
                _context17.next = 20;
                break;
              }

              _context17.next = 7;
              return getReportByProduct(currentY, currentM, isIncome);

            case 7:
              data = _context17.sent;
              currentEntry = {};
              count = 0;
              total = 0;


              data.forEach(function (value) {
                currentEntry[value.product] = value.amount;
                currentEntry[value.product + '_count'] = value.count;
                count += value.count;
                if (value.amount != null) total += parseFloat(value.amount);
              });
              currentEntry["year"] = currentY;
              currentEntry["month"] = currentM;
              currentEntry["count"] = count;
              currentEntry["total"] = total;

              dataTable.push(currentEntry);
              if (currentM == 12) {
                currentM = 1;
                currentY++;
              } else currentM++;
              _context17.next = 4;
              break;

            case 20:
              res(dataTable);
              _context17.next = 26;
              break;

            case 23:
              _context17.prev = 23;
              _context17.t0 = _context17['catch'](0);

              rej(_context17.t0.message);

            case 26:
            case 'end':
              return _context17.stop();
          }
        }
      }, _callee17, _this10, [[0, 23]]);
    }));

    return function (_x38, _x39) {
      return _ref31.apply(this, arguments);
    };
  }());
}

function getClassTable(_ref32) {
  var _this11 = this;

  var _ref32$startY = _ref32.startY,
      startY = _ref32$startY === undefined ? 2000 : _ref32$startY,
      _ref32$endY = _ref32.endY,
      endY = _ref32$endY === undefined ? 2016 : _ref32$endY,
      _ref32$startM = _ref32.startM,
      startM = _ref32$startM === undefined ? 1 : _ref32$startM,
      _ref32$endM = _ref32.endM,
      endM = _ref32$endM === undefined ? 12 : _ref32$endM,
      _ref32$isIncome = _ref32.isIncome,
      isIncome = _ref32$isIncome === undefined ? false : _ref32$isIncome;

  return new _bluebird2.default(function () {
    var _ref33 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee18(res, rej) {
      var dataTable, currentY, currentM, data, currentEntry, count, total;
      return _regenerator2.default.wrap(function _callee18$(_context18) {
        while (1) {
          switch (_context18.prev = _context18.next) {
            case 0:
              _context18.prev = 0;
              dataTable = [];
              currentY = startY;
              currentM = startM;

            case 4:
              if (!(currentY != endY || currentM != endM)) {
                _context18.next = 20;
                break;
              }

              _context18.next = 7;
              return getReportByClass(currentY, currentM, isIncome);

            case 7:
              data = _context18.sent;
              currentEntry = {};
              count = 0;
              total = 0;

              data.forEach(function (value) {
                currentEntry[value.class] = value.amount;
                //  currentEntry[value.class] = {value:0, count:0}
                //  currentEntry[value.class]["value"] = value.amount
                //  currentEntry[value.class]["count"] = value.count
                currentEntry[value.class + '_count'] = value.count;
                count += value.count;
                if (value.amount != null) total += parseFloat(value.amount);
              });
              currentEntry["year"] = currentY;
              currentEntry["month"] = currentM;
              currentEntry["count"] = count;
              currentEntry["total"] = total;

              dataTable.push(currentEntry);
              if (currentM == 12) {
                currentM = 1;
                currentY++;
              } else currentM++;
              _context18.next = 4;
              break;

            case 20:
              res(dataTable);
              _context18.next = 26;
              break;

            case 23:
              _context18.prev = 23;
              _context18.t0 = _context18['catch'](0);

              rej(_context18.t0.message);

            case 26:
            case 'end':
              return _context18.stop();
          }
        }
      }, _callee18, _this11, [[0, 23]]);
    }));

    return function (_x40, _x41) {
      return _ref33.apply(this, arguments);
    };
  }());
}