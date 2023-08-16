"use strict";

var _Canvas = require("./Canvas.js");

var _LineEditor = require("./LineEditor.js");

var _electron = require("electron");

window.onload = function () {
  var canvas = new _Canvas.Canvas();
  var lineEditor = new _LineEditor.LineEditor();
  lineEditor.lineColorChanged.add(function () {
    var lineColor = lineEditor.getLineColor();
    canvas.setLineColor(lineColor);
  });
  lineEditor.lineWidthChanged.add(function () {
    var lineWidth = lineEditor.getLineWidth();
    canvas.setLineWidth(lineWidth);
  });

  _electron.ipcRenderer.on('new-image', function () {
    if (canvas.getShowCanvas()) {
      canvas.resetCanvas();
    } else {
      canvas.showCanvas();
      lineEditor.showEditor();
    }
  });

  _electron.ipcRenderer.on('save-image', function () {
    var pictureUrl = canvas.getCanvasPictureUrl();
    var link = document.createElement("a");
    link.href = pictureUrl;
    link.download = 'canvas-image';
    link.click();
  });

  _electron.ipcRenderer.on('image-selected', function (event, imageSrc) {
    var image = new Image();

    image.onload = function () {
      canvas.showCanvas();
      canvas.insertPicture(image);
      lineEditor.showEditor();
    };

    image.onerror = function () {
      return console.error('failed to load image');
    };

    image.src = imageSrc;
  });
};