'use strict';

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_bodyParser2.default.urlencoded({ extended: false }));

app.post('/api/sms-promotion', function (req, res) {
  console.log(req.body);
});

app.set('port', process.env.PORT || 3001);

app.listen(app.get('port'), function () {
  console.log('Listening on ' + app.get('port'));
});