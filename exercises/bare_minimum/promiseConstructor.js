/**
 * Implement these promise-returning functions.
 * Any successful value should be made available in the next `then` block chained
 * to the function invocation, while errors should be available in the `catch` block
 */

var fs = require('fs');
var request = require('needle');
var Promise = require('bluebird');

// This function should retrieve the first line of the file at `filePath`
//var pluckFirstline = promisify(pluck)
var pluckFirstLineFromFileAsync = function (filePath, callback) {

  var myPromise = new Promise((resolve, reject) => {
    fs.readFile(filePath, function (err, content) {
      if (err) {
        reject(err);
      } else {
        var wholeContent = content.toString();
        var firstLine = wholeContent.split('\n')[0];
        resolve(firstLine);
      }
    });
  });

  return myPromise;



  // myPromise().then((content)=> {
  //   var wholeContent = content.toString();
  //   var firstLine = wholeContent.split('\n')[0];
  //   callback(null, firstLine)
  // }).catch((error)=> {
  //   callback(error)
  // })

  // return myPromise();
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCodeAsync = function (url) {
  return new Promise((resolve, reject) => {
    request.get(url, function(err, response) {
      if (err) {
        reject(err);
      } else {
        resolve(response.statusCode);
      }
    });
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCodeAsync: getStatusCodeAsync,
  pluckFirstLineFromFileAsync: pluckFirstLineFromFileAsync
};
