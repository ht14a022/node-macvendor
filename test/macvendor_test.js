var macvendor = require('../lib/macvendor.js');
var vows = require('vows');
var assert = require('assert');

vows.describe('macvendor').addBatch({
  'An empty mac': {
    topic: function () {
      macvendor('', this.callback);
    },
    'should be undefined': function (err, vendor) {
      assert.strictEqual(vendor, 'No MAC address provided\n');
    }
  },
  'A non existent mac': {
    topic: function () {
      macvendor('01:23:45:67:89:ab', this.callback);
    },
    'should be undefined': function (err, vendor) {
      assert.strictEqual(vendor, 'Vendor not found\n');
    }
  },
  'An apple mac': {
    topic: function () {
      macvendor('00:1C:B3:09:85:15', this.callback);
    },
    'should be undefined': function (err, vendor) {
      assert.strictEqual(vendor, 'Apple, Inc.');
    }
  },
  'An apple mac with promise': {
    topic: function () {
      macvendor('00:1C:B3:09:85:15')
        .then(vendor => this.callback(false, vendor))
        .catch(err => this.callback(err));
    },
    'should be undefined': function (err, vendor) {
      assert.strictEqual(vendor, 'Apple, Inc.');
    }
  }
}).export(module);