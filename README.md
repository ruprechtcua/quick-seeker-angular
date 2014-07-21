# quick-seeker-angular
A seek.com directive to easily embed the latest job posting in [seek.com.au](http://seek.com)

![alt tag](https://raw.githubusercontent.com/ruprechtcua/quick-seeker-angular/master/readme/screenshot.png)

## Build, Test, Deploy
```
npm install
bower install

//run local server to test
grunt serve

//run test script
grunt test

//build distribution copy
grunt
```

## How to use it

Include CSS JS from /dist and copy /views/posting.html 
```
<!-- CSS -->
<link rel="stylesheet" href="styles/seek.min.css">

<!-- JS -->
<script src="scripts/seek.min.js"></script>
```

You must include the seeker-directive dependency on your angular module:
```
var app = angular.module("demoapp", ["seeker"]);
```

After that, you must include the markup directive on your HTML page, like this:
```html
<body ng-app="demoapp">
<seek count="20" keywords="front" classification="6281" location="3106"></seek>
</body>
```
+ count - the number of job posting you want to display. the max is set to 20
+ keywords - filter keywords of job posting
+ classification - job posting classification. e.g. 6281 is IT
+ location - job posting location. e.g. 3106 is Victoria

Currently don't have the list of classification and location which seek.com.au api accepts. Crawling can be done do list all possible values.


