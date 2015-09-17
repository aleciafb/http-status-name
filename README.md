# httpstatus-by-Name #

Get HTTP-Status number by name

## Why ##

In Rest-API's it is very important to use the right HTTP-Status codes. Often times we set or check against these codes. 
I prefere a source like **if res.statusCode == status.No_Content** instead of  **res.statusCode == 204** a lot more! 
## Install ##

```bash
npm install httpstatus-by-name 
```
## Usage ##

```javascript
var status = require('httpstatus-by-name');

…your routes…
res.send(status.Forbidden); // it is forbidden to use this resurce
```

## Internals ##

This module is just a map from names to Numbers. It does not have any functions. If you need to list all the codes, you should do the trick with underscore

```javascript
_.each(_.keys(status), function(name){
	console.log(name, "=", status[name]);
})
```

