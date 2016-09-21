'use strict'

const { Driver } = require('clay-driver-base')

// Define custom driver
class MyDriver extends Driver {
  create (namepath, data) { /* ... */ }

  read (namepath) { /* ... */ }

  update (namepath, data) { /* ... */ }

  delete (namepath) { /* ... */ }

  cursor (namepath, options = {}) { /* ... */ }
}

{
  const clayLump = require('clay-lump')
  let lump01 = clayLump({
    driver: new MyDriver({ /* ... */ })
  })
  /* ... */
}