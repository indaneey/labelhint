labelHint.js
============

labelHint.js is used to label your webpage elements in an easy way. It the solution to help a user to quickly get hint on webpage elements. And is perfect for web page that need more explain to user. It has more cross-browser compatiblity.

Syntax
------

### Import `labelHint()` from label-hint

```js
import { labelHint } from 'label-hint';
```

Examples
--------

### Calling labelHint using `require()`

```js
var labelHint = require('label-hint');
var label = new labelHint();
```

### Calling labelHint using `script tag`

```html
<head>
<script src="labelHint.min.js"></script>
</head>
```

and then in `script tag` call labelHint

```js
var label = new labelHint();
```

### Set Data Attribute to HTML Elements

To use labelHint in your page, you have to set data attribute to HTML element that you want to show label on it.

Example
-------

```html
<input type="email" data-labelHint="Enter your email here">
<input type="text" data-labelHint="Enter your fullname here">
```

The data attribute must be `data-labelHint` then follow by your label hint.

### Customise label container

[labelHint] has method called `class()` that you can use to add classname to your label and then customise it using CSS style

```js
var labelHint = require('label-hint');
var label = new labelHint();
label.class('labelstyle');
```

use CSS to style your label

```css
  .labelstyle{
    background-color: "black";
    color: "white"
  }
```

NOTE: Sometimes if your web page is already style div, span or label tag then we recommended to style your label container seperately

Example
-----

```css
  .labelstyle{
    background-color: black;
    border-radius: 5px
  }
  .labelstyle span{
    padding: 10px
  }
  .labelstyle span label{
    color: white;
    font-size: 20px;
  }

```

This will help to have more freedom when customise your label container.

### Set Timeout

To set timeout that you want your label to disappear, if your mouse is hover on HTML element.

```js
var label = new labelHint({
  timeout: 5000
});
```

if not set timeout value, the default value will be set which is 1m40s.
But if your mouse move out from HTML element, the label will disappear even if the timeout is not reach.

====

Installation
------------------

```bash
# Basic Node.JS installation
npm install label-hint --save
```
