# http-status-name [![Build Status](https://travis-ci.org/aleciafb/http-status-name.svg?branch=master)](https://travis-ci.org/aleciafb/http-status-name)

Get HTTP-status name by code. 

# Installation
From the same directory as your project's package.json, install this package with the following command:
```
npm install http-status-name --save-dev
```

# Usage
```javascript
httpStatusName  = require("http-status-name")

httpStatusName('200') 
// "OK"

httpStatusName('404') 
// "Not_Found"

httpStatusName('500')
// "Internal_Server_Error"
```

[Try it out](https://tonicdev.com/npm/http-status-name) yourself. 

# Contributing
Found a :beetle:? Have a feature request? Please [create an Issue](https://github.com/aleciafb/http-status-name/issues/new).

Pull requests are also encouraged, and if you find this project useful please consider :star:-ing it to show your support! 

Thank you!

# Authors 
### Andre Helberg
* https://github.com/A-Helberg/
* https://twitter.com/A_Helberg

### Alecia Bester
* https://github.com/aleciafb
* https://twitter.com/aleciafb

# License
Copyright (c) 2016 Alecia Bester, contributors. Released under the MIT license
