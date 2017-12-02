"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Utils = {
  leftPad: function leftPad(val) {
    if (val < 10) return "0" + val;
    return "" + val;
  }
};

exports.default = Utils;
//# sourceMappingURL=Utils.js.map