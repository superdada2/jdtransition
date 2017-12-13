'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadInvoice = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var loadInvoice = exports.loadInvoice = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res) {
    var _this = this;

    var path, Class, country, currency, product, revenue_type, status, subscription, type;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            path = 'C:/Users/admin/test.csv';

            console.log('start', path);
            _context2.next = 4;
            return _models.class_enum.findAll().map(function (i) {
              return i.dataValues;
            });

          case 4:
            Class = _context2.sent;
            _context2.next = 7;
            return _models.country_enum.findAll().map(function (i) {
              return i.dataValues;
            });

          case 7:
            country = _context2.sent;
            _context2.next = 10;
            return _models.currency_enum.findAll().map(function (i) {
              return i.dataValues;
            });

          case 10:
            currency = _context2.sent;
            _context2.next = 13;
            return _models.product_enum.findAll().map(function (i) {
              return i.dataValues;
            });

          case 13:
            product = _context2.sent;
            _context2.next = 16;
            return _models.revenue_type_enum.findAll().map(function (i) {
              return i.dataValues;
            });

          case 16:
            revenue_type = _context2.sent;
            _context2.next = 19;
            return _models.status_enum.findAll().map(function (i) {
              return i.dataValues;
            });

          case 19:
            status = _context2.sent;
            _context2.next = 22;
            return _models.subscription_enum.findAll().map(function (i) {
              return i.dataValues;
            });

          case 22:
            subscription = _context2.sent;
            _context2.next = 25;
            return _models.type_enum.findAll().map(function (i) {
              return i.dataValues;
            });

          case 25:
            type = _context2.sent;

            (0, _csvtojson2.default)().fromFile(path).on('json', function () {
              var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(jsonObj) {
                var tempObj, billYear, k;
                return _regenerator2.default.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        // combine csv header row and csv line to a json object
                        // jsonObj.a ==> 1 or 4
                        // console.log(jsonObj);
                        tempObj = (0, _extends3.default)({}, jsonObj);

                        tempObj.type = type.find(function (i) {
                          return i.data.toLowerCase() == jsonObj.type.toLowerCase();
                        }) ? type.find(function (i) {
                          return i.data.toLowerCase() == jsonObj.type.toLowerCase();
                        }).id : 1;

                        tempObj.Class = Class.find(function (i) {
                          return i.data.toLowerCase() == jsonObj.Class.toLowerCase();
                        }) ? Class.find(function (i) {
                          return i.data.toLowerCase() == jsonObj.Class.toLowerCase();
                        }).id : 1;

                        tempObj.product = product.find(function (i) {
                          return i.data.toLowerCase() == jsonObj.product.toLowerCase();
                        }) ? product.find(function (i) {
                          return i.data.toLowerCase() == jsonObj.product.toLowerCase();
                        }).id : 1;

                        tempObj.currency = currency.find(function (i) {
                          return i.data.toLowerCase() == jsonObj.currency.toLowerCase();
                        }) ? currency.find(function (i) {
                          return i.data.toLowerCase() == jsonObj.currency.toLowerCase();
                        }).id : 1;

                        tempObj.country = country.find(function (i) {
                          return i.data.toLowerCase() == jsonObj.country.toLowerCase();
                        }) ? country.find(function (i) {
                          return i.data.toLowerCase() == jsonObj.country.toLowerCase();
                        }).id : 1;
                        tempObj.subscription = subscription.find(function (i) {
                          return i.data.toLowerCase() == jsonObj.subscription.toLowerCase();
                        }) ? subscription.find(function (i) {
                          return i.data.toLowerCase() == jsonObj.subscription.toLowerCase();
                        }).id : 1;

                        billYear = tempObj.recognitionStrMonth * 1 < tempObj.billMonth * 1 ? new Date(tempObj.startDate).getFullYear() - 1 : new Date(tempObj.startDate).getFullYear();

                        tempObj.billMonth = new Date(billYear, tempObj.billMonth - 1);
                        tempObj.recognitionStrMonth = new Date(new Date(tempObj.startDate).getFullYear(), tempObj.recognitionStrMonth - 1);

                        tempObj.invoiceAmount = parseFloat(tempObj.invoiceAmount.replace(/,/g, ''));
                        tempObj.invoiceAmountUsd = parseFloat(tempObj.invoiceAmountUsd.replace(/,/g, ''));

                        tempObj.startDate = new Date(tempObj.startDate).addDays(2);
                        // tempObj.invoiceDate = new Date(tempObj.invoiceDate).setDate(new Date(tempObj.invoiceDate).getDate() + 1)
                        for (k in tempObj) {
                          if (tempObj[k] == '') {
                            delete tempObj[k];
                          }
                        }

                        _context.prev = 14;
                        _context.next = 17;
                        return CreateInvoice(tempObj, 'admin', false);

                      case 17:
                        _context.next = 22;
                        break;

                      case 19:
                        _context.prev = 19;
                        _context.t0 = _context['catch'](14);

                        console.log(_context.t0);

                      case 22:
                      case 'end':
                        return _context.stop();
                    }
                  }
                }, _callee, _this, [[14, 19]]);
              }));

              return function (_x3) {
                return _ref2.apply(this, arguments);
              };
            }()).on('done', function (error) {
              console.log(error);
            });
            res.status(500).json('done');

          case 28:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function loadInvoice(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var loadAdmin = function () {
  var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
    var exist, hashed;
    return _regenerator2.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _models.user.findOne({
              where: {
                username: 'admin'
              }
            });

          case 2:
            exist = _context4.sent;

            if (!exist) {
              hashed = _bcrypt2.default.hashSync('admin', 10);

              _models.user.create({
                username: 'admin',
                password: hashed,
                email: 'admin@admin.com'
              }).then(function (i) {

                _models.user_permission.bulkCreate([{
                  username: 'admin',
                  module: 4,
                  role: 1
                }, {
                  username: 'admin',
                  module: 4,
                  role: 2
                }, {
                  username: 'admin',
                  module: 1,
                  role: 1
                }, {
                  username: 'admin',
                  module: 1,
                  role: 2
                }, {
                  username: 'admin',
                  module: 1,
                  role: 3
                }, {
                  username: 'admin',
                  module: 1,
                  role: 4
                }]);
              });
            }

          case 4:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function loadAdmin() {
    return _ref4.apply(this, arguments);
  };
}();

var loadIfNotExist = function () {
  var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(sequelizeInterface, data) {
    var _this2 = this;

    return _regenerator2.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            data.forEach(function () {
              var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(i) {
                var exist;
                return _regenerator2.default.wrap(function _callee5$(_context5) {
                  while (1) {
                    switch (_context5.prev = _context5.next) {
                      case 0:
                        _context5.next = 2;
                        return sequelizeInterface.findOne({
                          where: {
                            data: i
                          }
                        });

                      case 2:
                        exist = _context5.sent;

                        if (!exist) {
                          sequelizeInterface.create({
                            data: i
                          });
                        }

                      case 4:
                      case 'end':
                        return _context5.stop();
                    }
                  }
                }, _callee5, _this2);
              }));

              return function (_x6) {
                return _ref6.apply(this, arguments);
              };
            }());

          case 1:
          case 'end':
            return _context6.stop();
        }
      }
    }, _callee6, this);
  }));

  return function loadIfNotExist(_x4, _x5) {
    return _ref5.apply(this, arguments);
  };
}();

exports.loadCountry = loadCountry;

var _models = require('./models');

var _bcrypt = require('bcrypt');

var _bcrypt2 = _interopRequireDefault(_bcrypt);

var _csvtojson = require('csvtojson');

var _csvtojson2 = _interopRequireDefault(_csvtojson);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import {
//   CreateInvoice
// } from '../src/routes/api/reports/controller'
var initialData = {
  type: ['Invoice', 'General Journal', 'Credit Memo'],
  class: ['E-Bus', 'Informatica', 'JDE', 'Max', 'Mobile', 'SAP'],
  subscription: ['New', 'Renewel'],
  status: ['Open, Implemented', 'Cancelled'],
  currency: ['USD', 'CAD', 'AUD', 'GBP', 'AED', 'CDN', 'ZAR', 'EUR'],
  revenue_type: ['SAAS', 'Annaual Support', 'License', 'Consulting', 'Hosted', 'Others'],
  product: ['Analyt', 'Budgeting', 'Inform', 'Mobile', 'Sch-DM', 'Sch-MO', 'Sch-MO-SAP', 'STR', 'Warranty'],
  month: [{
    id: 1,
    data: 'Jan'
  }, {
    id: 2,
    data: 'Feb'
  }, {
    id: 3,
    data: 'Mar'
  }, {
    id: 4,
    data: 'Apr'
  }, {
    id: 5,
    data: 'May'
  }, {
    id: 6,
    data: 'Jun'
  }, {
    id: 7,
    data: 'Jul'
  }, {
    id: 8,
    data: 'Aug'
  }, {
    id: 9,
    data: 'Sep'
  }, {
    id: 10,
    data: 'Oct'
  }, {
    id: 11,
    data: 'Nov'
  }, {
    id: 12,
    data: 'Dec'
  }]
};

Date.prototype.addDays = function (days) {
  this.setDate(this.getDate() + parseInt(days));
  return this;
};

exports.default = function () {
  var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _models.class_enum.create({
              data: 'N/A'
            });

          case 2:
            _context3.next = 4;
            return _models.currency_enum.create({
              data: 'N/A'
            });

          case 4:
            _context3.next = 6;
            return _models.revenue_type_enum.create({
              data: 'N/A'
            });

          case 6:
            _context3.next = 8;
            return _models.status_enum.create({
              data: 'N/A'
            });

          case 8:
            _context3.next = 10;
            return _models.subscription_enum.create({
              data: 'N/A'
            });

          case 10:
            _context3.next = 12;
            return _models.type_enum.create({
              data: 'N/A'
            });

          case 12:
            _context3.next = 14;
            return _models.product_enum.create({
              data: 'N/A'
            });

          case 14:
            _context3.next = 16;
            return _models.country_enum.create({
              data: 'N/A',
              code: 'N/A'
            });

          case 16:
            loadIfNotExist(_models.class_enum, initialData.class);
            loadIfNotExist(_models.currency_enum, initialData.currency);
            loadIfNotExist(_models.revenue_type_enum, initialData.revenue_type);
            loadIfNotExist(_models.status_enum, initialData.status);
            loadIfNotExist(_models.subscription_enum, initialData.subscription);
            loadIfNotExist(_models.type_enum, initialData.type);
            loadIfNotExist(_models.product_enum, initialData.product);
            _models.month_enum.bulkCreate(initialData.month);
            loadCountry();

            loadAdmin();

          case 26:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  function initialize() {
    return _ref3.apply(this, arguments);
  }

  return initialize;
}();

function loadCountry() {
  var country = [{
    name: 'Afghanistan',
    code: 'AF'
  }, {
    name: 'Åland Islands',
    code: 'AX'
  }, {
    name: 'Albania',
    code: 'AL'
  }, {
    name: 'Algeria',
    code: 'DZ'
  }, {
    name: 'American Samoa',
    code: 'AS'
  }, {
    name: 'AndorrA',
    code: 'AD'
  }, {
    name: 'Angola',
    code: 'AO'
  }, {
    name: 'Anguilla',
    code: 'AI'
  }, {
    name: 'Antarctica',
    code: 'AQ'
  }, {
    name: 'Antigua and Barbuda',
    code: 'AG'
  }, {
    name: 'Argentina',
    code: 'AR'
  }, {
    name: 'Armenia',
    code: 'AM'
  }, {
    name: 'Aruba',
    code: 'AW'
  }, {
    name: 'Australia',
    code: 'AU'
  }, {
    name: 'Austria',
    code: 'AT'
  }, {
    name: 'Azerbaijan',
    code: 'AZ'
  }, {
    name: 'Bahamas',
    code: 'BS'
  }, {
    name: 'Bahrain',
    code: 'BH'
  }, {
    name: 'Bangladesh',
    code: 'BD'
  }, {
    name: 'Barbados',
    code: 'BB'
  }, {
    name: 'Belarus',
    code: 'BY'
  }, {
    name: 'Belgium',
    code: 'BE'
  }, {
    name: 'Belize',
    code: 'BZ'
  }, {
    name: 'Benin',
    code: 'BJ'
  }, {
    name: 'Bermuda',
    code: 'BM'
  }, {
    name: 'Bhutan',
    code: 'BT'
  }, {
    name: 'Bolivia',
    code: 'BO'
  }, {
    name: 'Bosnia and Herzegovina',
    code: 'BA'
  }, {
    name: 'Botswana',
    code: 'BW'
  }, {
    name: 'Bouvet Island',
    code: 'BV'
  }, {
    name: 'Brazil',
    code: 'BR'
  }, {
    name: 'British Indian Ocean Territory',
    code: 'IO'
  }, {
    name: 'Brunei Darussalam',
    code: 'BN'
  }, {
    name: 'Bulgaria',
    code: 'BG'
  }, {
    name: 'Burkina Faso',
    code: 'BF'
  }, {
    name: 'Burundi',
    code: 'BI'
  }, {
    name: 'Cambodia',
    code: 'KH'
  }, {
    name: 'Cameroon',
    code: 'CM'
  }, {
    name: 'Canada',
    code: 'CA'
  }, {
    name: 'Cape Verde',
    code: 'CV'
  }, {
    name: 'Cayman Islands',
    code: 'KY'
  }, {
    name: 'Central African Republic',
    code: 'CF'
  }, {
    name: 'Chad',
    code: 'TD'
  }, {
    name: 'Chile',
    code: 'CL'
  }, {
    name: 'China',
    code: 'CN'
  }, {
    name: 'Christmas Island',
    code: 'CX'
  }, {
    name: 'Cocos (Keeling) Islands',
    code: 'CC'
  }, {
    name: 'Colombia',
    code: 'CO'
  }, {
    name: 'Comoros',
    code: 'KM'
  }, {
    name: 'Congo',
    code: 'CG'
  }, {
    name: 'Congo, The Democratic Republic of the',
    code: 'CD'
  }, {
    name: 'Cook Islands',
    code: 'CK'
  }, {
    name: 'Costa Rica',
    code: 'CR'
  }, {
    name: 'Cote D\'Ivoire',
    code: 'CI'
  }, {
    name: 'Croatia',
    code: 'HR'
  }, {
    name: 'Cuba',
    code: 'CU'
  }, {
    name: 'Cyprus',
    code: 'CY'
  }, {
    name: 'Czech Republic',
    code: 'CZ'
  }, {
    name: 'Denmark',
    code: 'DK'
  }, {
    name: 'Djibouti',
    code: 'DJ'
  }, {
    name: 'Dominica',
    code: 'DM'
  }, {
    name: 'Dominican Republic',
    code: 'DO'
  }, {
    name: 'Ecuador',
    code: 'EC'
  }, {
    name: 'Egypt',
    code: 'EG'
  }, {
    name: 'El Salvador',
    code: 'SV'
  }, {
    name: 'Equatorial Guinea',
    code: 'GQ'
  }, {
    name: 'Eritrea',
    code: 'ER'
  }, {
    name: 'Estonia',
    code: 'EE'
  }, {
    name: 'Ethiopia',
    code: 'ET'
  }, {
    name: 'Falkland Islands (Malvinas)',
    code: 'FK'
  }, {
    name: 'Faroe Islands',
    code: 'FO'
  }, {
    name: 'Fiji',
    code: 'FJ'
  }, {
    name: 'Finland',
    code: 'FI'
  }, {
    name: 'France',
    code: 'FR'
  }, {
    name: 'French Guiana',
    code: 'GF'
  }, {
    name: 'French Polynesia',
    code: 'PF'
  }, {
    name: 'French Southern Territories',
    code: 'TF'
  }, {
    name: 'Gabon',
    code: 'GA'
  }, {
    name: 'Gambia',
    code: 'GM'
  }, {
    name: 'Georgia',
    code: 'GE'
  }, {
    name: 'Germany',
    code: 'DE'
  }, {
    name: 'Ghana',
    code: 'GH'
  }, {
    name: 'Gibraltar',
    code: 'GI'
  }, {
    name: 'Greece',
    code: 'GR'
  }, {
    name: 'Greenland',
    code: 'GL'
  }, {
    name: 'Grenada',
    code: 'GD'
  }, {
    name: 'Guadeloupe',
    code: 'GP'
  }, {
    name: 'Guam',
    code: 'GU'
  }, {
    name: 'Guatemala',
    code: 'GT'
  }, {
    name: 'Guernsey',
    code: 'GG'
  }, {
    name: 'Guinea',
    code: 'GN'
  }, {
    name: 'Guinea-Bissau',
    code: 'GW'
  }, {
    name: 'Guyana',
    code: 'GY'
  }, {
    name: 'Haiti',
    code: 'HT'
  }, {
    name: 'Heard Island and Mcdonald Islands',
    code: 'HM'
  }, {
    name: 'Holy See (Vatican City State)',
    code: 'VA'
  }, {
    name: 'Honduras',
    code: 'HN'
  }, {
    name: 'Hong Kong',
    code: 'HK'
  }, {
    name: 'Hungary',
    code: 'HU'
  }, {
    name: 'Iceland',
    code: 'IS'
  }, {
    name: 'India',
    code: 'IN'
  }, {
    name: 'Indonesia',
    code: 'ID'
  }, {
    name: 'Iran, Islamic Republic Of',
    code: 'IR'
  }, {
    name: 'Iraq',
    code: 'IQ'
  }, {
    name: 'Ireland',
    code: 'IE'
  }, {
    name: 'Isle of Man',
    code: 'IM'
  }, {
    name: 'Israel',
    code: 'IL'
  }, {
    name: 'Italy',
    code: 'IT'
  }, {
    name: 'Jamaica',
    code: 'JM'
  }, {
    name: 'Japan',
    code: 'JP'
  }, {
    name: 'Jersey',
    code: 'JE'
  }, {
    name: 'Jordan',
    code: 'JO'
  }, {
    name: 'Kazakhstan',
    code: 'KZ'
  }, {
    name: 'Kenya',
    code: 'KE'
  }, {
    name: 'Kiribati',
    code: 'KI'
  }, {
    name: 'Korea, Democratic People\'S Republic of',
    code: 'KP'
  }, {
    name: 'Korea, Republic of',
    code: 'KR'
  }, {
    name: 'Kuwait',
    code: 'KW'
  }, {
    name: 'Kyrgyzstan',
    code: 'KG'
  }, {
    name: 'Lao People\'S Democratic Republic',
    code: 'LA'
  }, {
    name: 'Latvia',
    code: 'LV'
  }, {
    name: 'Lebanon',
    code: 'LB'
  }, {
    name: 'Lesotho',
    code: 'LS'
  }, {
    name: 'Liberia',
    code: 'LR'
  }, {
    name: 'Libyan Arab Jamahiriya',
    code: 'LY'
  }, {
    name: 'Liechtenstein',
    code: 'LI'
  }, {
    name: 'Lithuania',
    code: 'LT'
  }, {
    name: 'Luxembourg',
    code: 'LU'
  }, {
    name: 'Macao',
    code: 'MO'
  }, {
    name: 'Macedonia, The Former Yugoslav Republic of',
    code: 'MK'
  }, {
    name: 'Madagascar',
    code: 'MG'
  }, {
    name: 'Malawi',
    code: 'MW'
  }, {
    name: 'Malaysia',
    code: 'MY'
  }, {
    name: 'Maldives',
    code: 'MV'
  }, {
    name: 'Mali',
    code: 'ML'
  }, {
    name: 'Malta',
    code: 'MT'
  }, {
    name: 'Marshall Islands',
    code: 'MH'
  }, {
    name: 'Martinique',
    code: 'MQ'
  }, {
    name: 'Mauritania',
    code: 'MR'
  }, {
    name: 'Mauritius',
    code: 'MU'
  }, {
    name: 'Mayotte',
    code: 'YT'
  }, {
    name: 'Mexico',
    code: 'MX'
  }, {
    name: 'Micronesia, Federated States of',
    code: 'FM'
  }, {
    name: 'Moldova, Republic of',
    code: 'MD'
  }, {
    name: 'Monaco',
    code: 'MC'
  }, {
    name: 'Mongolia',
    code: 'MN'
  }, {
    name: 'Montserrat',
    code: 'MS'
  }, {
    name: 'Morocco',
    code: 'MA'
  }, {
    name: 'Mozambique',
    code: 'MZ'
  }, {
    name: 'Myanmar',
    code: 'MM'
  }, {
    name: 'Namibia',
    code: 'NA'
  }, {
    name: 'Nauru',
    code: 'NR'
  }, {
    name: 'Nepal',
    code: 'NP'
  }, {
    name: 'Netherlands',
    code: 'NL'
  }, {
    name: 'Netherlands Antilles',
    code: 'AN'
  }, {
    name: 'New Caledonia',
    code: 'NC'
  }, {
    name: 'New Zealand',
    code: 'NZ'
  }, {
    name: 'Nicaragua',
    code: 'NI'
  }, {
    name: 'Niger',
    code: 'NE'
  }, {
    name: 'Nigeria',
    code: 'NG'
  }, {
    name: 'Niue',
    code: 'NU'
  }, {
    name: 'Norfolk Island',
    code: 'NF'
  }, {
    name: 'Northern Mariana Islands',
    code: 'MP'
  }, {
    name: 'Norway',
    code: 'NO'
  }, {
    name: 'Oman',
    code: 'OM'
  }, {
    name: 'Pakistan',
    code: 'PK'
  }, {
    name: 'Palau',
    code: 'PW'
  }, {
    name: 'Palestinian Territory, Occupied',
    code: 'PS'
  }, {
    name: 'Panama',
    code: 'PA'
  }, {
    name: 'Papua New Guinea',
    code: 'PG'
  }, {
    name: 'Paraguay',
    code: 'PY'
  }, {
    name: 'Peru',
    code: 'PE'
  }, {
    name: 'Philippines',
    code: 'PH'
  }, {
    name: 'Pitcairn',
    code: 'PN'
  }, {
    name: 'Poland',
    code: 'PL'
  }, {
    name: 'Portugal',
    code: 'PT'
  }, {
    name: 'Puerto Rico',
    code: 'PR'
  }, {
    name: 'Qatar',
    code: 'QA'
  }, {
    name: 'Reunion',
    code: 'RE'
  }, {
    name: 'Romania',
    code: 'RO'
  }, {
    name: 'Russian Federation',
    code: 'RU'
  }, {
    name: 'RWANDA',
    code: 'RW'
  }, {
    name: 'Saint Helena',
    code: 'SH'
  }, {
    name: 'Saint Kitts and Nevis',
    code: 'KN'
  }, {
    name: 'Saint Lucia',
    code: 'LC'
  }, {
    name: 'Saint Pierre and Miquelon',
    code: 'PM'
  }, {
    name: 'Saint Vincent and the Grenadines',
    code: 'VC'
  }, {
    name: 'Samoa',
    code: 'WS'
  }, {
    name: 'San Marino',
    code: 'SM'
  }, {
    name: 'Sao Tome and Principe',
    code: 'ST'
  }, {
    name: 'Saudi Arabia',
    code: 'SA'
  }, {
    name: 'Senegal',
    code: 'SN'
  }, {
    name: 'Serbia and Montenegro',
    code: 'CS'
  }, {
    name: 'Seychelles',
    code: 'SC'
  }, {
    name: 'Sierra Leone',
    code: 'SL'
  }, {
    name: 'Singapore',
    code: 'SG'
  }, {
    name: 'Slovakia',
    code: 'SK'
  }, {
    name: 'Slovenia',
    code: 'SI'
  }, {
    name: 'Solomon Islands',
    code: 'SB'
  }, {
    name: 'Somalia',
    code: 'SO'
  }, {
    name: 'South Africa',
    code: 'ZA'
  }, {
    name: 'South Georgia and the South Sandwich Islands',
    code: 'GS'
  }, {
    name: 'Spain',
    code: 'ES'
  }, {
    name: 'Sri Lanka',
    code: 'LK'
  }, {
    name: 'Sudan',
    code: 'SD'
  }, {
    name: 'Suriname',
    code: 'SR'
  }, {
    name: 'Svalbard and Jan Mayen',
    code: 'SJ'
  }, {
    name: 'Swaziland',
    code: 'SZ'
  }, {
    name: 'Sweden',
    code: 'SE'
  }, {
    name: 'Switzerland',
    code: 'CH'
  }, {
    name: 'Syrian Arab Republic',
    code: 'SY'
  }, {
    name: 'Taiwan, Province of China',
    code: 'TW'
  }, {
    name: 'Tajikistan',
    code: 'TJ'
  }, {
    name: 'Tanzania, United Republic of',
    code: 'TZ'
  }, {
    name: 'Thailand',
    code: 'TH'
  }, {
    name: 'Timor-Leste',
    code: 'TL'
  }, {
    name: 'Togo',
    code: 'TG'
  }, {
    name: 'Tokelau',
    code: 'TK'
  }, {
    name: 'Tonga',
    code: 'TO'
  }, {
    name: 'Trinidad and Tobago',
    code: 'TT'
  }, {
    name: 'Tunisia',
    code: 'TN'
  }, {
    name: 'Turkey',
    code: 'TR'
  }, {
    name: 'Turkmenistan',
    code: 'TM'
  }, {
    name: 'Turks and Caicos Islands',
    code: 'TC'
  }, {
    name: 'Tuvalu',
    code: 'TV'
  }, {
    name: 'Uganda',
    code: 'UG'
  }, {
    name: 'Ukraine',
    code: 'UA'
  }, {
    name: 'United Arab Emirates',
    code: 'AE'
  }, {
    name: 'United Kingdom',
    code: 'GB'
  }, {
    name: 'United States',
    code: 'US'
  }, {
    name: 'United States Minor Outlying Islands',
    code: 'UM'
  }, {
    name: 'Uruguay',
    code: 'UY'
  }, {
    name: 'Uzbekistan',
    code: 'UZ'
  }, {
    name: 'Vanuatu',
    code: 'VU'
  }, {
    name: 'Venezuela',
    code: 'VE'
  }, {
    name: 'Viet Nam',
    code: 'VN'
  }, {
    name: 'Virgin Islands, British',
    code: 'VG'
  }, {
    name: 'Virgin Islands, U.S.',
    code: 'VI'
  }, {
    name: 'Wallis and Futuna',
    code: 'WF'
  }, {
    name: 'Western Sahara',
    code: 'EH'
  }, {
    name: 'Yemen',
    code: 'YE'
  }, {
    name: 'Zambia',
    code: 'ZM'
  }, {
    name: 'Zimbabwe',
    code: 'ZW'
  }];
  country.forEach(function (i) {
    _models.country_enum.create({
      code: i.code,
      data: i.name
    });
  });
}