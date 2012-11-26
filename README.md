MacVendor
=========

A node.js library to figure out the vendor of a MAC address

Installation
------------

`npm install macvendor`

MacVendor relies on mikeal/request

About
-----

Macvendor calls the MacVenodrs API using GET which is documented at http://www.macvendors.com/api

Usage
-----

```javascript
var macvendor = require('macvendor');

macvendor('01:23:45:67:89:ab', function(err, vendor) {
  if (!err) {
  console.log(vendor);
  }
});
```

Err is passed along if request has an error and vendor is undefined if the service has no idea what the vendor is.

License
-------
Copyright (c) 2012 Phips Peter
Licensed under the MIT license.
