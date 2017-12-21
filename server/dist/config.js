"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var config = exports.config = {
  db: {
    database: "jdetransition",
    user: "viziya",
    pass: 'viziya2',
    options: {
      dialect: 'mysql',
      host: 'localhost',
      define: {
        timestamps: false
      }
    }
  }
};
exports.default = config;