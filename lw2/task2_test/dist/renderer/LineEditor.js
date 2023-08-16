"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LineEditor = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var _require = require('../utils/Signal.js'),
    Signal = _require.Signal;

var LineEditor = /*#__PURE__*/function () {
  function LineEditor() {
    _classCallCheck(this, LineEditor);

    this.show = false;
    this.htmlElement = document.getElementById('line-editor');
    this.lineColor = '#000';
    this.lineWidth = 5;
    this.lineColorChanged = new Signal();
    this.lineWidthChanged = new Signal();
    this.initStyleSubscribers();
  }

  _createClass(LineEditor, [{
    key: "getLineColor",
    value: function getLineColor() {
      return this.lineColor;
    }
  }, {
    key: "getLineWidth",
    value: function getLineWidth() {
      return this.lineWidth;
    }
  }, {
    key: "showEditor",
    value: function showEditor() {
      this.show = true;
      this.htmlElement.style.setProperty('visibility', 'visible');
    }
  }, {
    key: "hideEditor",
    value: function hideEditor() {
      this.show = false;
      this.htmlElement.style.setProperty('visibility', 'hidden');
    }
  }, {
    key: "initStyleSubscribers",
    value: function initStyleSubscribers() {
      var _this = this;

      var lineColorPicker = document.getElementById('line-color-picker');
      var lineWidthInput = document.getElementById('line-width-input');
      lineColorPicker.addEventListener('input', function () {
        _this.lineColor = lineColorPicker.value;

        _this.lineColorChanged.dispatch();
      });
      lineWidthInput.addEventListener('input', function () {
        _this.lineWidth = lineWidthInput.value;

        _this.lineWidthChanged.dispatch();
      });
    }
  }]);

  return LineEditor;
}();

exports.LineEditor = LineEditor;