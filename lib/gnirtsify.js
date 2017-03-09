'use strict'
var through = require('through2')
var gnirts = require('gnirts')

module.exports = function () {
  return through.obj(function (buf, encoding, next) {
    var file = new Buffer(gnirts.mangle(buf.toString('utf8')))
    this.push(file)
    next()
  })
}

