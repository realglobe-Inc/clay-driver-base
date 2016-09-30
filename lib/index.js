/**
 * Base driver for clay
 * @module clay-driver-base
 * @version 0.0.5
 */

'use strict'

const create = require('./create')
const Driver = require('./driver')
const assertDriver = require('./assert_driver')

let lib = create.bind(this)

Object.assign(lib, Driver, {
  assertDriver,
  create,
  Driver
})

module.exports = lib
