var browserify = require('browserify')
var path = require('path')
var gnirtsify = require('../')
var expect = require('expect')
var vm = require('vm')

describe('browserify-gnirts', function () {
  it('should mangle the single line', function (done) {
    browserify(path.join(__dirname, '/testdata/oneline.js'))
      .transform(gnirtsify)
      .bundle(function (err, src) {
        // console.log(src.toString('utf8'))
        if (err) return done(err)

        vm.runInNewContext(src, {
          console: {
            log: function (msg) {
              expect(msg).toEqual('open sesame')
              done()
            }
          }
        })
      })
  })

  it('should mangle multiple lines', function (done) {
    browserify(path.join(__dirname, '/testdata/multiplelines.js'))
      .transform(gnirtsify)
      .bundle(function (err, src) {
        // console.log(src.toString('utf8'))
        if (err) return done(err)

        vm.runInNewContext(src, {
          console: {
            log: function (msg) {
              expect(msg).toEqual('open white sesame street')
              done()
            }
          }
        })
      })
  })
})

