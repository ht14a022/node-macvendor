/*
 * macvendor
 * https://github.com/pspeter3/node-macvendor
 *
 * Copyright (c) 2012 Phips Peter
 * Licensed under the MIT license.
 */
var request = require('request');

var macvendor = module.exports = function (mac, callback = () => { }) {
  const p = new Promise((resolve, reject) => {
    request('http://api.macvendors.com/' + mac, function (err, res, body) {
      // Check for request errors
      if (err) {
        return reject(err);
      }
      resolve(body);
    });
  });
  p
    .then(obj => {
      process.nextTick(() => callback(null, obj));
    })
    .catch(err => {
      process.nextTick(() => callback(err));
    });
  return p;
};