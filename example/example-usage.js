'use strict'

const { Driver } = require('clay-driver-base')

// Define custom driver
class MyDriver extends Driver {
  one (namespace, id) { /* ... */ }

  list (namespace, condition) { /* ... */ }

  create (namespace, attributes) { /* ... */ }

  update (namespace, id, attributes) { /* ... */ }

  destroy (namespace, id) { /* ... */ }

}

{
  const clayLump = require('clay-lump')
  let lump01 = clayLump({
    driver: new MyDriver({ /* ... */ })
  })
  /* ... */
}
