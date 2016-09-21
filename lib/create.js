/**
 * Create driver instance
 * @function create
 * @returns {Driver}
 */
'use strict'

const Driver = require('./driver')

/** @lends create */
function create (args) {
  return new Driver(...args)
}

module.exports = create
