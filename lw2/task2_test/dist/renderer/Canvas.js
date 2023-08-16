"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Canvas = void 0;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var INITIAL_CANVAS_WIDTH = 500;
var INITIAL_CANVAS_HEIGHT = 500;

var Canvas = /*#__PURE__*/function () {
  function Canvas() {
    _classCallCheck(this, Canvas);

    this.show = false;
    this.picture = null;
    this.canvasElement = null;
    this.lineColor = '#000';
    this.lineWidth = 5;
    this.drawingInProcess = false;
    this.parentContainer = document.querySelector('.editor-container');
    this.initCanvas();
    this.initCanvasDrawing();
  }

  _createClass(Canvas, [{
    key: "getCanvasElement",
    value: function getCanvasElement() {
      return this.canvasElement;
    }
  }, {
    key: "getShowCanvas",
    value: function getShowCanvas() {
      return this.show;
    }
  }, {
    key: "showCanvas",
    value: function showCanvas() {
      if (!this.show) {
        this.show = true;
        this.parentContainer.appendChild(this.canvasElement);
        this.setCanvasSize(INITIAL_CANVAS_WIDTH, INITIAL_CANVAS_HEIGHT);
      }
    }
  }, {
    key: "resetCanvas",
    value: function resetCanvas() {
      this.picture = null;
      this.setCanvasSize(INITIAL_CANVAS_WIDTH, INITIAL_CANVAS_HEIGHT);
      this.redraw();
    }
  }, {
    key: "setLineColor",
    value: function setLineColor(lineColor) {
      this.lineColor = lineColor;
    }
  }, {
    key: "setLineWidth",
    value: function setLineWidth(lineWidth) {
      this.lineWidth = lineWidth;
    }
  }, {
    key: "clearCanvas",
    value: function clearCanvas() {
      var canvasContext = this.canvasElement.getContext('2d');

      var _this$canvasElement$g = this.canvasElement.getBoundingClientRect(),
          width = _this$canvasElement$g.width,
          height = _this$canvasElement$g.height;

      canvasContext.clearRect(0, 0, width, height);
    }
  }, {
    key: "redraw",
    value: function redraw() {
      this.clearCanvas();

      if (this.picture) {
        var canvasContext = this.canvasElement.getContext('2d');
        canvasContext.drawImage(this.picture.image, this.picture.left, this.picture.top);
      }
    }
  }, {
    key: "insertPicture",
    value: function insertPicture(image) {
      this.picture = {
        image: image,
        left: 0,
        top: 0,
        width: image.width,
        height: image.height
      };
      this.setCanvasSize(image.width, image.height);
      this.redraw();
    }
  }, {
    key: "getCanvasPictureUrl",
    value: function getCanvasPictureUrl() {
      return this.canvasElement.toDataURL("image/jpg");
    }
  }, {
    key: "setCanvasSize",
    value: function setCanvasSize(width, height) {
      this.canvasElement.setAttribute('width', width);
      this.canvasElement.setAttribute('height', height);
      this.redraw();
    }
  }, {
    key: "initCanvas",
    value: function initCanvas() {
      this.canvasElement = document.createElement('canvas');
      this.canvasElement.id = 'canvas';
      this.canvasElement.className = 'canvas';
    }
  }, {
    key: "initCanvasDrawing",
    value: function initCanvasDrawing() {
      var _this = this;

      this.canvasElement.onmousedown = function (e) {
        return _this.onMouseDown(e);
      };
    }
  }, {
    key: "getPointRelativeCanvas",
    value: function getPointRelativeCanvas(pointX, pointY) {
      var _this$canvasElement$g2 = this.canvasElement.getBoundingClientRect(),
          canvasLeft = _this$canvasElement$g2.left,
          canvasTop = _this$canvasElement$g2.top;

      return [pointX - canvasLeft, pointY - canvasTop];
    }
  }, {
    key: "onMouseUp",
    value: function onMouseUp(e) {
      window.onmousemove = null;
      window.onmouseup = null;
      var canvasContext = this.canvasElement.getContext('2d');

      var _this$getPointRelativ = this.getPointRelativeCanvas(e.clientX, e.clientY),
          _this$getPointRelativ2 = _slicedToArray(_this$getPointRelativ, 2),
          pointX = _this$getPointRelativ2[0],
          pointY = _this$getPointRelativ2[1];

      canvasContext.lineTo(pointX, pointY);
      canvasContext.stroke();
      canvasContext.closePath();
      this.drawingInProcess = false;
    }
  }, {
    key: "onMouseMove",
    value: function onMouseMove(e) {
      if (this.drawingInProcess) {
        var canvasContext = this.canvasElement.getContext('2d');

        var _this$getPointRelativ3 = this.getPointRelativeCanvas(e.clientX, e.clientY),
            _this$getPointRelativ4 = _slicedToArray(_this$getPointRelativ3, 2),
            pointX = _this$getPointRelativ4[0],
            pointY = _this$getPointRelativ4[1];

        canvasContext.lineTo(pointX, pointY);
        canvasContext.stroke();
      }
    }
  }, {
    key: "onMouseDown",
    value: function onMouseDown(e) {
      var _this2 = this;

      var canvasContext = this.canvasElement.getContext('2d');
      this.drawingInProcess = true;
      canvasContext.beginPath();
      canvasContext.lineWidth = this.lineWidth;
      canvasContext.strokeStyle = this.lineColor;

      var _this$getPointRelativ5 = this.getPointRelativeCanvas(e.clientX, e.clientY),
          _this$getPointRelativ6 = _slicedToArray(_this$getPointRelativ5, 2),
          pointX = _this$getPointRelativ6[0],
          pointY = _this$getPointRelativ6[1];

      canvasContext.moveTo(pointX, pointY);

      window.onmousemove = function (e) {
        return _this2.onMouseMove(e);
      };

      window.onmouseup = function (e) {
        return _this2.onMouseUp(e);
      };
    }
  }]);

  return Canvas;
}();

exports.Canvas = Canvas;