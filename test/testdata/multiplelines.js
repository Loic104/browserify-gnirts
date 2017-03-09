var password =
  'open' +
  // @mangle
  ' white' +
  ' sesame' + // <- This `+` is copied.
  // @/mangle
  ' street'
console.log(password)
