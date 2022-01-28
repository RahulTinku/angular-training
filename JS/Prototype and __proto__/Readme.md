##What is the difference between prototype and _proto_
prototype is the property of class constructor
eg:-

```
function iPhone () {}

// a method for recognizing face
iPhone.prototype.faceId = function(){}

// a method for taking videos
iPhone.prototype.video = function(){}

let newPhone = new iPhone()l

// Now newPhone will have all functions, including facdeId and Video
```

_proto_ is the property of class instance \n
proto is an object in every class instance that points to the property it was created from
