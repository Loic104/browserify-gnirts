# Browserify-gnirts
A [browserify](https://github.com/substack/node-browserify) transform for [gnirts](https://github.com/anseki/gnirts)

# Installing
`
npm i -D browserify-gnirts
`

# Usage

```javascript
var gnirts = require('browserify-gnirts')

browserifyBundle.transform(gnirts);
```

# Command line

`
./node_modules/.bin/browserify -t browserify-gnirts test/test-*.js -o bundle.js
`

# More information

See [gnirts](https://github.com/anseki/gnirts) for the usage of the directive and more information.