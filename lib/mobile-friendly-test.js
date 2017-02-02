/*
The MIT License (MIT)

Copyright (c) 2016 Gabriel Montalvo

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

'use strict';

const request = require('request');

const MobileFriendlyTest = function (apiKey) {
  if (!(this instanceof MobileFriendlyTest)) {
    return new MobileFriendlyTest(apiKey);
  }
  
  this.url = 'https://searchconsole.googleapis.com/v1/urlTestingTools/mobileFriendlyTest:run?key=' + apiKey;
};

(function () {
  this.run = function (url, cb) {
    const serverUrl = this.url;

    request.post({
      headers: {
        'content-type': 'application/json'
      },
      url: serverUrl,
      body: '{url:"' + url + '"}'
    }, function (err, res) {
      if (err) {
        return cb(err);
      }

      const testResult = JSON.parse(res.body);

      return cb(null, testResult);
    });
  };
}).call(MobileFriendlyTest.prototype);

module.exports = MobileFriendlyTest;