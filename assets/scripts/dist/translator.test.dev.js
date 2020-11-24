"use strict";

var _translateText = _interopRequireDefault(require("./translateText"));

var _types = require("@babel/types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//valid inputs
it('should translate a to .-', function () {
  var testTranslate = (0, _translateText["default"])("a");
  expect(testTranslate).toBe(".-");
});
it('should translate .- to a', function () {
  var testTranslate = (0, _translateText["default"])(".-");
  expect(testTranslate).toBe("A");
});
it('should translate .- to a', function () {
  var testTranslate = (0, _translateText["default"])(".-");
  expect(testTranslate).toBe("A");
});