"use strict";

const Utils = {
  leftPad: function(val) {
    if (val < 10) return `0${val}`;
    return `${val}`;
  }
};

export default Utils;
