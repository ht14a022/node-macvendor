/*
 * macvendor
 * https://github.com/pspeter3/node-macvendor
 *
 * Copyright (c) 2012 Phips Peter
 * Licensed under the MIT license.
 */
var request = require('request');

var macvendor = module.exports = function(mac, callback) {
  request('http://api.macvendors.com/' + mac, function(err, res, body) {
    // Check for request errors
    if (err) {
      return callback(err);
    }
    callback(err, body);
  });
};