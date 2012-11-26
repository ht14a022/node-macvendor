var macvendor = require('../lib/macvendor.js');
var vows = require('vows');
var assert = require('assert');

vows.describe('macvendor').addBatch({
  'An empty mac': {
    topic: function() {
      macvendor('', this.callback);
    },
    'should be undefined': function(err, vendor) {
      assert.isUndefined(vendor);
    }
  },
  'A non existent mac': {
    topic: function() {
      macvendor('01:23:45:67:89:ab', this.callback);
    },
    'should be undefined': function(err, vendor) {
      assert.isUndefined(vendor);
    }
  },
  'An apple mac': {
    topic: function() {
      macvendor('00:1C:B3:09:85:15', this.callback);
    },
    'should be undefined': function(err, vendor) {
      assert.strictEqual(vendor, 'APPLE, INC');
    }
  }
}).export(module);