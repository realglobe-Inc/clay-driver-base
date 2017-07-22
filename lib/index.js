/**
 * Base driver for clay
 * @module clay-driver-base
 * @version 3.1.1
 */

'use strict'

const create = require('./create')
const Driver = require('./driver')

let lib = create.bind(this)

Object.assign(lib, Driver, {
  create,
  Driver
})

module.exports = lib
