'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_express2.default.static(_path2.default.join(__dirname, '/public')));

app.get('/', function (req, res) {
  res.send('index.html');
});

app.get('/hello', function (req, res) {
  res.send(process.env.NODE_ENV);
});

app.listen(3000, function (err) {
  if (err) console.log('Server Error');
  console.log('Server Started :', process.env.NODE_ENV);
});